# coding=UTF-8

from calendar import monthrange
from datetime import timedelta
import datetime
import sys 
import traceback

from django.contrib.auth.models import User
from django.db import models

from _user.models import Person


# #CHANGED
# class Product(models.Model):
# 	name = models.CharField(max_length=200)
# 	price = models.DecimalField("Preis", max_digits=15, decimal_places=2, blank=True, null=True)
class Account_Type(models.Model):
	name = models.CharField(max_length=200)

class Account(models.Model):
	number = models.IntegerField(max_length=10)
	name = models.CharField(max_length=200)
	balance = models.DecimalField(decimal_places=2, max_digits=15)
	type = models.ForeignKey(Account_Type, related_name="acount_type")
	
	def __unicode__(self):
		return str(self.name)

	class Meta:
		verbose_name = "Konto"
		verbose_name_plural = "Kontos"

class Accounting(models.Model):
	debitor = models.ForeignKey(Account, related_name="debitor")
	creditor = models.ForeignKey(Account, related_name="creditor")
	ammount = models.DecimalField(decimal_places=2, max_digits=15)
	date = models.DateField("Buchungsatum", default=datetime.date.today)

	def __unicode__(self):
		return str(str(self.debitor.name) + " / " + str(self.creditor.name) + " = " + str(self.ammount))

	class Meta:
		verbose_name = "Buchung"
		verbose_name_plural = "Buchungen"

class Frequency(models.Model):
	frequency = models.IntegerField(max_length=1, null=True)

	def __unicode__(self):
		return str(self.frequency)

	class Meta:
		verbose_name = "Teilnamehäufigkeit"
		verbose_name_plural = "Teilnamehäufigkeiten"

class Duration(models.Model):
	duration = models.DecimalField("Dauer / Minuten", max_digits=5, decimal_places=2, blank=True, null=True)

	def __unicode__(self):
		return str(self.duration)

	class Meta:
		verbose_name = "Dauer"
		verbose_name_plural = "Dauer"


class Charge(models.Model):
	charge = models.DecimalField("Kosten / Stunde", max_digits=5, decimal_places=2, blank=True, null=True)

	def __unicode__(self):
		return u'%s' % (self.charge)

	class Meta:
		verbose_name = "Preis"
		verbose_name_plural = "Preise"


class Contract_Type(models.Model):
	name = models.CharField(max_length=200)
	charge = models.ForeignKey(Charge, default=1)
	duration = models.ForeignKey(Duration, default=1)
	frequency = models.ForeignKey(Frequency, default=1)
	months = models.IntegerField(max_length=2, blank=True, null=True)
	days_a_week = models.IntegerField(max_length=1, blank=True, null=True)

	def __unicode__(self):
		return self.name

	class Meta:
		verbose_name = "Vertrags Art"
		verbose_name_plural = "Vertrags Arten"


class Discount(models.Model):
	discount = models.CharField("Rabatt", max_length=200)
	name = models.CharField("Name", max_length=200)

	def __unicode__(self):
		return str(self.name) + " " + str(self.discount) + "%"

	class Meta:
		verbose_name = "Rabatt"
		verbose_name_plural = "Rabatte"


class Contract(models.Model):
	number = models.CharField("Vertragsnummer", max_length=200)
	type = models.ForeignKey(Contract_Type)
	start_date = models.DateField("Start Datum", default=datetime.date.today)
	end_date = models.DateField("End Datum", default=datetime.date.today)
	# charge = models.ForeignKey(Charge)
	contact = models.ForeignKey(User, related_name='contract_contact')
	billing_contact = models.ForeignKey(User, related_name='contract_billing_contact')
	# duration = models.ForeignKey(Duration)
	# frequency = models.ForeignKey(Frequency)
	discount = models.ManyToManyField(Discount, blank=True, null=True, related_name='contract_discounts')
	with_tax = models.BooleanField(default=False)
	
	def __unicode__(self):
		return self.number

	def get_frequency_per_week(self):
		return self.type.frequency.frequency / 4

	def calc_tax(self):
		tax = self.calc_summ() * 0.19
		tax = round(tax, 2)

		return tax

	def calc_price(self):
		x = None

		try:
			x = float(self.type.frequency.frequency) * float(self.type.charge.charge)
		except:
			traceback.print_exc(file=sys.stdout)

		return float(x)

	def get_discounts(self):
		discounts = []
		try:
			x = self.calc_price()

			if x != None:
				for discount in self.discount.all():	
					discount_data = {}
					d = x * (float(discount.discount) / 100)
					discount_data["amount"] = float(d)
					discount_data["name"] = discount.name
					discount_data["discount"] = discount.discount
					discounts.append(discount_data)
		except:
			traceback.print_exc(file=sys.stdout)	


		return discounts


	def calc_summ(self):
		summ = None

		try:
			summ = self.calc_price()
			
			discounts = self.get_discounts()

			for discount in discounts:
				summ = summ - discount["amount"]
		except:
			traceback.print_exc(file=sys.stdout)	

		summ = round(summ, 2)

		return summ

	def calc_summ_with_tax(self):
		summ = self.calc_summ()

		if self.with_tax:
			summ = summ + (summ * 0.19)

		summ = round(summ, 2)

		return summ

	def calc_summ_first_month(self):
		registration_fee = 39
		summ = self.calc_summ_with_tax()
		summ = summ + registration_fee
		
		return summ

	def calc_month_difference(self):
		d1 = self.start_date
		d2 = self.end_date 
		delta = 0

		while True:
			mdays = monthrange(d1.year, d1.month)[1]
			print ("mdays " + str(mdays))
			d1 += timedelta(days=mdays)
			if d1 <= d2:
				delta += 1
			else:
				break
		print ("delta " + str(delta))
		return delta

	class Meta:
		verbose_name = "Vertrag"
		verbose_name_plural = "Verträge"


class Bill(models.Model):
	number = models.CharField("Rechnungsnummer", max_length=200)
	person = models.ForeignKey(Person)
	contract = models.ForeignKey(Contract)
	date = models.DateField(null=True)
	paid = models.BooleanField(default=None)
	
	def __unicode__(self):
		return (str(self.number) + " " + str(self.person.name))
	
	class Meta:
		verbose_name = "Rechnung"
		verbose_name_plural = "Rechnungen"
