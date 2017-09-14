var DRAG = "drag";
var DROP = "drop";
var HREF = "" + window.location;

$(document).ready(function() {
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~ WELCOME TO THE ORGANIZAR ~~~");
	console.log("~~~ debugging: on ~~~");
	console.log("~~~ surfin on: " + HREF + " ~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	// MENU
	Menu_Model.init();

	// TODOS
	Todo_Model.init();
	
	// SEARCH
	Search_Model.init();

	// AJAX
	AJAX.resetListener();

	// SEARCH
	$(".search").autocomplete();
	// CALENDAR
	if (typeof HREF != "undefined") {
		var page = "";
		try {
			page = HREF.split("/")[3];
		}
		catch(e) {
			console.log("ERROR: " + e);
		}

		if (page == "calendar") {
			Calendar_View.init();
		}
	}
	
	// site loader (status bar)
	paceOptions = {
		document: false, // Checks for the existance of specific elements on the page
		eventLag: false, // Checks the document readyState
		startOnPageLoad: true,
		restartOnRequestAfter: 500,
		//ajax: {
		//	 trackMethods: ['GET', "POST"]
		//},
		elements: {
			selectors: ['.status-info-wrapper']
		},
	};
});

$(window).load(function() {
	// CALENDAR
	init_load_custom();
	Calendar_Model.init();
});

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
};
/**
 * Adds time to a date. Modelled after MySQL DATE_ADD function.
 * Example: dateAdd(new Date(), 'minute', 30)  //returns 30 minutes from now.
 * https://stackoverflow.com/a/1214753/18511
 * 
 * @param date  Date to start with
 * @param interval  One of: year, quarter, month, week, day, hour, minute, second
 * @param units  Number of units of the given interval to add.
 */
function dateAdd(date, interval, units) {
	console.log("date " + date);
	var ret = new Date(date); //don't change original date
	var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
		switch(interval.toLowerCase()) {
			case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
			case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
			case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
			case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
			case 'day'    :  ret.setDate(ret.getDate() + units);  break;
			case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
			case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
			case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
			default       :  ret = undefined;  break;
		}
	console.log("date " + ret);

	return ret;
}


function init_load_custom() {

			var d1 = new Date();
			var d = d1.getDate();
			var m = d1.getMonth() + 1;
			var y = d1.getFullYear();
			d1 = dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999", {reverse: true});
		 	$("#id_date").mask("99.99.9999", {reverse: true});
		 	$("#id_start_date").mask("99.99.9999", {reverse: true});
		 	$("#id_end_date").mask("99.99.9999", {reverse: true});
		 	//$("#id_start_time").mask("99:99");
		 	//$("#id_end_time").mask("99:99");

			function dateToYMD(date) {
				var d = date.getDate();
				var m = date.getMonth() + 1;
				var y = date.getFullYear();
				return '' + (d <= 9 ? '0' + d : d) + '.' + (m<=9 ? '0' + m : m) + '.' + y;
			}

			var user_id_field = $("#id_user");
			var user_id = document.URL.split("/")[5]
			
			if (user_id_field.length > 0) {
				user_id_field.attr("value", user_id);
			}
		
			var help_buttons = $(".button.help");

			help_buttons.click(function() {
				var help_button = $(this);
				var text = help_buttons.parent().find(".text");

				if (text.height() > 0) {
					text.css("height", "0px");
					help_button.text("Hilfe");
				}
				else {
					var clone = text.clone().css("height", "auto");
					var height = clone.appendTo("body").height();
					clone.remove();
					text.css("height", height + "px");
					help_button.text("Hilfe ausblenden");
				}
			});

			
//			$(".delete").click(function() {
//				var doDelete = confirm('Möchten Sie wirklich die Stunde(n) löschen?');
//
//				if (! doDelete) {
//					return false;
//				}
//				else {
//					Infobox.showMessage("Gelöscht!");
//					if ($(this).hasClass("event-group")) {
//						$(this).parent().remove();
//						console.log("deleteing", $(this).parent());
//					}
//				}
//			});

//				if (menu_status == "small" || typeof menu_status == "undefined") {
//					nav.css({
//						"height" : small_height + "px",
//						"overflow" : "hidden",
//					});
//				}
//				else {
//					nav.css({
//						"height" : big_height + "px",
//						"overflow" : "visible",
//					});
//				}

//				$("#small-nav").click(function() {
//					handle_nav(this);
//				});

//				function handle_nav(_nav) {
//					var small_nav = $(_nav);

//					// maximize
//					if (nav.height() == small_height) {
//						$.cookie('menu-status','big');
//						nav.css({
//							"height" : big_height + "px",
//							"overflow" : "visible",
//						});
//						small_nav.find("img").attr("src", "/media/img/minimize.svg");
//					}
//					// minimize 
//					else {
//						$.cookie('menu-status','small');
//						console.log("status small");
//						nav.css({
//							"height" : small_height + "px",
//							"overflow" : "hidden",
//						});
//						small_nav.find("img").attr("src", "/media/img/maximize.png");
//					}
//				}

			$("#cal-search-person").click(function() {
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev) {
				var input = $(this);
				var value = input.val();
				var all_persons = $("#all_persons").find(".person");
				var target = $("#users-list");

				target.html("");

				$.each(all_persons, function() {
					var person = $(this);
					var text = person.text();
					var smallText = text.toLowerCase(); 

					if (text.indexOf(value) > -1 || smallText.indexOf(value) > -1) {
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALS ARE INITIALIZED");
}

