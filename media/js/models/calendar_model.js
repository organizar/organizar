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


var app = null;
$(document).ready(function() {

	Vue.component('event-item', {
		props: ['event'],
	});

	app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue.js!',
			events: [],
			users: [],
		},
		methods: {
			set_events: function(events) {
				this.events = $.parseJSON(events)["2017-05-05"];
				console.log("reset events ", this.events);
				Vue.nextTick(() =>{
					Calendar_Model.render_events();
					Calendar_Model.reset(this.events);
					$("#loading").hide();
				});
			},
			reverseMessage: function() {
				this.message = this.message.split('').reverse().join('');
			},
			synchronze_event: function(event, vue_event) {
				Vue.nextTick(() =>{
					event = $(event);
					if (vue_event != null) 
						console.log("vue is saving r00m " + event.data("end_time") + " vs " + vue_event["end_time"], event.data("id"));
				});
			},
			save : function() {
				console.log("VUE events : " + this.events);
			}
		},
		mounted: function () {
				Calendar_Model.set_callback(this.set_events);
				Calendar_Model.print(new Date("2017-5-5"));
				Calendar_Model.load_users();
			},
		delimiters: ['[[',']]'],
		watch: {
			events: function () {
				Vue.nextTick(() =>{
					console.log("Events CHANGED!", this.events);
				});
			},
			message : function() {
				Vue.nextTick(() =>{
					console.log("Message CHANGED!", this.message);
				});
			}
		}
	});

});

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
	var ROW_HEIGHT = 58; // TODO make own calendar/timeraster object
	var users = null;
	var callback = null;
	var alert_event_list = [];
	var WIDTH_OF_ROW = null; // TODO make own calendar/timeraster object
	var NBR_OF_COLS = 11; // TODO make own calendar/timeraster object

	_this.set_callback = function(method) {
		callback = method;
	}

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

		$("#time-raster").show();

		// setup dates and times
		next_day = new Date(active_day.getTime() + (24 * 60 * 60 * 1000));
		prev_day = new Date(active_day.getTime() - (24 * 60 * 60 * 1000));
		next_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));
		prev_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));
		cal_date = $("#cal-date");
		action_show_date = $("#cal-action-show-date");

		// activate click listener
		setup_listener();

		printCalendar();
		// show date

		var mainDatepicker = $( "#main-datepicker" );
		var visible = false;
		mainDatepicker.datepicker({
			onSelect: function(dateText, inst) { 
				render($(this).datepicker( "getDate" )); // as date object
				 
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

		var dbTimestamp = null;
		$(".event").dblclick(function(event) {
			console.log(events,event);
			console.log("clicked! " + dbTimestamp + " vs " + event.timeStamp + " nbrOfEvents " + events.length, $(this).find(".hidden-data"));
			var hidden_data = $(this).find(".hidden-data");
			console.log("hidden_data " + hidden_data.is(':visible'), hidden_data);
			if (dbTimestamp != event.timeStamp) {
				if (hidden_data.is(':visible')) {
					hidden_data.hide();
				}
				else {
					hidden_data.removeClass("hidden");
					hidden_data.show();	
				}
			}
			dbTimestamp = event.timeStamp;
		});
		NBR_OF_COLS = $("#time-raster").find("tr").last().find("td").size();
		
		console.log("Calendar_Model initialized");
	};

	_this.print = function(date) {
		console.log("=========== Making Post Request ============");
		Infobox.showMessage($(".status-info").data("initial"));
		if(date == null || date == "") {
			date = new Date("2017-5-5"); // TODO make it better
		}
		active_day = date;
		var string_date =  date.getFullYear() + "-" +  (date.getMonth() + 1) + "-" + (date.getDate()) ;
		var data = { "key": "events", "days": 1, "day" : string_date };
		$("#loading .text").html("Loaded UI!<br/>Loading Data...");
		AJAX.post("/data/", data, callback);
	};


	var dateToString = function(date) {
		return date.toISOString().slice(0,10);
	}

	_this.reset = function(vue_events) {
		reset(vue_events);
	};

	function reset(vue_events) {
		next_day = new Date(active_day.getTime() + (24 * 60 * 60 * 1000));
		prev_day = new Date(active_day.getTime() - (24 * 60 * 60 * 1000));
		next_week_day = new Date(active_day.getTime() + ((24 * 60 * 60 * 1000) * 7));
		prev_week_day = new Date(active_day.getTime() - ((24 * 60 * 60 * 1000) * 7));
		$.cookie('last_calendar_day', active_day);
		// show hide event details
		events = $(".event");
		/**
		 * TODO find better solution
		 */
		Calendar_View.setParticipating();
		AJAX.resetListener(null);
		/**
		 * END TODO find better solution
		 */
		setup_listener(vue_events);
		render(active_day);
		$(".datepicker").datepicker( "option", "dateFormat", "HH:MM:SS");
		console.log("~~~ CALDENDAR MODEL RESETED ~~~");
	}

	function setup_listener(vue_events) {
		events = $(".event");
		console.log("events! " + events.length);
		// setup selectors
		action_go_to_next_week = $("#next-week");
		action_go_to_pre_week = $("#prev-week");
		action_go_to_next_day = $("#next-day");
		action_go_to_pre_day = $("#prev-day");
		action_go_to_today = $("#cal-go-to-today");
		action_sort_by_lead = $("#cal-action-sort-by-lead");
		action_sort_by_room  = $("#cal-action-sort-by-room");

		//action_go_to_today.click(function() {
		//	_this.print(curr_day);
		//});
		action_go_to_next_week.click(function() {
			_this.print(next_week_day);
		});
		action_go_to_pre_week.click(function() {
			_this.print(prev_week_day);
		});
		action_go_to_next_day.click(function() {
			_this.print(next_day);
		});
		action_go_to_pre_day.click(function() {
			_this.print(prev_day);
		});
		action_sort_by_lead.click(function() {
			SORT_BY = "lead";
			_this.print(active_day);
		});
		action_sort_by_room.click(function() {
			SORT_BY = "room";
			_this.print(active_day);
		});


		function my_callback() {
			console.log("it really worked!");	
			var new_event = $(".event .hidden-data:visible");
			console.log("new_event " + new_event.parent().data("end_time"), new_event.parent());
			
		};
		$(".event .button.save").click(function() {
			console.log($(this));
			var uri = $(this).data("uri");
			console.log("Uri: " + uri);
			var jEvent = this.parentElement.parentElement.parentElement.parentElement;
			var end_time = jEvent.getAttribute('data-end_time');
			console.log("end_time " + end_time);
			var event = $(this).parent().parent().parent().parent();
			 event.data("end_time", end_time);
			console.log("event " + event.data("end_time"), event);
			var data = parseEventData(jEvent);
			console.log("data = ", data);
			var new_event = $(".event .hidden-data:visible");
			console.log("new_event " + new_event.parent().data("end_time"), new_event);
			app.save();
			AJAX.post(uri, JSON.stringify(data), my_callback);
		});

		/*action_show_date.click(function() {
			var string_date = $("#cal-go-to-date").val();
			string_date = string_date.split(".");
			string_date = string_date[2] + "-" + string_date[1] + "-" + string_date[0];
			var wanted_date = new Date(string_date);
			active_day = wanted_date;
			reset();
		});*/

		$(".button.delete").click(function(e) {

		});


		function handleDragStop( drpEvent, event ) {
			console.log("vue events ", vue_events);
			
			//05.05.2017
			//'2006-10-25 14:30'
			var event_obj = $(drpEvent.target);
			var x = parseInt( event.offset.left );
			var y = parseInt( event.offset.top );
			var event_height = 58;
			var nbrOfQA = Math.round(y / event_height);
			var vue_event = null;
			var event_id = event_obj.data("id");
			if (vue_events != null) {
				$.each(vue_events, function() {
					if(this["id"] == event_id) {
						vue_event = this;
						return false;
					}
				});
			}

			setXAndY(event_obj, vue_event);
			setNewStartAndEndTime(event_obj,vue_event);
			app.synchronze_event(event_obj, vue_event);
			var data = parseEventData(drpEvent.target);
			AJAX.post("/api/event/" + event_obj.data("id") + "/", JSON.stringify(data), null);

			function setXAndY(event, vueEvent) {
				var cols = 10;
				var nbr_of_rooms = 11;
				var user_screen_width = $(window).width();
				var timeRasterHeight = $("#time-raster").height();
				var event_width = user_screen_width / nbr_of_rooms;
				x = x + (event_width/3);
				var percent =  ((x * cols) / user_screen_width);
				var newRoom = Math.round(percent);
				newRoom = ((newRoom == 0) ? 1 : newRoom);
				var newX = event_width * newRoom;
				var shouldY = (nbrOfQA*event_height) - 2;
				if (vueEvent != null) {
				vueEvent.room = newRoom;
				}
				event.data("room", newRoom);
				event.css("left", newX );	
				event.css("top", shouldY);
			};
		
			function setNewStartAndEndTime(event,vueEvent) {
				var new_start_time = "" + ((((nbrOfQA * 15) + (4*8*15)) / 60) - 0.25);
				new_start_time = parse_hour(new_start_time);
				
				var duration = ((getHourOrMinutes(event.data("end_time"),true) - getHourOrMinutes(event.data("start_time"), true)) * 60) + (getHourOrMinutes(event.data("end_time"),false) - getHourOrMinutes(event.data("start_time"), false));
				duration = (duration < 0) ? duration * -1 : duration;
				var partsDate = event.data("date").split(".");
				var string_date = partsDate[2] + "-" + partsDate[1] + "-" + partsDate[0] + "T" + new_start_time[0] + ":" + new_start_time[1] + ":00";
				var date_new_end_time = Date.parse(string_date);
				var new_end_time = dateAdd(date_new_end_time, 'minute', duration);
				console.log("new_start_time " + new_start_time + " new_end_time " + new_end_time + " duration " + duration + " " + (duration % 60) + " end "); 
				new_end_time = new_end_time.toLocaleTimeString();
				new_end_time = new_end_time.substring(0, 5);
				var start_hour = new_start_time[0];
				new_start_time = start_hour + ":" + new_start_time[1];
				if (vueEvent != null) {
				vueEvent.start_time = new_start_time;
				vueEvent.end_time = new_end_time;
				}
				event.data("start_time", new_start_time);
				event.data("end_time", new_end_time);

				console.log("new_start_time " + new_start_time + " new_end_time " + new_end_time + " duration " + duration + " " + (duration % 60) + " end "); 
			};
			console.log("dropped!");
		}

		

		/**
		 *
		 * parses a javascript object representation of .event 
 		 *
		 * @param event
		 *
		 */
		function parseEventData(event) {
			var event_id = event.getAttribute("data-id");
			var event_date = event.getAttribute("data-date");
			var event_start_time = event.getAttribute("data-start_time");
			var event_end_time = event.getAttribute("data-end_time");
			var event_room = event.getAttribute("data-room");
			var event_users = event.getAttribute("data-users");
			var event_lead = event.getAttribute("data-lead");
			var event_category = event.getAttribute("data-category");
			var event_event_group = event.getAttribute("data-event_group");
			event_date = event_date.split(".");
			event_date = event_date[2] + "-" + event_date[1] + "-" + event_date[0];
			var data = { 
				"id" : parseInt(event_id),
				"name" : "Lauber Mathe ",
				"date" : event_date + " " + event_start_time,
				"start_time" : event_date + " " + event_start_time,
				"end_time" : event_date + " "  + event_end_time, // TODO calculate correct new_end_time
				"room" : event_room,
				"users" : [1],
				"lead" : parseInt(event_lead),
				"category" : parseInt(event_category),
				"event_group": null
			};

			return data;
		};


		$(".event").draggable({
			containment : "#time-raster",
			cursor : "move",
			snap : "#time-raster td.row",
			stop: handleDragStop
		});

		events.mouseenter(function() {
			var event = $(this);
			var hidden_data = event.find(".hidden-data");
			if (hidden_data.hasClass("hidden")) {
				$(".hidden-data").addClass("hidden");
				hidden_data.removeClass("hidden");
			}
		}).mouseleave(function() {
			$(".hidden-data").addClass("hidden");
		});

		console.log("RESETED LISTENDER!",$(".event"));
	}



	var parse_hour = function(timeHour) {
			timeHour = timeHour.split(".");
			var hours = timeHour[0];
			hours = ((hours<9) ? "0" + hours : hours);
			var minutes = timeHour[1];
			if (minutes != null && minutes > 4) {
				minutes = (minutes * 0.6);
				minutes = ((minutes<9) ?  minutes + "0" : minutes);
			}
			else {
				minutes = "00";
			}
			
			hours = ((hours<9) ? "0" + hours : hours);

			console.log("parsing " + timeHour + " to " + hours + ":" + minutes);

			return [hours, minutes];
	};

	_this.load_users = function() {
		var loaded = function(data) {
			console.log("loaded", data);
		};
		AJAX.get("http://localhost:8000/api/users/", null, loaded, null);
	};

	/**
	 * sets the x, y, widht and height of a elment
         *
	**/
	_this.render_events = function() {
		$("#cal-message").html("");

		WIDTH_OF_ROW = Math.round(NBR_OF_COLS > 0) ? 100 / NBR_OF_COLS : 140;

		// TODO better solution
		if (NBR_OF_COLS > 12) {
			page.css("width", "140%");
		}

		events = $(".event");	

		$.each(events, function(key, event) {
			event = $(event);
			var height = getHeight(event);
			var x = calc_x(event);
			var y = calc_y(event);
			checkForAlert(event);

			event.css({
				"position"	: "absolute",
				"width"		: WIDTH_OF_ROW + "%",
				"left"		: x + "%",
				"top"		: y + "px",
				"height"	: height + "px"
			});
		});
	};

	var checkForAlert = function(event) {
		var room = event.data("room");
		var start_time = event.data("start_time");
		var end_time = event.data("end_time");
		var value = start_time + end_time + "R" + room;
		

		if ($.inArray(value, alert_event_list) > -1) {
			event.addClass("alert");
			event.css("height",(event.height() + 40));
		}else{
			alert_event_list[value] = value;
		}
	}

	function render(date) {
		console.log("rendering...", date);
		var final_output = "";
		var template_events_by_teacher = '<ul class="events">';
		var events_by_day =  null;
		var sorted_events = {};
		var nbrOfEvents = 0;

		found_a_event = false;

		if (ALL_EVENTS != null && ! $.isEmptyObject(ALL_EVENTS)) {
			events_by_day = ALL_EVENTS;
		}

		if (events_by_day != null) {
			//events_by_day = $.parseJSON(events_by_day);
			//event_by_date = events_by_day["2014-09-29"];
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
			if (typeof(passed_event) === "undefined") {
				return;
			}
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

		//$("#events").html(template_events_by_teacher);
		
		if (! found_a_event) {
			$("#cal-message").html("<br/><br/><h3>Es gibt bisher keine Stunden an diesem Tag!</h3>");
			return;
		}
		else if (SORT_BY == "lead") {
			_this.render_events();
		}
		else if (SORT_BY == "room") {	
			_this.render_events();
		}
		else {
			$("#time-raster").hide();
			$("#page").css("width", "140%");
			$('html,body').animate({scrollTop:0}, 2000,'swing');
		}
	}

	var getHourOrMinutes = function(stringDate, hours) {
		var parts = stringDate.split(":");
		return ((hours) ? parseInt(parts[0]) : parseInt(parts[1]));
	}

	var getHeight = function(event) {
		var start_time = event.data("start_time");
		var end_time = event.data("end_time");
		var start_time_hours = getHourOrMinutes(start_time, true);
		var start_time_minutes = getHourOrMinutes(start_time, false);
		var end_time_hours = getHourOrMinutes(end_time, true);
		var end_time_minutes = getHourOrMinutes(end_time, false);
		var durationMin = (end_time_hours * 60 + end_time_minutes) - (start_time_hours * 60 + start_time_minutes);
		durationMin = (durationMin < 0) ? durationMin * -1 : durationMin;
		var height = Math.floor(durationMin / 15) * ROW_HEIGHT;	

		if (height < ROW_HEIGHT) {
			height = ROW_HEIGHT;
		}

		return height;
	}

	function calc_y(event) {
		var start_time = event.data("start_time");
		var hours = getHourOrMinutes(start_time, true);
		var minutes =  getHourOrMinutes(start_time, false);
		var minute_height = ROW_HEIGHT/15;
		var yPX = 0;
		var minutesPX = 0;
		var start_hour = 8;
		var time_in_minutes = ((hours * 60 + minutes) - start_hour * 60);
		var border_widht = 4;

		if (hours < start_hour) {
			hours = hours + 12;
		}

		yPX = (time_in_minutes * minute_height) + ROW_HEIGHT + border_widht;

		return yPX;
	}

	function calc_x(event) {
		var room = event.data("room");
		console.log("room " + room + " * width " + WIDTH_OF_ROW);
		return room * WIDTH_OF_ROW;
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
