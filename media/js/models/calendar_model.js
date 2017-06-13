//	console.log("_-------__ ANGULAR -----_____");
//
//	var app = angular.module('myapp', []);



//var app = angular.module('tutorialWebApp', [
//                                            'ngRoute'
//                                          ]);
//app.config(['$routeProvider', function ($routeProvider) {
//	  $routeProvider
//	    // Home
//	    .when("/calendar", {controller: "PageCtrl"})
//	    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
//	}]);
//
///**
// * Controls all other Pages
// */
//app.controller('PageCtrl', function (/* $scope, $location, $http */) {
//  console.log("Page Controller reporting for duty.");
//});
////
//var event_app = angular.module('eventApp', [/* other dependencies */,'ngCookies', 'eventApp.services']);
//var eventServices = angular.module('eventApp.services', ['ngResource']);
//
//event_app.run(
//    function($http, $cookies) {
//        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
//        // Add the following two lines
//        $http.defaults.xsrfCookieName = 'csrftoken';
//        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
//    });
//

//eventServices.factory('Event', ['$resource', function($resource) {
//    return $resource('/handle/event/', {'pk': '@pk'}, {
//    });
//}]);
//
//event_app.controller('eventApp.controller', ['$scope', 'Event', function ($scope, Event) {
//	console.log("called the controller");
////	$scope.models = Event.query();
////
////    // Getting a single object
////    var model = Event.get({pk: 1});
////
////
////    // We can crete new objects
////    var new_model = new Event({name: 'New name'});
////    new_model.$save(function(){
////       $scope.models.push(new_model);
////    });
////    // In callback we push our new object to the models array
////
////    // Updating objects
////    new_model.name = 'Test name';
////    new_model.$save();
////
////    // Deleting objects
////    new_model.$remove();
////    // This deletes the object on server, but it still exists in the models array
////    // To delete it in frontend we have to remove it from the models array
//
//}]);
//console.log("event_app ", event_app);

var Calendar_Model = (function(_this, $) {
	var former_day = null;
	var curr_day = null;
	var active_day = null;
	var next_day = null;
	var prev_day = null;
	var prev_week_day = null;
	var next_week_day = null;
	var events = null;
	var cal_date = null;
	var action_go_to_pre_week = null;
	var action_go_to_next_week = null;
	var action_go_to_next_day = null;
	var action_go_to_prev_day = null;
	var action_go_to_today = null;
	var action_show_date = null;
	var action_sort_by_lead = null;
	var action_sort_by_room = null;
	var day_from_session = null;
	var SORT_BY = "lead";
	var found_a_event = false;
	var ROW_HEIGHT = 58;
	var users = null;


	/**
	 * 
	 * public FUNCTION init
	 * 
	 * initialize model
	 * 
	 */
	_this.init = function() {

		curr_day = new Date();
		curr_day.setHours(23);
		curr_day.setMinutes(0);
		curr_day.setSeconds(0);
		curr_day.setMilliseconds(0);
		day_from_session = $.cookie('last_calendar_day');

		// set active day
		if (typeof day_from_session == "undefined" || day_from_session == "Invalid Date") {
			active_day = curr_day;
		}
		else {
			
			day_from_session = new Date(day_from_session);
			active_day = day_from_session;
		}

		// setup dates and times
		next_day = new Date(active_day.getTime() + (24 * 60 * 60 * 1000));
		prev_day = new Date(active_day.getTime() - (24 * 60 * 60 * 1000));
		next_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));
		prev_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));

		// setup selectors
		events = $(".event");
		action_go_to_next_week = $("#next-week");
		action_go_to_pre_week = $("#prev-week");
		action_go_to_next_day = $("#next-day");
		action_go_to_pre_day = $("#prev-day");
		action_go_to_today = $("#cal-go-to-today");
		action_sort_by_lead = $("#cal-action-sort-by-lead");
		action_sort_by_room  = $("#cal-action-sort-by-room");

		cal_date = $("#cal-date");
		action_show_date = $("#cal-action-show-date");

		// activate click listener
		setup_listener();

		printCalendar();
		// show date
		_this.goToDay(active_day);

		var mainDatepicker = $( "#main-datepicker" );
		var visible = false;
		mainDatepicker.datepicker({
			onSelect: function(dateText, inst) { 
				_this.goToDay($(this).datepicker( "getDate" )); // as date object
				 
			}
		});
		mainDatepicker.datepicker( "option", "dateFormat", "yy-mm-dd");
		
		$("#cal-date").click(function(){
			console.log("CLICKED!" + visible);
			if (visible) {
				visible = false;
				mainDatepicker.datepicker("hide");
				mainDatepicker.hide();
			}
			else {
				visible = true;
				mainDatepicker.datepicker("show");
				mainDatepicker.show();
				mainDatepicker.datepicker('show');
				mainDatepicker.show().datepicker('show');
				mainDatepicker.datepicker("show");
			}
		});

		console.log("~~~ Calendar_Model initialized ~~~");
		
		reset();
	}


	/**
	 * 
	 * public FUNCTION loadData
	 * 
	 
	_this.loadData = function() {
		var days = 0;
		var doLoad = true;
		var theDay = new Date();
		var day_in_the_past = new Date();
		var day_in_the_future = new Date();
		var init = true;
		var days_to_load = 365; // 365

		var load = function() {
			day = getNexdaytDate();
			days = 1;
			$.ajax({
				type: "POST",
				url: "/data/",
				data: { "key": "events", "days": days, "day" : day, "csrfmiddlewaretoken": csrf_token}
			}).done(function( msg ) {
				console.log("ALL_EVENTS", ALL_EVENTS);
				if (ALL_EVENTS != null) {
					console.log("msg1", msg);
					console.log("msg2", msg);
					if ("" + msg != "{}" && $(msg).size() > 1) {
						msg = msg[0];
						console.log("msg3 ", msg);
						$.each(msg, function(msg_day) {
							if (msg_day != 0) {
								console.log("msg_day ", msg_day);
								ALL_EVENTS = [$.extend(true, ALL_EVENTS,msg_day)];
							}
						});
					}
				}
				else {
					console.log("init all events");
					ALL_EVENTS = {};
				}

				if (doLoad) {
					load();
				}
			});
		}

		function getNextDate() {
			var dateStr = "";
			if (init == false) {
				var sessionValue = null;

				if (i % 2){
					sessionValue = new Date($.cookie('day_in_the_future'));
					day_in_the_future = (typeof sessionValue != "undefined" && sessionValue != "Invalid Date") ? sessionValue : day_in_the_future;
					$.cookie('day_in_the_future', day_in_the_future.setDate(day_in_the_future.getDate() + 1));
					theDay = day_in_the_future;
				} else {
					sessionValue = new Date($.cookie('day_in_the_past'));
					day_in_the_past = (typeof sessionValue != "undefined" && sessionValue != "Invalid Date") ? sessionValue : day_in_the_past;
					$.cookie('day_in_the_past', day_in_the_past.setDate(day_in_the_past.getDate() - 1));
					theDay = day_in_the_past;
				}
			}
			init = false;

			/*var d = theDay.getDate();
			var m = theDay.getMonth();
			var y = theDay.getYear();

			try {
				dateStr = dateToString(theDay);
			} catch(err) {
				console.log("err", err);
			}

			return dateStr;
		}


		load();
	};
	*/

	var dateToString = function(date) {
		return date.toISOString().slice(0,10);
	}
	
	/**
	 * 
	 * public FUNCTION gotToDay
	 * 
	 * @param date object with the wanted day
	 * 
	 */
	_this.goToDay = function(date) {
		var wanted_day = null;
		var weekday = null;
		var found_a_event = false;
		var D = null;
		var strDate = null;
		Infobox.showMessage($(".status-info").data("initial"));

		//var string_date = null;
		//string_date = D + " " + (date.getDate()) + "." + (date.getMonth() + 1) + "." + date.getFullYear();

		strDate =  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getUTCDate();
		console.log("~~~~~~~~ GOING TO DATE " + strDate + "~~~~~~~~");
		// load date 

		$.ajax({
			type: "POST",
			url: "/data/",
			data: { "key": "events", "days": 1, "day" : strDate, "csrfmiddlewaretoken": csrf_token}
		}).done(function( msg ) {
			var json = null;
			console.log("msg ", msg);
			Infobox.hide();
			if (ALL_EVENTS == null) {
				ALL_EVENTS = {};
			}

			json = $.parseJSON(msg);

			console.log("json", json);

			if ("" + json != "{}" && $(json).size() > 0) {
				$.each(json, function(key, msg_day) {
					if (msg_day != 0) {
						ALL_EVENTS[key] = msg_day;
					}
				});
			}
			
			console.log("MADE POST REQUEST!");
			
			render(date);
			
		});

		active_day = date;
		console.log("parsing day");
		wanted_day = date;
		weekday = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag");
		found_a_event = false;
		D = weekday[date.getDay()];
		string_date = D + " " + (date.getDate()) + "." + (date.getMonth() + 1) + "." + date.getFullYear();

		cal_date.text(string_date);
		events = $(".event");

//		$.each(events, function(key, event) {
//			event = $(event);
//			var string_date = event.data("date");
//			var event_day = new Date(string_date);
//			if (event_day - wanted_day == 0) {
//				found_a_event = true;
//			}
//		});
	}



	function reset() {
		console.log("~~~ CALDENDAR MODEL RESETED ~~~");
		next_day = new Date(active_day.getTime() + (24 * 60 * 60 * 1000));
		prev_day = new Date(active_day.getTime() - (24 * 60 * 60 * 1000));
		next_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));
		prev_week_day = new Date(active_day.getTime() - ((24 * 60 * 60 * 1000) * 7));
		$.cookie('last_calendar_day', active_day);

		// show hide event details
		events = $(".event");
		events.mouseenter(function() {
			var event = $(this);
			var hidden_data = event.find(".hidden-data");
			if (hidden_data.hasClass("hidden")) {
				$(".hidden-data").addClass("hidden");
				hidden_data.removeClass("hidden");
			}
			else{

			}
		}).mouseleave(function() {
			$(".hidden-data").addClass("hidden");
		});


		$(".button.delete").click(function(e) {

		});
		$(".event").dblclick(function() {
			var event = $(this).find(".hidden-data");
			if (event.is(':visible')) {
				event.hide();
			}
			else {
				event.show();
			}
		});
		$(".event").draggable({
			containment : "#time-raster",
			cursor : "move",
			snap : "#time-raster td.row",
			stop: handleDragStop
		});
		function handleDragStop( event, ui ) {
		  var x = parseInt( ui.offset.left );
		  var y = parseInt( ui.offset.top );
		  console.log("x " + x + " Y " + y);
		  var rooms = 11;
		  var width = $(window).width() / rooms;
 		  var curr_x = x + (width/3);
		  var percent =  ((curr_x * 10) / $(window).width());
		  var newRoom = Math.round(percent);
		  newRoom = ((newRoom == 0) ? 1 : newRoom);
		  var newX = width * newRoom;
		  console.log("(parseInt(y)!==y) " + (parseInt(y)!==y));
		          var newY =  y ;// anzkästen_y * 58;
		 	  console.log("y " + y + " newY " + newY + "position " + ui.position.top + " percent " + percent);
		
		  $(event.target).css("left", newX);
		}
		/**
		 * TODO find better solution
		 */
		Calendar_View.setParticipating();
		AJAX.resetListener(null);
		/**
		 * END TODO find better solution
		 */
	}

	function setup_listener() {
		action_go_to_today.click(function() {
			_this.goToDay(curr_day);
		});
		action_go_to_next_week.click(function() {
			_this.goToDay(next_week_day);
		});
		action_go_to_pre_week.click(function() {
			_this.goToDay(prev_week_day);
		});
		action_go_to_next_day.click(function() {
			console.log("going to next day");
			_this.goToDay(next_day);
		});
		action_go_to_pre_day.click(function() {
			_this.goToDay(prev_day);
		});
		action_sort_by_lead.click(function() {
			SORT_BY = "lead";
			_this.goToDay(active_day);
		});
		action_sort_by_room.click(function() {
			SORT_BY = "room";
			_this.goToDay(active_day);
		});

		action_show_date.click(function() {
			var string_date = $("#cal-go-to-date").val();
			string_date = string_date.split(".");
			string_date = string_date[2] + "-" + string_date[1] + "-" + string_date[0];
			var wanted_date = new Date(string_date);
			_this.goToDay(wanted_date);
			active_day = wanted_date;
			reset();
		});
	}

	function render_events(events, nbr_of_keys){

		var now = new Date();
		var go_to_minuts = now.getMinutes();
		var go_to_hours = now.getHours();
		var page = $("#page");

		if (go_to_hours > 18) {
			go_to_hours = 18;
		}

		var go_to = calc_y(go_to_hours, go_to_minuts);
		//$('html,body').animate({scrollTop:go_to}, 2000,'swing');

		$("#time-raster").show();
		page.css("width", "100%");
		$("#cal-message").html("");

		if (nbr_of_keys > 12) {
			page.css("width", "140%");
		}

		var events = $(".event");	
		
		var event_list = [];

		$.each(events, function(key, event) {
			var extra = 0;
			var top = 0;
			var room = 1;
			var nbrOfRooms = 6;
			var height = 240;
			var pageWidth = 1400;
			var time = null;
			var start_time = null;
			var start_time_hours = null;
			var start_time_minutes = null;
			var end_time = null;
			var end_time_hours = null;
			var end_time_minutes = null;
			var value = null;
			var extra_height = null;
			var width_of_event = null;
			var left = null
			var currPageWidth = null;
			var ratio = null;

			event = $(event);
			time = event.find(".time").first();
			time = time.text().split(" bis ");
			room = event.data("room");
			start_time = time[0];
			start_time_hours = parseInt(start_time.split(":")[0]);
			start_time_minutes = parseInt(start_time.split(":")[1]);
			end_time = time[1];
			end_time_hours = parseInt(end_time.split(":")[0]);
			end_time_minutes = parseInt(end_time.split(":")[1]);
			value = start_time_hours+":"+start_time_minutes+"R"+room;
			extra_height = getExtaHeight(start_time_hours, start_time_minutes, end_time_hours, end_time_minutes);
			nbrOfRooms = $("#time-raster").find("tr").last().find("td").size();
			height = parseInt(extra_height);
			width_of_event = Math.round(nbrOfRooms > 0) ? 100 / nbrOfRooms : 140;
			top = 0;
			lead = event.data("lead");
			var x = (calc_x(room, width_of_event));
			var count = 1;
			if(SORT_BY=="lead"){
				$('.room').each(function(){
					if($(this).text().toUpperCase().indexOf(lead.toUpperCase()) != -1){
					      	x = (calc_x(count, width_of_event));
						console.log("HURRAA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! " + count + " " + lead + " " + room + " " + width_of_event + " " + x, event);
						 return false;
					}
					count++;
				});
			
			
				
			}
			console.log("X " + x + " " + width_of_event);
			left = x;
			pageWidth = 1400;
			currPageWidth = $(window).width();
			ratio = (100 - (currPageWidth * 100 / pageWidth)) / 2;

			if ($.inArray(value, event_list) > -1) {
				event.addClass("alert");
				extra = 40;
			}else{
				event_list[key] = value;
			}

			top = (calc_y(start_time_hours, start_time_minutes) + extra);
			top = top - 5;
			width_of_event = (nbrOfRooms > 0) ? width_of_event + "%" : width_of_event + "px";
			event.css({
				"position"	: "absolute",
				"width"		: width_of_event,
				"left"		: left + "%",
				"top"		: top + "px",
				"height"	: height + "px"
			});
		});
	};

	function render(date) {
		console.log("rendering...");
		var final_output = "";
		var template_events_by_teacher = '<ul class="events">';
		var events_by_day =  null;
		var sorted_events = {};
		var nbrOfEvents = 0;

		found_a_event = false;

		console.log("got the pool", ALL_EVENTS);

		if (ALL_EVENTS != null && ! $.isEmptyObject(ALL_EVENTS)) {
			events_by_day = ALL_EVENTS;
		}

		if (events_by_day != null) {
			//events_by_day = $.parseJSON(events_by_day);
			console.log("date ", date);
			event_by_date = events_by_day["2014-09-29"];
			$.each(events_by_day, function(key, event) {
				nbrOfEvents++;
				if ($(event).size() > 1) {
					$.each(event, function(_key, ev){
						print(ev);
					});
				}
				else{
					event = event[0];
					print(event);
				}
			});
		}


		function print(passed_event) {
			var _date = passed_event.date_as_utc;
			var lead = passed_event.lead;
			var data = "";
			var output = "";
			
			var month = (1 + active_day.getMonth());
			var date = active_day.getDate();
			
			if (month <= 9) {
				month = "0" + month;
			}
			
			if (date <= 9) {
				date = "0" + date;
			}

			//_date = new Date(passed_date);
			var passed_date = _date;
			var active_date = active_day.getFullYear() + "-" + month + "-" + date;
			var sort_by_date = false;
			var sort_by_lead = true;
			var sort_by_room = true;

			if (SORT_BY == "room") {
				sort_by_lead = false;
			}
			else if (SORT_BY == "lead") {
				sort_by_room = false;
			}

			if (passed_date == active_date) {
				found_a_event = true;
				//
				output = Mustache.render(Calendar_View.template_event, passed_event);

				if (typeof output != "undefined") {

					var key = "";

					// sort by date
					if (sort_by_date) {
						
						key = passed_date
					}
					// sort by lead
					else if (sort_by_lead) {
						key = lead;
						
					}
					// sort by room
					else {
						key = passed_event.room
					}

					if (!(key in sorted_events)) {
						output = output;//"<b>" + key + "</b> " + output
						sorted_events[key] = output;
					}else{
						data = sorted_events[key];
						sorted_events[key] = data + output;
					}
				}
			}
		}

		var nbr_of_keys = 0;

		$.each(sorted_events, function(key, data) {
			template_events_by_teacher += '<li class="sort"><ul>' + data + '</ul></li>';
			nbr_of_keys += 1
		});

		template_events_by_teacher += "</ul>";
		events_by_day = {"events" : events_by_day};

		console.log("==========> printing events!");

		$("#events").html(template_events_by_teacher);
		
		if (! found_a_event) {
			$("#cal-message").html("<br/><br/><h3>Es gibt bisher keine Stunden an diesem Tag!</h3>");
		}
		else if (SORT_BY == "lead") {
			render_events(events, nbr_of_keys);
		}
		else if (SORT_BY == "room") {	
			render_events(events, nbr_of_keys);
		}
		else {
			$("#time-raster").hide();
			$("#page").css("width", "140%");
			$('html,body').animate({scrollTop:0}, 2000,'swing');
		}
		reset();
	}

	function getExtaHeight(hoursA, minutesA, hoursB, minutesB) {
		 // 240px = 45min
		var minute_height = ROW_HEIGHT/15/60;
		var height = 0;
		console.log("hoursA " + hoursA + " minutesA " + minutesA + " hoursB " + hoursB + " minutesB " + minutesB);
		var delta = hoursA * 60 + minutesA - hoursB * 60 - minutesB;
		console.log("delta", delta);
		var x = 4;//3.4;
		delta = (delta > 0) ? delta : delta * -1;

		if (delta >= 15) {
			var alpha = (hoursB * 60 * x - minutesB * x) - (hoursA * 60 * x + minutesA * x);
			alpha = delta * minute_height;
			alpha = (alpha == 0) ? 1 : alpha;
			console.log("alpha", alpha);
			height = (ROW_HEIGHT * alpha);
			height = height + (height * 0.0338);
//			if (alpha == 0) {
//				height = (240/3);
//			}
//			else {
//				height = (alpha - 240);
//			}
			height = (height > 0) ? height : height * -1;
		}
		else {
			height = ROW_HEIGHT;
		}
	
		return height;// changed 20170510 height;
	}

	function calc_y(hours, minutes) {
		var minute_height = ROW_HEIGHT/15;
		var yPX = 0;
		var minutesPX = 0;
		var elem_height = 140 + 10 + 10;
		var start_hour = 8;
		var time_in_minutes = ((hours * 60 + minutes) - start_hour * 60);
		var x = (time_in_minutes * (15/time_in_minutes));
		var border_widht = 4;

		if (hours < start_hour) {
			hours = hours + 12;
		}
		
		console.log("---- minute_height ---- ", minute_height);
		console.log("---- (hours * 60 + minutes) ---",(hours * 60 + minutes));

		yPX = (time_in_minutes * minute_height) + x + border_widht;

		/*hours = hours - 10;
		hours = (hours == 0) ? 1 : hours;

		
		if (minutes > 0) {
			var factor = (minutes / 25);
			var x = elem_height / 4;
			minutesPX = factor * x;
		}
		
		yPX = (hours) * elem_height + minutesPX;*/

		return yPX;
	}

	function calc_x(room, elem_width) {
//		var xPX = 0;
//		var elem_width = 140 + 10 + 10;
//		xPX = room * elem_width;
//
//		return xPX;
		var x = 0;
		x = room * elem_width;
		
		return x;
	}

	var sort_by = function(field, reverse, primer){

	   var key = primer ? 
	       function(x) {return primer(x[field])} : 
	       function(x) {return x[field]};

	   reverse = [-1, 1][+!!reverse];

	   return function (a, b) {
	       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
	     } 

	}

	// Print Calendar
	var printCalendar = function(users) {
		var target = $("#time-raster");
		var minute = 0;
		var hour = 8;
		var interval = 15;
		var htmlOutput = "";
		
		var header = "<table><tr class=\"rooms\">" +
						"<th>Zeit / Räume</th>" +
						"<th class=\"room\">Raum 1</th>" +
						"<th class=\"room\">Raum 2</th>" +
						"<th class=\"room\">Raum 3</th>" +
						"<th class=\"room\">Raum 4</th>" +
						"<th class=\"room\">Raum 5</th>" +
						"<th class=\"room\">Raum 6</th>" +
						"<th class=\"room\">Raum 7</th>" +
						"<th class=\"room\">Raum 8</th>" +
						"<th class=\"room\">Raum 9</th>" +
						"<th class=\"room\">Büro</th>" +
					"</tr>";
		if (SORT_BY == "lead") {
			header = "<table><tr class=\"rooms\"><th>Zeit / Personen</th>";
			if(users != null) {
				$.each(users, function(key, user) {
					header += "<th class=\"room\">" + user + "</th>";
				});
			}
		}
		header += "</tr>";
		htmlOutput = header;

		for (var i = 0; i < 60; i++) {
			var newMinute = minute + interval;
			var nextMinute = null;
			var nextHour = null;
			var formerMinute = minute;
			var formerHour = hour;

			if (newMinute > (interval * 3)) {
				minute = 0;
			}
			else {
				minute = minute + interval;
			}

			if (minute == 0) {
				hour = hour + 1;
			}
			else {
				hour = hour;
			}

			if (hour < 10) {
				nextHour = "0" + hour;
			}
			else {
				nextHour = hour;
			}

			if (minute < 10) {
				nextMinute = "0" + minute;
			}
			else {
				nextMinute = minute;
			}

			if (formerHour < 10) {
				formerHour = "0" + formerHour;
			}

			if (formerMinute < 10) {
				formerMinute = "0" + formerMinute;
			}

			var html =
				"<tr>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'>" + formerHour + ":" + formerMinute + "</td>" //"-" + nextHour + ":" + nextMinute + "
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+	"<td class='row' data-event='load(forms/form-new-event.html)'></td>"
				+ "</tr>";

			htmlOutput = htmlOutput + html;


		}
		htmlOutput = htmlOutput + "</table>";
		target.append(htmlOutput);
	}

	return _this;

}({}, jQuery));
