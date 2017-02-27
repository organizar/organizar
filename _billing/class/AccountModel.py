# coding=UTF-8

from _billing.models import Account, Accounting

class AccountModel:
	pk = None
	number = None
	name = None
	balance = 0
	type = None

	def calc_balance(self, date_from, date_to):
		activa = None
		passiva = None

		#
		# get all accountings
		#
		all_accountings = Accounting.objects.all(debitor=self.pk, creditor=self.pk);
		
		for accounting in all_accountings:
			#
			# if it is a debitor you`ll get money
			#
			if accounting.debitor == self.pk:
				self.balance += accounting.ammount
			
			#
			# if it is a creditor you`ll have to pay
			#
			if accounting.creditor == self.pk:
				self.balance -= accounting.ammount

		return self.balance

