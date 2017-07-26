varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person");
				vartarget=$("#users-list");

				target.html("");

				$.each(all_persons,function(){
					varperson=$(this);
					vartext=person.text();
					varsmallText=text.toLowerCase();

					if(text.indexOf(value)>-1||smallText.indexOf(value)>-1){
						person.parent().clone().appendTo(target);
					}
				});
			});
			console.log("GLOBALSAREINITIALIZED");
}

varDRAG="drag";
varDROP="drop";
varHREF=""+window.location;

$(document).ready(function(){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log("~~~WELCOMETOTHEORGANIZAR~~~");
	console.log("~~~debugging:on~~~");
	console.log("~~~surfinon:"+HREF+"~~~");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	MENU
	Menu_Model.init();

	TODOS
	Todo_Model.init();
	
	SEARCH
	Search_Model.init();

	AJAX
	AJAX.resetListener();

	SEARCH
	$(".search").autocomplete();
	
	CALENDAR
	if(typeofHREF!="undefined"){
		varpage="";
		try{
			page=HREF.split("/")[3];
		}
		catch(e){
			console.log("ERROR:"+e);
		}

		if(page=="calendar"){
			Calendar_View.init();
		}
	}
	
	siteloader(statusbar)
	paceOptions={
		document:false,Checksfortheexistanceofspecificelementsonthepage
		eventLag:false,ChecksthedocumentreadyState
		startOnPageLoad:true,
		restartOnRequestAfter:500,
		ajax:{
			trackMethods:['GET',"POST"]
		},
		elements:{
			selectors:['.status-info-wrapper']
		},
	};
});

$(window).load(function(){
	CALENDAR
	init_load_custom();
	Calendar_Model.init();
});
	
functioninit_load_custom(){

			vard1=newDate();
			vard=d1.getDate();
			varm=d1.getMonth()+1;
			vary=d1.getFullYear();
			d1=dateToYMD(d1);
			$("#cal-go-to-date").mask("99.99.9999",{reverse:true});
			$("#id_date").mask("99.99.9999",{reverse:true});
			$("#id_start_date").mask("99.99.9999",{reverse:true});
			$("#id_end_date").mask("99.99.9999",{reverse:true});
			$("#id_start_time").mask("99:99");
			$("#id_end_time").mask("99:99");

			functiondateToYMD(date){
				vard=date.getDate();
				varm=date.getMonth()+1;
				vary=date.getFullYear();
				return''+(d<=9?'0'+d:d)+'.'+(m<=9?'0'+m:m)+'.'+y;
			}

			varuser_id_field=$("#id_user");
			varuser_id=document.URL.split("/")[5]
			
			if(user_id_field.length>0){
				user_id_field.attr("value",user_id);
			}
		
			varhelp_buttons=$(".button.help");

			help_buttons.click(function(){
				varhelp_button=$(this);
				vartext=help_buttons.parent().find(".text");

				if(text.height()>0){
					text.css("height","0px");
					help_button.text("Hilfe");
				}
				else{
					varclone=text.clone().css("height","auto");
					varheight=clone.appendTo("body").height();
					clone.remove();
					text.css("height",height+"px");
					help_button.text("Hilfeausblenden");
				}
			});

			
			$(".delete").click(function(){
				vardoDelete=confirm('MöchtenSiewirklichdieStunde(n)löschen?');

				if(!doDelete){
					returnfalse;
				}
				else{
					Infobox.showMessage("Gelöscht!");
					if($(this).hasClass("event-group")){
						$(this).parent().remove();
						console.log("deleteing",$(this).parent());
					}
				}
			});

				if(menu_status=="small"||typeofmenu_status=="undefined"){
					nav.css({
						"height":small_height+"px",
						"overflow":"hidden",
					});
				}
				else{
					nav.css({
						"height":big_height+"px",
						"overflow":"visible",
					});
				}

				$("#small-nav").click(function(){
					handle_nav(this);
				});

				functionhandle_nav(_nav){
					varsmall_nav=$(_nav);

					maximize
					if(nav.height()==small_height){
						$.cookie('menu-status','big');
						nav.css({
							"height":big_height+"px",
							"overflow":"visible",
						});
						small_nav.find("img").attr("src","/media/img/minimize.svg");
					}
					minimize
					else{
						$.cookie('menu-status','small');
						console.log("statussmall");
						nav.css({
							"height":small_height+"px",
							"overflow":"hidden",
						});
						small_nav.find("img").attr("src","/media/img/maximize.png");
					}
				}

			$("#cal-search-person").click(function(){
				$("#users-list").html("");
			});
			$("#cal-search-person").keyup(function(ev){
				varinput=$(this);
				varvalue=input.val();
				varall_persons=$("#all_persons").find(".person"(function($){
	varsettings={};
	varfirstRightContentRow=null;
	varwidthRightContentRow=-1;
	varheightRightContentRow=-1;
	varmoveDistance=0;
	varformerMoveDistance=0;
	varSEVERAL_VISIBLE_SLIDES="several";
	varSINGLE_VISIBLE_SLIDE="single";
	varLEFT="LEFT";
	varRIGHT="RIGHT";
	

	varmethods={
		/**
		*INITIALIZETHESLIDESHOW
		*/
		init:function(options){
			settings=$.extend({
				'pagination':false,
				'animationSpeed':'300'
			},options);

			returnthis.each(function(){
				varsliderWrapper=$(this);
				varparent=sliderWrapper.find(".data");
				varslides=sliderWrapper.find(".step");
				console.log(parent);
				console.log(sliderWrapper);
				
				console.log("init2");
				
				vartray=sliderWrapper.find(".tray");
				varvisibleArea=sliderWrapper.find(".visible-slideshow-area");
				getAndSetRightContentRowDimensions();
				console.log("init3");
				console.log(tray);
				setCorrectWidthsAndHeights(sliderWrapper,visibleArea,tray);

				visibleArea.css({
					"position":"relative",
					"width":+sliderWrapper.width()+"px",
					"height":sliderWrapper.height()+"px"
				});

				tray.css({
					"position":"absolute",
					"top":0,
					"left":0,
					"width":+sliderWrapper.width()+"px",
					"height":sliderWrapper.height()+"px",
				});
				
				slides.css({
					"position":"relative",
					"width":+sliderWrapper.width()+"px",
					"height":sliderWrapper.height()+"px",
					"float":"left"
				});
				
				
				/*
				*ACTUALLSLIDER
				*/
				varclickCounter=0;
				varslideLeft=sliderWrapper.find(".slide-left");console.log(slideLeft);
				varslideRight=sliderWrapper.find(".slide-right");
				varnumberOfSlides=parseInt(sliderWrapper.find(".step").length);
				varnumberOfHiddenSlides=0;

				slideLeft.click(function(){
					console.log("clicked");
					numberOfHiddenSlides=calculateNumberOfHiddenSlides(sliderWrapper,numberOfSlides,visibleArea,clickCounter);
					setCorrectWidthsAndHeights(sliderWrapper,visibleArea,tray);
					console.log("clickCounter"+clickCounter);
					if(!tray.is(":animated")&&(clickCounter<numberOfHiddenSlides)){
						console.log("clicked3");
						clickCounter++;
						move(LEFT);
					}
				});

				slideRight.click(function(){
					console.log("clickedright");
					numberOfHiddenSlides=calculateNumberOfHiddenSlides(sliderWrapper,numberOfSlides,visibleArea,clickCounter);
					setCorrectWidthsAndHeights(sliderWrapper,visibleArea,tray);
					
					if(!tray.is(":animated")&&clickCounter>0){
						clickCounter--;
						move(RIGHT);
					}
				});

				functionmove(direction){

					vardirectionIndicator=null;

					if(direction==LEFT){
						directionIndicator="-=";
					}
					else{
						directionIndicator="+=";
					}

					console.log("tray"+tray);
					console.log(""+directionIndicator+moveDistance+"px");
					tray.animate({
						"left":directionIndicator+moveDistance+"px"
					},settings.animationSpeed);

					console.log("moved"+settings.animationSpeed);
				}
			});
		},

		/**
		*DELETETHESLIDESHOW
		*/
		destroy:function(){
			returnthis.each(function(){
				sliderWrapper=$(this);
				sliderWrapper.remove();
			});
		},

		/**
		*RELOADTHESLIDESHOW
		*/
		reload:function(){
			returnthis.each(function(){
				varsliderWrapper=$(this);
				vartray=sliderWrapper.find(".tray");
				varvisibleArea=sliderWrapper.find(".visible-slideshow-area");
				getAndSetRightContentRowDimensions();
				setCorrectWidthsAndHeights(sliderWrapper,visibleArea,tray);
			});
		}
	};

	/**
	*MAINMETHOD(JUSTPASSONTOTHECORRECTMETHOD)
	*/
	$.fn.handleSlideshow=function(method){
		if(methods[method]){
			returnmethods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}elseif(typeofmethod==='object'||!method){
			returnmethods.init.apply(this,arguments);
		}else{
			$.error('Method'+method+'doesnotexistonjQuery.slider');
		}
	};

	functiongetAndSetRightContentRowDimensions(){
		firstRightContentRow=$("#content").find(".row").first().find(".right");
		widthRightContentRow=firstRightContentRow.width();
		heightRightContentRow=firstRightContentRow.height();
	}

	functionsetCorrectWidthsAndHeights(sliderWrapper,visibleArea,tray){
		varslides=sliderWrapper.find(".step");
		vartrayWidth=0;
		varcurrentTrayLeft=parseInt(sliderWrapper);
		varnumberOfMovedSlides=Math.ceil(currentTrayLeft/formerMoveDistance);
		varnewTrayLeft=0;

		parseslides
		$.each(slides,function(key,value){
			varcurrSlide=$(this);
			varcurrSlideMarginLeft=parseInt(currSlide.css("margin-left").split("px")[0]);
			varcurrSlideMarginRight=parseInt(currSlide.css("margin-right").split("px")[0]);
			varcurrSlideWidth=parseInt(currSlide.width());

			currSlideMarginLeft=(isNaN(currSlideMarginLeft))?0:currSlideMarginLeft;
			currSlideMarginRight=(isNaN(currSlideMarginRight))?0:currSlideMarginRight;
			currSlideWidth=(isNaN(currSlideWidth))?0:currSlideWidth;

			console.log("currSlideMarginRight"+currSlideMarginRight+"currSlideMarginLeft"+currSlideMarginLeft+"currSlideWidth"+currSlideWidth);

			trayWidth=trayWidth+(currSlideMarginLeft+currSlideWidth+currSlideMarginRight);

			moveDistance=(key==0)?(currSlideWidth+currSlideMarginLeft+currSlideMarginRight):moveDistance;
		});

		newTrayLeft=moveDistance;
		formerMoveDistance=moveDistance;

		tray.css({
			"position":"absolute",
			"width":trayWidth+"px",
			"left":newTrayLeft+"px"
		});
		console.log(tray.width());
	}
	
	functioncalculateNumberOfHiddenSlides(sliderWrapper,numberOfSlides,visibleArea,clickCounter){
		varmaxVisibleSlides=sliderWrapper.width()/moveDistance;
		varnumberOfHiddenSlides=(numberOfSlides>maxVisibleSlides)?numberOfSlides-maxVisibleSlides:0;

		console.log("numberOfSlides"+numberOfSlides);
		console.log("clickCounter"+clickCounter);
		numberOfHiddenSlides=numberOfHiddenSlides-clickCounter;

		console.log("numberOfHiddenSlides"+numberOfHiddenSlides);

		returnnumberOfHiddenSlides;
	}
})(jQuery);
/*!
*Vue.jsv2.4.2
*(c)2014-2017EvanYou
*ReleasedundertheMITLicense.
*/
(function(global,factory){
	typeofexports==='object'&&typeofmodule!=='undefined'?module.exports=factory():
	typeofdefine==='function'&&define.amd?define(factory):
	(global.Vue=factory());
}(this,(function(){'usestrict';

/**/

thesehelpersproducesbettervmcodeinJSenginesduetotheir
explicitnessandfunctioninlining
functionisUndef(v){
returnv===undefined||v===null
}

functionisDef(v){
returnv!==undefined&&v!==null
}

functionisTrue(v){
returnv===true
}

functionisFalse(v){
returnv===false
}

/**
*Checkifvalueisprimitive
*/
functionisPrimitive(value){
return(
typeofvalue==='string'||
typeofvalue==='number'||
typeofvalue==='boolean'
)
}

/**
*Quickobjectcheck-thisisprimarilyusedtotell
*Objectsfromprimitivevalueswhenweknowthevalue
*isaJSON-complianttype.
*/
functionisObject(obj){
returnobj!==null&&typeofobj==='object'
}

var_toString=Object.prototype.toString;

/**
*Strictobjecttypecheck.Onlyreturnstrue
*forplainJavaScriptobjects.
*/
functionisPlainObject(obj){
return_toString.call(obj)==='[objectObject]'
}

functionisRegExp(v){
return_toString.call(v)==='[objectRegExp]'
}

/**
*Checkifvalisavalidarrayindex.
*/
functionisValidArrayIndex(val){
varn=parseFloat(val);
returnn>=0&&Math.floor(n)===n&&isFinite(val)
}

/**
*Convertavaluetoastringthatisactuallyrendered.
*/
functiontoString(val){
returnval==null
?''
:typeofval==='object'
?JSON.stringify(val,null,2)
:String(val)
}

/**
*Convertainputvaluetoanumberforpersistence.
*Iftheconversionfails,returnoriginalstring.
*/
functiontoNumber(val){
varn=parseFloat(val);
returnisNaN(n)?val:n
}

/**
*Makeamapandreturnafunctionforcheckingifakey
*isinthatmap.
*/
functionmakeMap(
str,
expectsLowerCase
){
varmap=Object.create(null);
varlist=str.split(',');
for(vari=0;i<list.length;i++){
map[list[i]]=true;
}
returnexpectsLowerCase
?function(val){returnmap[val.toLowerCase()];}
:function(val){returnmap[val];}
}

/**
*Checkifatagisabuilt-intag.
*/
varisBuiltInTag=makeMap('slot,component',true);

/**
*Checkifaattributeisareservedattribute.
*/
varisReservedAttribute=makeMap('key,ref,slot,is');

/**
*Removeanitemfromanarray
*/
functionremove(arr,item){
if(arr.length){
varindex=arr.indexOf(item);
if(index>-1){
returnarr.splice(index,1)
}
}
}

/**
*Checkwhethertheobjecthastheproperty.
*/
varhasOwnProperty=Object.prototype.hasOwnProperty;
functionhasOwn(obj,key){
returnhasOwnProperty.call(obj,key)
}

/**
*Createacachedversionofapurefunction.
*/
functioncached(fn){
varcache=Object.create(null);
return(functioncachedFn(str){
varhit=cache[str];
returnhit||(cache[str]=fn(str))
})
}

/**
*Camelizeahyphen-delimitedstring.
*/
varcamelizeRE=/-(\w)/g;
varcamelize=cached(function(str){
returnstr.replace(camelizeRE,function(_,c){returnc?c.toUpperCase():'';})
});

/**
*Capitalizeastring.
*/
varcapitalize=cached(function(str){
returnstr.charAt(0).toUpperCase()+str.slice(1)
});

/**
*HyphenateacamelCasestring.
*/
varhyphenateRE=/([^-])([A-Z])/g;
varhyphenate=cached(function(str){
returnstr
.replace(hyphenateRE,'$1-$2')
.replace(hyphenateRE,'$1-$2')
.toLowerCase()
});

/**
*Simplebind,fasterthannative
*/
functionbind(fn,ctx){
functionboundFn(a){
varl=arguments.length;
returnl
?l>1
?fn.apply(ctx,arguments)
:fn.call(ctx,a)
:fn.call(ctx)
}
recordoriginalfnlength
boundFn._length=fn.length;
returnboundFn
}

/**
*ConvertanArray-likeobjecttoarealArray.
*/
functiontoArray(list,start){
start=start||0;
vari=list.length-start;
varret=newArray(i);
while(i--){
ret[i]=list[i+start];
}
returnret
}

/**
*Mixpropertiesintotargetobject.
*/
functionextend(to,_from){
for(varkeyin_from){
to[key]=_from[key];
}
returnto
}

/**
*MergeanArrayofObjectsintoasingleObject.
*/
functiontoObject(arr){
varres={};
for(vari=0;i<arr.length;i++){
if(arr[i]){
extend(res,arr[i]);
}
}
returnres
}

/**
*Performnooperation.
*StubbingargstomakeFlowhappywithoutleavinguselesstranspiledcode
*with...rest(https:flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
*/
functionnoop(a,b,c){}

/**
*Alwaysreturnfalse.
*/
varno=function(a,b,c){returnfalse;};

/**
*Returnsamevalue
*/
varidentity=function(_){return_;};

/**
*Generateastatickeysstringfromcompilermodules.
*/
functiongenStaticKeys(modules){
returnmodules.reduce(function(keys,m){
returnkeys.concat(m.staticKeys||[])
},[]).join(',')
}

/**
*Checkiftwovaluesarelooselyequal-thatis,
*iftheyareplainobjects,dotheyhavethesameshape?
*/
functionlooseEqual(a,b){
if(a===b){returntrue}
varisObjectA=isObject(a);
varisObjectB=isObject(b);
if(isObjectA&&isObjectB){
try{
varisArrayA=Array.isArray(a);
varisArrayB=Array.isArray(b);
if(isArrayA&&isArrayB){
returna.length===b.length&&a.every(function(e,i){
returnlooseEqual(e,b[i])
})
}elseif(!isArrayA&&!isArrayB){
varkeysA=Object.keys(a);
varkeysB=Object.keys(b);
returnkeysA.length===keysB.length&&keysA.every(function(key){
returnlooseEqual(a[key],b[key])
})
}else{
/*istanbulignorenext*/
returnfalse
}
}catch(e){
/*istanbulignorenext*/
returnfalse
}
}elseif(!isObjectA&&!isObjectB){
returnString(a)===String(b)
}else{
returnfalse
}
}

functionlooseIndexOf(arr,val){
for(vari=0;i<arr.length;i++){
if(looseEqual(arr[i],val)){returni}
}
return-1
}

/**
*Ensureafunctioniscalledonlyonce.
*/
functiononce(fn){
varcalled=false;
returnfunction(){
if(!called){
called=true;
fn.apply(this,arguments);
}
}
}

varSSR_ATTR='data-server-rendered';

varASSET_TYPES=[
'component',
'directive',
'filter'
];

varLIFECYCLE_HOOKS=[
'beforeCreate',
'created',
'beforeMount',
'mounted',
'beforeUpdate',
'updated',
'beforeDestroy',
'destroyed',
'activated',
'deactivated'
];

/**/

varconfig=({
/**
*Optionmergestrategies(usedincore/util/options)
*/
optionMergeStrategies:Object.create(null),

/**
*Whethertosuppresswarnings.
*/
silent:false,

/**
*Showproductionmodetipmessageonboot?
*/
productionTip:"development"!=='production',

/**
*Whethertoenabledevtools
*/
devtools:"development"!=='production',

/**
*Whethertorecordperf
*/
performance:false,

/**
*Errorhandlerforwatchererrors
*/
errorHandler:null,

/**
*Warnhandlerforwatcherwarns
*/
warnHandler:null,

/**
*Ignorecertaincustomelements
*/
ignoredElements:[],

/**
*Customuserkeyaliasesforv-on
*/
keyCodes:Object.create(null),

/**
*Checkifatagisreservedsothatitcannotberegisteredasa
*component.Thisisplatform-dependentandmaybeoverwritten.
*/
isReservedTag:no,

/**
*Checkifanattributeisreservedsothatitcannotbeusedasacomponent
*prop.Thisisplatform-dependentandmaybeoverwritten.
*/
isReservedAttr:no,

/**
*Checkifatagisanunknownelement.
*Platform-dependent.
*/
isUnknownElement:no,

/**
*Getthenamespaceofanelement
*/
getTagNamespace:noop,

/**
*Parsetherealtagnameforthespecificplatform.
*/
parsePlatformTagName:identity,

/**
*Checkifanattributemustbeboundusingproperty,e.g.value
*Platform-dependent.
*/
mustUseProp:no,

/**
*Exposedforlegacyreasons
*/
_lifecycleHooks:LIFECYCLE_HOOKS
});

/**/

varemptyObject=Object.freeze({});

/**
*Checkifastringstartswith$or_
*/
functionisReserved(str){
varc=(str+'').charCodeAt(0);
returnc===0x24||c===0x5F
}

/**
*Defineaproperty.
*/
functiondef(obj,key,val,enumerable){
Object.defineProperty(obj,key,{
value:val,
enumerable:!!enumerable,
writable:true,
configurable:true
});
}

/**
*Parsesimplepath.
*/
varbailRE=/[^\w.$]/;
functionparsePath(path){
if(bailRE.test(path)){
return
}
varsegments=path.split('.');
returnfunction(obj){
for(vari=0;i<segments.length;i++){
if(!obj){return}
obj=obj[segments[i]];
}
returnobj
}
}

/**/

varwarn=noop;
vartip=noop;
varformatComponentName=(null);workaroundflowcheck

{
varhasConsole=typeofconsole!=='undefined';
varclassifyRE=/(?:^|[-_])(\w)/g;
varclassify=function(str){returnstr
.replace(classifyRE,function(c){returnc.toUpperCase();})
.replace(/[-_]/g,'');};

warn=function(msg,vm){
vartrace=vm?generateComponentTrace(vm):'';

if(config.warnHandler){
config.warnHandler.call(null,msg,vm,trace);
}elseif(hasConsole&&(!config.silent)){
console.error(("[Vuewarn]:"+msg+trace));
}
};

tip=function(msg,vm){
if(hasConsole&&(!config.silent)){
console.warn("[Vuetip]:"+msg+(
vm?generateComponentTrace(vm):''
));
}
};

formatComponentName=function(vm,includeFile){
if(vm.$root===vm){
return'<Root>'
}
varname=typeofvm==='string'
?vm
:typeofvm==='function'&&vm.options
?vm.options.name
:vm._isVue
?vm.$options.name||vm.$options._componentTag
:vm.name;

varfile=vm._isVue&&vm.$options.__file;
if(!name&&file){
varmatch=file.match(/([^/\\]+)\.vue$/);
name=match&&match[1];
}

return(
(name?("<"+(classify(name))+">"):"<Anonymous>")+
(file&&includeFile!==false?("at"+file):'')
)
};

varrepeat=function(str,n){
varres='';
while(n){
if(n%2===1){res+=str;}
if(n>1){str+=str;}
n>>=1;
}
returnres
};

vargenerateComponentTrace=function(vm){
if(vm._isVue&&vm.$parent){
vartree=[];
varcurrentRecursiveSequence=0;
while(vm){
if(tree.length>0){
varlast=tree[tree.length-1];
if(last.constructor===vm.constructor){
currentRecursiveSequence++;
vm=vm.$parent;
continue
}elseif(currentRecursiveSequence>0){
tree[tree.length-1]=[last,currentRecursiveSequence];
currentRecursiveSequence=0;
}
}
tree.push(vm);
vm=vm.$parent;
}
return'\n\nfoundin\n\n'+tree
.map(function(vm,i){return(""+(i===0?'--->':repeat('',5+i*2))+(Array.isArray(vm)
?((formatComponentName(vm[0]))+"...("+(vm[1])+"recursivecalls)")
:formatComponentName(vm)));})
.join('\n')
}else{
return("\n\n(foundin"+(formatComponentName(vm))+")")
}
};
}

/**/

functionhandleError(err,vm,info){
if(config.errorHandler){
config.errorHandler.call(null,err,vm,info);
}else{
{
warn(("Errorin"+info+":\""+(err.toString())+"\""),vm);
}
/*istanbulignoreelse*/
if(inBrowser&&typeofconsole!=='undefined'){
console.error(err);
}else{
throwerr
}
}
}

/**/
/*globalsMutationObserver*/

canweuse__proto__?
varhasProto='__proto__'in{};

Browserenvironmentsniffing
varinBrowser=typeofwindow!=='undefined';
varUA=inBrowser&&window.navigator.userAgent.toLowerCase();
varisIE=UA&&/msie|trident/.test(UA);
varisIE9=UA&&UA.indexOf('msie9.0')>0;
varisEdge=UA&&UA.indexOf('edge/')>0;
varisAndroid=UA&&UA.indexOf('android')>0;
varisIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);
varisChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;

Firefixhasa"watch"functiononObject.prototype...
varnativeWatch=({}).watch;

varsupportsPassive=false;
if(inBrowser){
try{
varopts={};
Object.defineProperty(opts,'passive',({
get:functionget(){
/*istanbulignorenext*/
supportsPassive=true;
}
}));https:github.com/facebook/flow/issues/285
window.addEventListener('test-passive',null,opts);
}catch(e){}
}

thisneedstobelazy-evaledbecausevuemayberequiredbefore
vue-server-renderercansetVUE_ENV
var_isServer;
varisServerRendering=function(){
if(_isServer===undefined){
/*istanbulignoreif*/
if(!inBrowser&&typeofglobal!=='undefined'){
detectpresenceofvue-server-rendererandavoid
Webpackshimmingtheprocess
_isServer=global['process'].env.VUE_ENV==='server';
}else{
_isServer=false;
}
}
return_isServer
};

detectdevtools
vardevtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/*istanbulignorenext*/
functionisNative(Ctor){
returntypeofCtor==='function'&&/nativecode/.test(Ctor.toString())
}

varhasSymbol=
typeofSymbol!=='undefined'&&isNative(Symbol)&&
typeofReflect!=='undefined'&&isNative(Reflect.ownKeys);

/**
*Deferatasktoexecuteitasynchronously.
*/
varnextTick=(function(){
varcallbacks=[];
varpending=false;
vartimerFunc;

functionnextTickHandler(){
pending=false;
varcopies=callbacks.slice(0);
callbacks.length=0;
for(vari=0;i<copies.length;i++){
copies[i]();
}
}

thenextTickbehaviorleveragesthemicrotaskqueue,whichcanbeaccessed
viaeithernativePromise.thenorMutationObserver.
MutationObserverhaswidersupport,howeveritisseriouslybuggedin
UIWebViewiniOS>=9.3.3whentriggeredintoucheventhandlers.It
completelystopsworkingaftertriggeringafewtimes...so,ifnative
Promiseisavailable,wewilluseit:
/*istanbulignoreif*/
if(typeofPromise!=='undefined'&&isNative(Promise)){
varp=Promise.resolve();
varlogError=function(err){console.error(err);};
timerFunc=function(){
p.then(nextTickHandler).catch(logError);
inproblematicUIWebViews,Promise.thendoesn'tcompletelybreak,but
itcangetstuckinaweirdstatewherecallbacksarepushedintothe
microtaskqueuebutthequeueisn'tbeingflushed,untilthebrowser
needstodosomeotherwork,e.g.handleatimer.Thereforewecan
"force"themicrotaskqueuetobeflushedbyaddinganemptytimer.
if(isIOS){setTimeout(noop);}
};
}elseif(typeofMutationObserver!=='undefined'&&(
isNative(MutationObserver)||
PhantomJSandiOS7.x
MutationObserver.toString()==='[objectMutationObserverConstructor]'
)){
useMutationObserverwherenativePromiseisnotavailable,
e.g.PhantomJSIE11,iOS7,Android4.4
varcounter=1;
varobserver=newMutationObserver(nextTickHandler);
vartextNode=document.createTextNode(String(counter));
observer.observe(textNode,{
characterData:true
});
timerFunc=function(){
counter=(counter+1)%2;
textNode.data=String(counter);
};
}else{
fallbacktosetTimeout
/*istanbulignorenext*/
timerFunc=function(){
setTimeout(nextTickHandler,0);
};
}

returnfunctionqueueNextTick(cb,ctx){
var_resolve;
callbacks.push(function(){
if(cb){
try{
cb.call(ctx);
}catch(e){
handleError(e,ctx,'nextTick');
}
}elseif(_resolve){
_resolve(ctx);
}
});
if(!pending){
pending=true;
timerFunc();
}
if(!cb&&typeofPromise!=='undefined'){
returnnewPromise(function(resolve,reject){
_resolve=resolve;
})
}
}
})();

var_Set;
/*istanbulignoreif*/
if(typeofSet!=='undefined'&&isNative(Set)){
usenativeSetwhenavailable.
_Set=Set;
}else{
anon-standardSetpolyfillthatonlyworkswithprimitivekeys.
_Set=(function(){
functionSet(){
this.set=Object.create(null);
}
Set.prototype.has=functionhas(key){
returnthis.set[key]===true
};
Set.prototype.add=functionadd(key){
this.set[key]=true;
};
Set.prototype.clear=functionclear(){
this.set=Object.create(null);
};

returnSet;
}());
}

/**/


varuid=0;

/**
*Adepisanobservablethatcanhavemultiple
*directivessubscribingtoit.
*/
varDep=functionDep(){
this.id=uid++;
this.subs=[];
};

Dep.prototype.addSub=functionaddSub(sub){
this.subs.push(sub);
};

Dep.prototype.removeSub=functionremoveSub(sub){
remove(this.subs,sub);
};

Dep.prototype.depend=functiondepend(){
if(Dep.target){
Dep.target.addDep(this);
}
};

Dep.prototype.notify=functionnotify(){
stabilizethesubscriberlistfirst
varsubs=this.subs.slice();
for(vari=0,l=subs.length;i<l;i++){
subs[i].update();
}
};

thecurrenttargetwatcherbeingevaluated.
thisisgloballyuniquebecausetherecouldbeonlyone
watcherbeingevaluatedatanytime.
Dep.target=null;
vartargetStack=[];

functionpushTarget(_target){
if(Dep.target){targetStack.push(Dep.target);}
Dep.target=_target;
}

functionpopTarget(){
Dep.target=targetStack.pop();
}

/*
*nottypecheckingthisfilebecauseflowdoesn'tplaywellwith
*dynamicallyaccessingmethodsonArrayprototype
*/

vararrayProto=Array.prototype;
vararrayMethods=Object.create(arrayProto);[
'push',
'pop',
'shift',
'unshift',
'splice',
'sort',
'reverse'
]
.forEach(function(method){
cacheoriginalmethod
varoriginal=arrayProto[method];
def(arrayMethods,method,functionmutator(){
varargs=[],len=arguments.length;
while(len--)args[len]=arguments[len];

varresult=original.apply(this,args);
varob=this.__ob__;
varinserted;
switch(method){
case'push':
case'unshift':
inserted=args;
break
case'splice':
inserted=args.slice(2);
break
}
if(inserted){ob.observeArray(inserted);}
notifychange
ob.dep.notify();
returnresult
});
});

/**/

vararrayKeys=Object.getOwnPropertyNames(arrayMethods);

/**
*Bydefault,whenareactivepropertyisset,thenewvalueis
*alsoconvertedtobecomereactive.Howeverwhenpassingdownprops,
*wedon'twanttoforceconversionbecausethevaluemaybeanestedvalue
*underafrozendatastructure.Convertingitwoulddefeattheoptimization.
*/
varobserverState={
shouldConvert:true
};

/**
*Observerclassthatareattachedtoeachobserved
*object.Onceattached,theobserverconvertstarget
*object'spropertykeysintogetter/settersthat
*collectdependenciesanddispatchesupdates.
*/
varObserver=functionObserver(value){
this.value=value;
this.dep=newDep();
this.vmCount=0;
def(value,'__ob__',this);
if(Array.isArray(value)){
varaugment=hasProto
?protoAugment
:copyAugment;
augment(value,arrayMethods,arrayKeys);
this.observeArray(value);
}else{
this.walk(value);
}
};

/**
*Walkthrougheachpropertyandconverttheminto
*getter/setters.Thismethodshouldonlybecalledwhen
*valuetypeisObject.
*/
Observer.prototype.walk=functionwalk(obj){
varkeys=Object.keys(obj);
for(vari=0;i<keys.length;i++){
defineReactive$$1(obj,keys[i],obj[keys[i]]);
}
};

/**
*ObservealistofArrayitems.
*/
Observer.prototype.observeArray=functionobserveArray(items){
for(vari=0,l=items.length;i<l;i++){
observe(items[i]);
}
};

helpers

/**
*AugmentantargetObjectorArraybyintercepting
*theprototypechainusing__proto__
*/
functionprotoAugment(target,src,keys){
/*eslint-disableno-proto*/
target.__proto__=src;
/*eslint-enableno-proto*/
}

/**
*AugmentantargetObjectorArraybydefining
*hiddenproperties.
*/
/*istanbulignorenext*/
functioncopyAugment(target,src,keys){
for(vari=0,l=keys.length;i<l;i++){
varkey=keys[i];
def(target,key,src[key]);
}
}

/**
*Attempttocreateanobserverinstanceforavalue,
*returnsthenewobserverifsuccessfullyobserved,
*ortheexistingobserverifthevaluealreadyhasone.
*/
functionobserve(value,asRootData){
if(!isObject(value)){
return
}
varob;
if(hasOwn(value,'__ob__')&&value.__ob__instanceofObserver){
ob=value.__ob__;
}elseif(
observerState.shouldConvert&&
!isServerRendering()&&
(Array.isArray(value)||isPlainObject(value))&&
Object.isExtensible(value)&&
!value._isVue
){
ob=newObserver(value);
}
if(asRootData&&ob){
ob.vmCount++;
}
returnob
}

/**
*DefineareactivepropertyonanObject.
*/
functiondefineReactive$$1(
obj,
key,
val,
customSetter,
shallow
){
vardep=newDep();

varproperty=Object.getOwnPropertyDescriptor(obj,key);
if(property&&property.configurable===false){
return
}

caterforpre-definedgetter/setters
vargetter=property&&property.get;
varsetter=property&&property.set;

varchildOb=!shallow&&observe(val);
Object.defineProperty(obj,key,{
enumerable:true,
configurable:true,
get:functionreactiveGetter(){
varvalue=getter?getter.call(obj):val;
if(Dep.target){
dep.depend();
if(childOb){
childOb.dep.depend();
}
if(Array.isArray(value)){
dependArray(value);
}
}
returnvalue
},
set:functionreactiveSetter(newVal){
varvalue=getter?getter.call(obj):val;
/*eslint-disableno-self-compare*/
if(newVal===value||(newVal!==newVal&&value!==value)){
return
}
/*eslint-enableno-self-compare*/
if("development"!=='production'&&customSetter){
customSetter();
}
if(setter){
setter.call(obj,newVal);
}else{
val=newVal;
}
childOb=!shallow&&observe(newVal);
dep.notify();
}
});
}

/**
*Setapropertyonanobject.Addsthenewpropertyand
*triggerschangenotificationifthepropertydoesn't
*alreadyexist.
*/
functionset(target,key,val){
if(Array.isArray(target)&&isValidArrayIndex(key)){
target.length=Math.max(target.length,key);
target.splice(key,1,val);
returnval
}
if(hasOwn(target,key)){
target[key]=val;
returnval
}
varob=(target).__ob__;
if(target._isVue||(ob&&ob.vmCount)){
"development"!=='production'&&warn(
'AvoidaddingreactivepropertiestoaVueinstanceoritsroot$data'+
'atruntime-declareitupfrontinthedataoption.'
);
returnval
}
if(!ob){
target[key]=val;
returnval
}
defineReactive$$1(ob.value,key,val);
ob.dep.notify();
returnval
}

/**
*Deleteapropertyandtriggerchangeifnecessary.
*/
functiondel(target,key){
if(Array.isArray(target)&&isValidArrayIndex(key)){
target.splice(key,1);
return
}
varob=(target).__ob__;
if(target._isVue||(ob&&ob.vmCount)){
"development"!=='production'&&warn(
'AvoiddeletingpropertiesonaVueinstanceoritsroot$data'+
'-justsetittonull.'
);
return
}
if(!hasOwn(target,key)){
return
}
deletetarget[key];
if(!ob){
return
}
ob.dep.notify();
}

/**
*Collectdependenciesonarrayelementswhenthearrayistouched,since
*wecannotinterceptarrayelementaccesslikepropertygetters.
*/
functiondependArray(value){
for(vare=(void0),i=0,l=value.length;i<l;i++){
e=value[i];
e&&e.__ob__&&e.__ob__.dep.depend();
if(Array.isArray(e)){
dependArray(e);
}
}
}

/**/

/**
*Optionoverwritingstrategiesarefunctionsthathandle
*howtomergeaparentoptionvalueandachildoption
*valueintothefinalvalue.
*/
varstrats=config.optionMergeStrategies;

/**
*Optionswithrestrictions
*/
{
strats.el=strats.propsData=function(parent,child,vm,key){
if(!vm){
warn(
"option\""+key+"\"canonlybeusedduringinstance"+
'creationwiththe`new`keyword.'
);
}
returndefaultStrat(parent,child)
};
}

/**
*Helperthatrecursivelymergestwodataobjectstogether.
*/
functionmergeData(to,from){
if(!from){returnto}
varkey,toVal,fromVal;
varkeys=Object.keys(from);
for(vari=0;i<keys.length;i++){
key=keys[i];
toVal=to[key];
fromVal=from[key];
if(!hasOwn(to,key)){
set(to,key,fromVal);
}elseif(isPlainObject(toVal)&&isPlainObject(fromVal)){
mergeData(toVal,fromVal);
}
}
returnto
}

/**
*Data
*/
functionmergeDataOrFn(
parentVal,
childVal,
vm
){
if(!vm){
inaVue.extendmerge,bothshouldbefunctions
if(!childVal){
returnparentVal
}
if(!parentVal){
returnchildVal
}
whenparentVal&childValarebothpresent,
weneedtoreturnafunctionthatreturnsthe
mergedresultofbothfunctions...noneedto
checkifparentValisafunctionherebecause
ithastobeafunctiontopasspreviousmerges.
returnfunctionmergedDataFn(){
returnmergeData(
typeofchildVal==='function'?childVal.call(this):childVal,
typeofparentVal==='function'?parentVal.call(this):parentVal
)
}
}elseif(parentVal||childVal){
returnfunctionmergedInstanceDataFn(){
instancemerge
varinstanceData=typeofchildVal==='function'
?childVal.call(vm)
:childVal;
vardefaultData=typeofparentVal==='function'
?parentVal.call(vm)
:undefined;
if(instanceData){
returnmergeData(instanceData,defaultData)
}else{
returndefaultData
}
}
}
}

strats.data=function(
parentVal,
childVal,
vm
){
if(!vm){
if(childVal&&typeofchildVal!=='function'){
"development"!=='production'&&warn(
'The"data"optionshouldbeafunction'+
'thatreturnsaper-instancevalueincomponent'+
'definitions.',
vm
);

returnparentVal
}
returnmergeDataOrFn.call(this,parentVal,childVal)
}

returnmergeDataOrFn(parentVal,childVal,vm)
};

/**
*Hooksandpropsaremergedasarrays.
*/
functionmergeHook(
parentVal,
childVal
){
returnchildVal
?parentVal
?parentVal.concat(childVal)
:Array.isArray(childVal)
?childVal
:[childVal]
:parentVal
}

LIFECYCLE_HOOKS.forEach(function(hook){
strats[hook]=mergeHook;
});

/**
*Assets
*
*Whenavmispresent(instancecreation),weneedtodo
*athree-waymergebetweenconstructoroptions,instance
*optionsandparentoptions.
*/
functionmergeAssets(parentVal,childVal){
varres=Object.create(parentVal||null);
returnchildVal
?extend(res,childVal)
:res
}

ASSET_TYPES.forEach(function(type){
strats[type+'s']=mergeAssets;
});

/**
*Watchers.
*
*Watchershashesshouldnotoverwriteone
*another,sowemergethemasarrays.
*/
strats.watch=function(parentVal,childVal){
workaroundFirefox'sObject.prototype.watch...
if(parentVal===nativeWatch){parentVal=undefined;}
if(childVal===nativeWatch){childVal=undefined;}
/*istanbulignoreif*/
if(!childVal){returnObject.create(parentVal||null)}
if(!parentVal){returnchildVal}
varret={};
extend(ret,parentVal);
for(varkeyinchildVal){
varparent=ret[key];
varchild=childVal[key];
if(parent&&!Array.isArray(parent)){
parent=[parent];
}
ret[key]=parent
?parent.concat(child)
:Array.isArray(child)?child:[child];
}
returnret
};

/**
*Otherobjecthashes.
*/
strats.props=
strats.methods=
strats.inject=
strats.computed=function(parentVal,childVal){
if(!parentVal){returnchildVal}
varret=Object.create(null);
extend(ret,parentVal);
if(childVal){extend(ret,childVal);}
returnret
};
strats.provide=mergeDataOrFn;

/**
*Defaultstrategy.
*/
vardefaultStrat=function(parentVal,childVal){
returnchildVal===undefined
?parentVal
:childVal
};

/**
*Validatecomponentnames
*/
functioncheckComponents(options){
for(varkeyinoptions.components){
varlower=key.toLowerCase();
if(isBuiltInTag(lower)||config.isReservedTag(lower)){
warn(
'Donotusebuilt-inorreservedHTMLelementsascomponent'+
'id:'+key
);
}
}
}

/**
*Ensureallpropsoptionsyntaxarenormalizedintothe
*Object-basedformat.
*/
functionnormalizeProps(options){
varprops=options.props;
if(!props){return}
varres={};
vari,val,name;
if(Array.isArray(props)){
i=props.length;
while(i--){
val=props[i];
if(typeofval==='string'){
name=camelize(val);
res[name]={type:null};
}else{
warn('propsmustbestringswhenusingarraysyntax.');
}
}
}elseif(isPlainObject(props)){
for(varkeyinprops){
val=props[key];
name=camelize(key);
res[name]=isPlainObject(val)
?val
:{type:val};
}
}
options.props=res;
}

/**
*NormalizeallinjectionsintoObject-basedformat
*/
functionnormalizeInject(options){
varinject=options.inject;
if(Array.isArray(inject)){
varnormalized=options.inject={};
for(vari=0;i<inject.length;i++){
normalized[inject[i]]=inject[i];
}
}
}

/**
*Normalizerawfunctiondirectivesintoobjectformat.
*/
functionnormalizeDirectives(options){
vardirs=options.directives;
if(dirs){
for(varkeyindirs){
vardef=dirs[key];
if(typeofdef==='function'){
dirs[key]={bind:def,update:def};
}
}
}
}

/**
*Mergetwooptionobjectsintoanewone.
*Coreutilityusedinbothinstantiationandinheritance.
*/
functionmergeOptions(
parent,
child,
vm
){
{
checkComponents(child);
}

if(typeofchild==='function'){
child=child.options;
}

normalizeProps(child);
normalizeInject(child);
normalizeDirectives(child);
varextendsFrom=child.extends;
if(extendsFrom){
parent=mergeOptions(parent,extendsFrom,vm);
}
if(child.mixins){
for(vari=0,l=child.mixins.length;i<l;i++){
parent=mergeOptions(parent,child.mixins[i],vm);
}
}
varoptions={};
varkey;
for(keyinparent){
mergeField(key);
}
for(keyinchild){
if(!hasOwn(parent,key)){
mergeField(key);
}
}
functionmergeField(key){
varstrat=strats[key]||defaultStrat;
options[key]=strat(parent[key],child[key],vm,key);
}
returnoptions
}

/**
*Resolveanasset.
*Thisfunctionisusedbecausechildinstancesneedaccess
*toassetsdefinedinitsancestorchain.
*/
functionresolveAsset(
options,
type,
id,
warnMissing
){
/*istanbulignoreif*/
if(typeofid!=='string'){
return
}
varassets=options[type];
checklocalregistrationvariationsfirst
if(hasOwn(assets,id)){returnassets[id]}
varcamelizedId=camelize(id);
if(hasOwn(assets,camelizedId)){returnassets[camelizedId]}
varPascalCaseId=capitalize(camelizedId);
if(hasOwn(assets,PascalCaseId)){returnassets[PascalCaseId]}
fallbacktoprototypechain
varres=assets[id]||assets[camelizedId]||assets[PascalCaseId];
if("development"!=='production'&&warnMissing&&!res){
warn(
'Failedtoresolve'+type.slice(0,-1)+':'+id,
options
);
}
returnres
}

/**/

functionvalidateProp(
key,
propOptions,
propsData,
vm
){
varprop=propOptions[key];
varabsent=!hasOwn(propsData,key);
varvalue=propsData[key];
handlebooleanprops
if(isType(Boolean,prop.type)){
if(absent&&!hasOwn(prop,'default')){
value=false;
}elseif(!isType(String,prop.type)&&(value===''||value===hyphenate(key))){
value=true;
}
}
checkdefaultvalue
if(value===undefined){
value=getPropDefaultValue(vm,prop,key);
sincethedefaultvalueisafreshcopy,
makesuretoobserveit.
varprevShouldConvert=observerState.shouldConvert;
observerState.shouldConvert=true;
observe(value);
observerState.shouldConvert=prevShouldConvert;
}
{
assertProp(prop,key,value,vm,absent);
}
returnvalue
}

/**
*Getthedefaultvalueofaprop.
*/
functiongetPropDefaultValue(vm,prop,key){
nodefault,returnundefined
if(!hasOwn(prop,'default')){
returnundefined
}
vardef=prop.default;
warnagainstnon-factorydefaultsforObject&Array
if("development"!=='production'&&isObject(def)){
warn(
'Invaliddefaultvalueforprop"'+key+'":'+
'PropswithtypeObject/Arraymustuseafactoryfunction'+
'toreturnthedefaultvalue.',
vm
);
}
therawpropvaluewasalsoundefinedfrompreviousrender,
returnpreviousdefaultvaluetoavoidunnecessarywatchertrigger
if(vm&&vm.$options.propsData&&
vm.$options.propsData[key]===undefined&&
vm._props[key]!==undefined
){
returnvm._props[key]
}
callfactoryfunctionfornon-Functiontypes
avalueisFunctionifitsprototypeisfunctionevenacrossdifferentexecutioncontext
returntypeofdef==='function'&&getType(prop.type)!=='Function'
?def.call(vm)
:def
}

/**
*Assertwhetherapropisvalid.
*/
functionassertProp(
prop,
name,
value,
vm,
absent
){
if(prop.required&&absent){
warn(
'Missingrequiredprop:"'+name+'"',
vm
);
return
}
if(value==null&&!prop.required){
return
}
vartype=prop.type;
varvalid=!type||type===true;
varexpectedTypes=[];
if(type){
if(!Array.isArray(type)){
type=[type];
}
for(vari=0;i<type.length&&!valid;i++){
varassertedType=assertType(value,type[i]);
expectedTypes.push(assertedType.expectedType||'');
valid=assertedType.valid;
}
}
if(!valid){
warn(
'Invalidprop:typecheckfailedforprop"'+name+'".'+
'Expected'+expectedTypes.map(capitalize).join(',')+
',got'+Object.prototype.toString.call(value).slice(8,-1)+'.',
vm
);
return
}
varvalidator=prop.validator;
if(validator){
if(!validator(value)){
warn(
'Invalidprop:customvalidatorcheckfailedforprop"'+name+'".',
vm
);
}
}
}

varsimpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;

functionassertType(value,type){
varvalid;
varexpectedType=getType(type);
if(simpleCheckRE.test(expectedType)){
valid=typeofvalue===expectedType.toLowerCase();
}elseif(expectedType==='Object'){
valid=isPlainObject(value);
}elseif(expectedType==='Array'){
valid=Array.isArray(value);
}else{
valid=valueinstanceoftype;
}
return{
valid:valid,
expectedType:expectedType
}
}

/**
*Usefunctionstringnametocheckbuilt-intypes,
*becauseasimpleequalitycheckwillfailwhenrunning
*acrossdifferentvms/iframes.
*/
functiongetType(fn){
varmatch=fn&&fn.toString().match(/^\s*function(\w+)/);
returnmatch?match[1]:''
}

functionisType(type,fn){
if(!Array.isArray(fn)){
returngetType(fn)===getType(type)
}
for(vari=0,len=fn.length;i<len;i++){
if(getType(fn[i])===getType(type)){
returntrue
}
}
/*istanbulignorenext*/
returnfalse
}

/**/

varmark;
varmeasure;

{
varperf=inBrowser&&window.performance;
/*istanbulignoreif*/
if(
perf&&
perf.mark&&
perf.measure&&
perf.clearMarks&&
perf.clearMeasures
){
mark=function(tag){returnperf.mark(tag);};
measure=function(name,startTag,endTag){
perf.measure(name,startTag,endTag);
perf.clearMarks(startTag);
perf.clearMarks(endTag);
perf.clearMeasures(name);
};
}
}

/*nottypecheckingthisfilebecauseflowdoesn'tplaywellwithProxy*/

varinitProxy;

{
varallowedGlobals=makeMap(
'Infinity,undefined,NaN,isFinite,isNaN,'+
'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+
'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+
'require'forWebpack/Browserify
);

varwarnNonPresent=function(target,key){
warn(
"Propertyormethod\""+key+"\"isnotdefinedontheinstancebut"+
"referencedduringrender.Makesuretodeclarereactivedata"+
"propertiesinthedataoption.",
target
);
};

varhasProxy=
typeofProxy!=='undefined'&&
Proxy.toString().match(/nativecode/);

if(hasProxy){
varisBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta');
config.keyCodes=newProxy(config.keyCodes,{
set:functionset(target,key,value){
if(isBuiltInModifier(key)){
warn(("Avoidoverwritingbuilt-inmodifierinconfig.keyCodes:."+key));
returnfalse
}else{
target[key]=value;
returntrue
}
}
});
}

varhasHandler={
has:functionhas(target,key){
varhas=keyintarget;
varisAllowed=allowedGlobals(key)||key.charAt(0)==='_';
if(!has&&!isAllowed){
warnNonPresent(target,key);
}
returnhas||!isAllowed
}
};

vargetHandler={
get:functionget(target,key){
if(typeofkey==='string'&&!(keyintarget)){
warnNonPresent(target,key);
}
returntarget[key]
}
};

initProxy=functioninitProxy(vm){
if(hasProxy){
determinewhichproxyhandlertouse
varoptions=vm.$options;
varhandlers=options.render&&options.render._withStripped
?getHandler
:hasHandler;
vm._renderProxy=newProxy(vm,handlers);
}else{
vm._renderProxy=vm;
}
};
}

/**/

varVNode=functionVNode(
tag,
data,
children,
text,
elm,
context,
componentOptions,
asyncFactory
){
this.tag=tag;
this.data=data;
this.children=children;
this.text=text;
this.elm=elm;
this.ns=undefined;
this.context=context;
this.functionalContext=undefined;
this.key=data&&data.key;
this.componentOptions=componentOptions;
this.componentInstance=undefined;
this.parent=undefined;
this.raw=false;
this.isStatic=false;
this.isRootInsert=true;
this.isComment=false;
this.isCloned=false;
this.isOnce=false;
this.asyncFactory=asyncFactory;
this.asyncMeta=undefined;
this.isAsyncPlaceholder=false;
};

varprototypeAccessors={child:{}};

DEPRECATED:aliasforcomponentInstanceforbackwardscompat.
/*istanbulignorenext*/
prototypeAccessors.child.get=function(){
returnthis.componentInstance
};

Object.defineProperties(VNode.prototype,prototypeAccessors);

varcreateEmptyVNode=function(text){
if(text===void0)text='';

varnode=newVNode();
node.text=text;
node.isComment=true;
returnnode
};

functioncreateTextVNode(val){
returnnewVNode(undefined,undefined,undefined,String(val))
}

optimizedshallowclone
usedforstaticnodesandslotnodesbecausetheymaybereusedacross
multiplerenders,cloningthemavoidserrorswhenDOMmanipulationsrely
ontheirelmreference.
functioncloneVNode(vnode){
varcloned=newVNode(
vnode.tag,
vnode.data,
vnode.children,
vnode.text,
vnode.elm,
vnode.context,
vnode.componentOptions,
vnode.asyncFactory
);
cloned.ns=vnode.ns;
cloned.isStatic=vnode.isStatic;
cloned.key=vnode.key;
cloned.isComment=vnode.isComment;
cloned.isCloned=true;
returncloned
}

functioncloneVNodes(vnodes){
varlen=vnodes.length;
varres=newArray(len);
for(vari=0;i<len;i++){
res[i]=cloneVNode(vnodes[i]);
}
returnres
}

/**/

varnormalizeEvent=cached(function(name){
varpassive=name.charAt(0)==='&';
name=passive?name.slice(1):name;
varonce$$1=name.charAt(0)==='~';Prefixedlast,checkedfirst
name=once$$1?name.slice(1):name;
varcapture=name.charAt(0)==='!';
name=capture?name.slice(1):name;
return{
name:name,
once:once$$1,
capture:capture,
passive:passive
}
});

functioncreateFnInvoker(fns){
functioninvoker(){
vararguments$1=arguments;

varfns=invoker.fns;
if(Array.isArray(fns)){
varcloned=fns.slice();
for(vari=0;i<cloned.length;i++){
cloned[i].apply(null,arguments$1);
}
}else{
returnhandlerreturnvalueforsinglehandlers
returnfns.apply(null,arguments)
}
}
invoker.fns=fns;
returninvoker
}

functionupdateListeners(
on,
oldOn,
add,
remove$$1,
vm
){
varname,cur,old,event;
for(nameinon){
cur=on[name];
old=oldOn[name];
event=normalizeEvent(name);
if(isUndef(cur)){
"development"!=='production'&&warn(
"Invalidhandlerforevent\""+(event.name)+"\":got"+String(cur),
vm
);
}elseif(isUndef(old)){
if(isUndef(cur.fns)){
cur=on[name]=createFnInvoker(cur);
}
add(event.name,cur,event.once,event.capture,event.passive);
}elseif(cur!==old){
old.fns=cur;
on[name]=old;
}
}
for(nameinoldOn){
if(isUndef(on[name])){
event=normalizeEvent(name);
remove$$1(event.name,oldOn[name],event.capture);
}
}
}

/**/

functionmergeVNodeHook(def,hookKey,hook){
varinvoker;
varoldHook=def[hookKey];

functionwrappedHook(){
hook.apply(this,arguments);
important:removemergedhooktoensureit'scalledonlyonce
andpreventmemoryleak
remove(invoker.fns,wrappedHook);
}

if(isUndef(oldHook)){
noexistinghook
invoker=createFnInvoker([wrappedHook]);
}else{
/*istanbulignoreif*/
if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){
alreadyamergedinvoker
invoker=oldHook;
invoker.fns.push(wrappedHook);
}else{
existingplainhook
invoker=createFnInvoker([oldHook,wrappedHook]);
}
}

invoker.merged=true;
def[hookKey]=invoker;
}

/**/

functionextractPropsFromVNodeData(
data,
Ctor,
tag
){
weareonlyextractingrawvalueshere.
validationanddefaultvaluesarehandledinthechild
componentitself.
varpropOptions=Ctor.options.props;
if(isUndef(propOptions)){
return
}
varres={};
varattrs=data.attrs;
varprops=data.props;
if(isDef(attrs)||isDef(props)){
for(varkeyinpropOptions){
varaltKey=hyphenate(key);
{
varkeyInLowerCase=key.toLowerCase();
if(
key!==keyInLowerCase&&
attrs&&hasOwn(attrs,keyInLowerCase)
){
tip(
"Prop\""+keyInLowerCase+"\"ispassedtocomponent"+
(formatComponentName(tag||Ctor))+",butthedeclaredpropnameis"+
"\""+key+"\"."+
"NotethatHTMLattributesarecase-insensitiveandcamelCased"+
"propsneedtousetheirkebab-caseequivalentswhenusingin-DOM"+
"templates.Youshouldprobablyuse\""+altKey+"\"insteadof\""+key+"\"."
);
}
}
checkProp(res,props,key,altKey,true)||
checkProp(res,attrs,key,altKey,false);
}
}
returnres
}

functioncheckProp(
res,
hash,
key,
altKey,
preserve
){
if(isDef(hash)){
if(hasOwn(hash,key)){
res[key]=hash[key];
if(!preserve){
deletehash[key];
}
returntrue
}elseif(hasOwn(hash,altKey)){
res[key]=hash[altKey];
if(!preserve){
deletehash[altKey];
}
returntrue
}
}
returnfalse
}

/**/

Thetemplatecompilerattemptstominimizetheneedfornormalizationby
staticallyanalyzingthetemplateatcompiletime.

ForplainHTMLmarkup,normalizationcanbecompletelyskippedbecausethe
generatedrenderfunctionisguaranteedtoreturnArray<VNode>.Thereare
twocaseswhereextranormalizationisneeded:

1.Whenthechildrencontainscomponents-becauseafunctionalcomponent
mayreturnanArrayinsteadofasingleroot.Inthiscase,justasimple
normalizationisneeded-ifanychildisanArray,weflattenthewhole
thingwithArray.prototype.concat.Itisguaranteedtobeonly1-leveldeep
becausefunctionalcomponentsalreadynormalizetheirownchildren.
functionsimpleNormalizeChildren(children){
for(vari=0;i<children.length;i++){
if(Array.isArray(children[i])){
returnArray.prototype.concat.apply([],children)
}
}
returnchildren
}

2.WhenthechildrencontainsconstructsthatalwaysgeneratednestedArrays,
e.g.<template>,<slot>,v-for,orwhenthechildrenisprovidedbyuser
withhand-writtenrenderfunctions/JSX.Insuchcasesafullnormalization
isneededtocatertoallpossibletypesofchildrenvalues.
functionnormalizeChildren(children){
returnisPrimitive(children)
?[createTextVNode(children)]
:Array.isArray(children)
?normalizeArrayChildren(children)
:undefined
}

functionisTextNode(node){
returnisDef(node)&&isDef(node.text)&&isFalse(node.isComment)
}

functionnormalizeArrayChildren(children,nestedIndex){
varres=[];
vari,c,last;
for(i=0;i<children.length;i++){
c=children[i];
if(isUndef(c)||typeofc==='boolean'){continue}
last=res[res.length-1];
nested
if(Array.isArray(c)){
res.push.apply(res,normalizeArrayChildren(c,((nestedIndex||'')+"_"+i)));
}elseif(isPrimitive(c)){
if(isTextNode(last)){
mergeadjacenttextnodes
thisisnecessaryforSSRhydrationbecausetextnodesare
essentiallymergedwhenrenderedtoHTMLstrings
(last).text+=String(c);
}elseif(c!==''){
convertprimitivetovnode
res.push(createTextVNode(c));
}
}else{
if(isTextNode(c)&&isTextNode(last)){
mergeadjacenttextnodes
res[res.length-1]=createTextVNode(last.text+c.text);
}else{
defaultkeyfornestedarraychildren(likelygeneratedbyv-for)
if(isTrue(children._isVList)&&
isDef(c.tag)&&
isUndef(c.key)&&
isDef(nestedIndex)){
c.key="__vlist"+nestedIndex+"_"+i+"__";
}
res.push(c);
}
}
}
returnres
}

/**/

functionensureCtor(comp,base){
if(comp.__esModule&&comp.default){
comp=comp.default;
}
returnisObject(comp)
?base.extend(comp)
:comp
}

functioncreateAsyncPlaceholder(
factory,
data,
context,
children,
tag
){
varnode=createEmptyVNode();
node.asyncFactory=factory;
node.asyncMeta={data:data,context:context,children:children,tag:tag};
returnnode
}

functionresolveAsyncComponent(
factory,
baseCtor,
context
){
if(isTrue(factory.error)&&isDef(factory.errorComp)){
returnfactory.errorComp
}

if(isDef(factory.resolved)){
returnfactory.resolved
}

if(isTrue(factory.loading)&&isDef(factory.loadingComp)){
returnfactory.loadingComp
}

if(isDef(factory.contexts)){
alreadypending
factory.contexts.push(context);
}else{
varcontexts=factory.contexts=[context];
varsync=true;

varforceRender=function(){
for(vari=0,l=contexts.length;i<l;i++){
contexts[i].$forceUpdate();
}
};

varresolve=once(function(res){
cacheresolved
factory.resolved=ensureCtor(res,baseCtor);
invokecallbacksonlyifthisisnotasynchronousresolve
(asyncresolvesareshimmedassynchronousduringSSR)
if(!sync){
forceRender();
}
});

varreject=once(function(reason){
"development"!=='production'&&warn(
"Failedtoresolveasynccomponent:"+(String(factory))+
(reason?("\nReason:"+reason):'')
);
if(isDef(factory.errorComp)){
factory.error=true;
forceRender();
}
});

varres=factory(resolve,reject);

if(isObject(res)){
if(typeofres.then==='function'){
()=>Promise
if(isUndef(factory.resolved)){
res.then(resolve,reject);
}
}elseif(isDef(res.component)&&typeofres.component.then==='function'){
res.component.then(resolve,reject);

if(isDef(res.error)){
factory.errorComp=ensureCtor(res.error,baseCtor);
}

if(isDef(res.loading)){
factory.loadingComp=ensureCtor(res.loading,baseCtor);
if(res.delay===0){
factory.loading=true;
}else{
setTimeout(function(){
if(isUndef(factory.resolved)&&isUndef(factory.error)){
factory.loading=true;
forceRender();
}
},res.delay||200);
}
}

if(isDef(res.timeout)){
setTimeout(function(){
if(isUndef(factory.resolved)){
reject(
"timeout("+(res.timeout)+"ms)"
);
}
},res.timeout);
}
}
}

sync=false;
returnincaseresolvedsynchronously
returnfactory.loading
?factory.loadingComp
:factory.resolved
}
}

/**/

functiongetFirstComponentChild(children){
if(Array.isArray(children)){
for(vari=0;i<children.length;i++){
varc=children[i];
if(isDef(c)&&isDef(c.componentOptions)){
returnc
}
}
}
}

/**/

/**/

functioninitEvents(vm){
vm._events=Object.create(null);
vm._hasHookEvent=false;
initparentattachedevents
varlisteners=vm.$options._parentListeners;
if(listeners){
updateComponentListeners(vm,listeners);
}
}

vartarget;

functionadd(event,fn,once$$1){
if(once$$1){
target.$once(event,fn);
}else{
target.$on(event,fn);
}
}

functionremove$1(event,fn){
target.$off(event,fn);
}

functionupdateComponentListeners(
vm,
listeners,
oldListeners
){
target=vm;
updateListeners(listeners,oldListeners||{},add,remove$1,vm);
}

functioneventsMixin(Vue){
varhookRE=/^hook:/;
Vue.prototype.$on=function(event,fn){
varthis$1=this;

varvm=this;
if(Array.isArray(event)){
for(vari=0,l=event.length;i<l;i++){
this$1.$on(event[i],fn);
}
}else{
(vm._events[event]||(vm._events[event]=[])).push(fn);
optimizehook:eventcostbyusingabooleanflagmarkedatregistration
insteadofahashlookup
if(hookRE.test(event)){
vm._hasHookEvent=true;
}
}
returnvm
};

Vue.prototype.$once=function(event,fn){
varvm=this;
functionon(){
vm.$off(event,on);
fn.apply(vm,arguments);
}
on.fn=fn;
vm.$on(event,on);
returnvm
};

Vue.prototype.$off=function(event,fn){
varthis$1=this;

varvm=this;
all
if(!arguments.length){
vm._events=Object.create(null);
returnvm
}
arrayofevents
if(Array.isArray(event)){
for(vari$1=0,l=event.length;i$1<l;i$1++){
this$1.$off(event[i$1],fn);
}
returnvm
}
specificevent
varcbs=vm._events[event];
if(!cbs){
returnvm
}
if(arguments.length===1){
vm._events[event]=null;
returnvm
}
specifichandler
varcb;
vari=cbs.length;
while(i--){
cb=cbs[i];
if(cb===fn||cb.fn===fn){
cbs.splice(i,1);
break
}
}
returnvm
};

Vue.prototype.$emit=function(event){
varvm=this;
{
varlowerCaseEvent=event.toLowerCase();
if(lowerCaseEvent!==event&&vm._events[lowerCaseEvent]){
tip(
"Event\""+lowerCaseEvent+"\"isemittedincomponent"+
(formatComponentName(vm))+"butthehandlerisregisteredfor\""+event+"\"."+
"NotethatHTMLattributesarecase-insensitiveandyoucannotuse"+
"v-ontolistentocamelCaseeventswhenusingin-DOMtemplates."+
"Youshouldprobablyuse\""+(hyphenate(event))+"\"insteadof\""+event+"\"."
);
}
}
varcbs=vm._events[event];
if(cbs){
cbs=cbs.length>1?toArray(cbs):cbs;
varargs=toArray(arguments,1);
for(vari=0,l=cbs.length;i<l;i++){
try{
cbs[i].apply(vm,args);
}catch(e){
handleError(e,vm,("eventhandlerfor\""+event+"\""));
}
}
}
returnvm
};
}

/**/

/**
*RuntimehelperforresolvingrawchildrenVNodesintoaslotobject.
*/
functionresolveSlots(
children,
context
){
varslots={};
if(!children){
returnslots
}
vardefaultSlot=[];
for(vari=0,l=children.length;i<l;i++){
varchild=children[i];
namedslotsshouldonlyberespectedifthevnodewasrenderedinthe
samecontext.
if((child.context===context||child.functionalContext===context)&&
child.data&&child.data.slot!=null
){
varname=child.data.slot;
varslot=(slots[name]||(slots[name]=[]));
if(child.tag==='template'){
slot.push.apply(slot,child.children);
}else{
slot.push(child);
}
}else{
defaultSlot.push(child);
}
}
ignorewhitespace
if(!defaultSlot.every(isWhitespace)){
slots.default=defaultSlot;
}
returnslots
}

functionisWhitespace(node){
returnnode.isComment||node.text===''
}

functionresolveScopedSlots(
fns,seeflow/vnode
res
){
res=res||{};
for(vari=0;i<fns.length;i++){
if(Array.isArray(fns[i])){
resolveScopedSlots(fns[i],res);
}else{
res[fns[i].key]=fns[i].fn;
}
}
returnres
}

/**/

varactiveInstance=null;
varisUpdatingChildComponent=false;

functioninitLifecycle(vm){
varoptions=vm.$options;

locatefirstnon-abstractparent
varparent=options.parent;
if(parent&&!options.abstract){
while(parent.$options.abstract&&parent.$parent){
parent=parent.$parent;
}
parent.$children.push(vm);
}

vm.$parent=parent;
vm.$root=parent?parent.$root:vm;

vm.$children=[];
vm.$refs={};

vm._watcher=null;
vm._inactive=null;
vm._directInactive=false;
vm._isMounted=false;
vm._isDestroyed=false;
vm._isBeingDestroyed=false;
}

functionlifecycleMixin(Vue){
Vue.prototype._update=function(vnode,hydrating){
varvm=this;
if(vm._isMounted){
callHook(vm,'beforeUpdate');
}
varprevEl=vm.$el;
varprevVnode=vm._vnode;
varprevActiveInstance=activeInstance;
activeInstance=vm;
vm._vnode=vnode;
Vue.prototype.__patch__isinjectedinentrypoints
basedontherenderingbackendused.
if(!prevVnode){
initialrender
vm.$el=vm.__patch__(
vm.$el,vnode,hydrating,false/*removeOnly*/,
vm.$options._parentElm,
vm.$options._refElm
);
noneedfortherefnodesafterinitialpatch
thispreventskeepingadetachedDOMtreeinmemory(#5851)
vm.$options._parentElm=vm.$options._refElm=null;
}else{
updates
vm.$el=vm.__patch__(prevVnode,vnode);
}
activeInstance=prevActiveInstance;
update__vue__reference
if(prevEl){
prevEl.__vue__=null;
}
if(vm.$el){
vm.$el.__vue__=vm;
}
ifparentisanHOC,updateits$elaswell
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){
vm.$parent.$el=vm.$el;
}
updatedhookiscalledbytheschedulertoensurethatchildrenare
updatedinaparent'supdatedhook.
};

Vue.prototype.$forceUpdate=function(){
varvm=this;
if(vm._watcher){
vm._watcher.update();
}
};

Vue.prototype.$destroy=function(){
varvm=this;
if(vm._isBeingDestroyed){
return
}
callHook(vm,'beforeDestroy');
vm._isBeingDestroyed=true;
removeselffromparent
varparent=vm.$parent;
if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){
remove(parent.$children,vm);
}
teardownwatchers
if(vm._watcher){
vm._watcher.teardown();
}
vari=vm._watchers.length;
while(i--){
vm._watchers[i].teardown();
}
removereferencefromdataob
frozenobjectmaynothaveobserver.
if(vm._data.__ob__){
vm._data.__ob__.vmCount--;
}
callthelasthook...
vm._isDestroyed=true;
invokedestroyhooksoncurrentrenderedtree
vm.__patch__(vm._vnode,null);
firedestroyedhook
callHook(vm,'destroyed');
turnoffallinstancelisteners.
vm.$off();
remove__vue__reference
if(vm.$el){
vm.$el.__vue__=null;
}
};
}

functionmountComponent(
vm,
el,
hydrating
){
vm.$el=el;
if(!vm.$options.render){
vm.$options.render=createEmptyVNode;
{
/*istanbulignoreif*/
if((vm.$options.template&&vm.$options.template.charAt(0)!=='#')||
vm.$options.el||el){
warn(
'Youareusingtheruntime-onlybuildofVuewherethetemplate'+
'compilerisnotavailable.Eitherpre-compilethetemplatesinto'+
'renderfunctions,orusethecompiler-includedbuild.',
vm
);
}else{
warn(
'Failedtomountcomponent:templateorrenderfunctionnotdefined.',
vm
);
}
}
}
callHook(vm,'beforeMount');

varupdateComponent;
/*istanbulignoreif*/
if("development"!=='production'&&config.performance&&mark){
updateComponent=function(){
varname=vm._name;
varid=vm._uid;
varstartTag="vue-perf-start:"+id;
varendTag="vue-perf-end:"+id;

mark(startTag);
varvnode=vm._render();
mark(endTag);
measure((name+"render"),startTag,endTag);

mark(startTag);
vm._update(vnode,hydrating);
mark(endTag);
measure((name+"patch"),startTag,endTag);
};
}else{
updateComponent=function(){
vm._update(vm._render(),hydrating);
};
}

vm._watcher=newWatcher(vm,updateComponent,noop);
hydrating=false;

manuallymountedinstance,callmountedonself
mountediscalledforrender-createdchildcomponentsinitsinsertedhook
if(vm.$vnode==null){
vm._isMounted=true;
callHook(vm,'mounted');
}
returnvm
}

functionupdateChildComponent(
vm,
propsData,
listeners,
parentVnode,
renderChildren
){
{
isUpdatingChildComponent=true;
}

determinewhethercomponenthasslotchildren
weneedtodothisbeforeoverwriting$options._renderChildren
varhasChildren=!!(
renderChildren||hasnewstaticslots
vm.$options._renderChildren||hasoldstaticslots
parentVnode.data.scopedSlots||hasnewscopedslots
vm.$scopedSlots!==emptyObjecthasoldscopedslots
);

vm.$options._parentVnode=parentVnode;
vm.$vnode=parentVnode;updatevm'splaceholdernodewithoutre-render

if(vm._vnode){updatechildtree'sparent
vm._vnode.parent=parentVnode;
}
vm.$options._renderChildren=renderChildren;

update$attrsand$listensershash
thesearealsoreactivesotheymaytriggerchildupdateifthechild
usedthemduringrender
vm.$attrs=parentVnode.data&&parentVnode.data.attrs;
vm.$listeners=listeners;

updateprops
if(propsData&&vm.$options.props){
observerState.shouldConvert=false;
varprops=vm._props;
varpropKeys=vm.$options._propKeys||[];
for(vari=0;i<propKeys.length;i++){
varkey=propKeys[i];
props[key]=validateProp(key,vm.$options.props,propsData,vm);
}
observerState.shouldConvert=true;
keepacopyofrawpropsData
vm.$options.propsData=propsData;
}

updatelisteners
if(listeners){
varoldListeners=vm.$options._parentListeners;
vm.$options._parentListeners=listeners;
updateComponentListeners(vm,listeners,oldListeners);
}
resolveslots+forceupdateifhaschildren
if(hasChildren){
vm.$slots=resolveSlots(renderChildren,parentVnode.context);
vm.$forceUpdate();
}

{
isUpdatingChildComponent=false;
}
}

functionisInInactiveTree(vm){
while(vm&&(vm=vm.$parent)){
if(vm._inactive){returntrue}
}
returnfalse
}

functionactivateChildComponent(vm,direct){
if(direct){
vm._directInactive=false;
if(isInInactiveTree(vm)){
return
}
}elseif(vm._directInactive){
return
}
if(vm._inactive||vm._inactive===null){
vm._inactive=false;
for(vari=0;i<vm.$children.length;i++){
activateChildComponent(vm.$children[i]);
}
callHook(vm,'activated');
}
}

functiondeactivateChildComponent(vm,direct){
if(direct){
vm._directInactive=true;
if(isInInactiveTree(vm)){
return
}
}
if(!vm._inactive){
vm._inactive=true;
for(vari=0;i<vm.$children.length;i++){
deactivateChildComponent(vm.$children[i]);
}
callHook(vm,'deactivated');
}
}

functioncallHook(vm,hook){
varhandlers=vm.$options[hook];
if(handlers){
for(vari=0,j=handlers.length;i<j;i++){
try{
handlers[i].call(vm);
}catch(e){
handleError(e,vm,(hook+"hook"));
}
}
}
if(vm._hasHookEvent){
vm.$emit('hook:'+hook);
}
}

/**/


varMAX_UPDATE_COUNT=100;

varqueue=[];
varactivatedChildren=[];
varhas={};
varcircular={};
varwaiting=false;
varflushing=false;
varindex=0;

/**
*Resetthescheduler'sstate.
*/
functionresetSchedulerState(){
index=queue.length=activatedChildren.length=0;
has={};
{
circular={};
}
waiting=flushing=false;
}

/**
*Flushbothqueuesandrunthewatchers.
*/
functionflushSchedulerQueue(){
flushing=true;
varwatcher,id;

Sortqueuebeforeflush.
Thisensuresthat:
1.Componentsareupdatedfromparenttochild.(becauseparentisalways
createdbeforethechild)
2.Acomponent'suserwatchersarerunbeforeitsrenderwatcher(because
userwatchersarecreatedbeforetherenderwatcher)
3.Ifacomponentisdestroyedduringaparentcomponent'swatcherrun,
itswatcherscanbeskipped.
queue.sort(function(a,b){returna.id-b.id;});

donotcachelengthbecausemorewatchersmightbepushed
aswerunexistingwatchers
for(index=0;index<queue.length;index++){
watcher=queue[index];
id=watcher.id;
has[id]=null;
watcher.run();
indevbuild,checkandstopcircularupdates.
if("development"!=='production'&&has[id]!=null){
circular[id]=(circular[id]||0)+1;
if(circular[id]>MAX_UPDATE_COUNT){
warn(
'Youmayhaveaninfiniteupdateloop'+(
watcher.user
?("inwatcherwithexpression\""+(watcher.expression)+"\"")
:"inacomponentrenderfunction."
),
watcher.vm
);
break
}
}
}

keepcopiesofpostqueuesbeforeresettingstate
varactivatedQueue=activatedChildren.slice();
varupdatedQueue=queue.slice();

resetSchedulerState();

callcomponentupdatedandactivatedhooks
callActivatedHooks(activatedQueue);
callUpdatedHooks(updatedQueue);

devtoolhook
/*istanbulignoreif*/
if(devtools&&config.devtools){
devtools.emit('flush');
}
}

functioncallUpdatedHooks(queue){
vari=queue.length;
while(i--){
varwatcher=queue[i];
varvm=watcher.vm;
if(vm._watcher===watcher&&vm._isMounted){
callHook(vm,'updated');
}
}
}

/**
*Queueakept-alivecomponentthatwasactivatedduringpatch.
*Thequeuewillbeprocessedaftertheentiretreehasbeenpatched.
*/
functionqueueActivatedComponent(vm){
setting_inactivetofalseheresothatarenderfunctioncan
relyoncheckingwhetherit'sinaninactivetree(e.g.router-view)
vm._inactive=false;
activatedChildren.push(vm);
}

functioncallActivatedHooks(queue){
for(vari=0;i<queue.length;i++){
queue[i]._inactive=true;
activateChildComponent(queue[i],true/*true*/);
}
}

/**
*Pushawatcherintothewatcherqueue.
*JobswithduplicateIDswillbeskippedunlessit's
*pushedwhenthequeueisbeingflushed.
*/
functionqueueWatcher(watcher){
varid=watcher.id;
if(has[id]==null){
has[id]=true;
if(!flushing){
queue.push(watcher);
}else{
ifalreadyflushing,splicethewatcherbasedonitsid
ifalreadypastitsid,itwillberunnextimmediately.
vari=queue.length-1;
while(i>index&&queue[i].id>watcher.id){
i--;
}
queue.splice(i+1,0,watcher);
}
queuetheflush
if(!waiting){
waiting=true;
nextTick(flushSchedulerQueue);
}
}
}

/**/

varuid$2=0;

/**
*Awatcherparsesanexpression,collectsdependencies,
*andfirescallbackwhentheexpressionvaluechanges.
*Thisisusedforboththe$watch()apianddirectives.
*/
varWatcher=functionWatcher(
vm,
expOrFn,
cb,
options
){
this.vm=vm;
vm._watchers.push(this);
options
if(options){
this.deep=!!options.deep;
this.user=!!options.user;
this.lazy=!!options.lazy;
this.sync=!!options.sync;
}else{
this.deep=this.user=this.lazy=this.sync=false;
}
this.cb=cb;
this.id=++uid$2;uidforbatching
this.active=true;
this.dirty=this.lazy;forlazywatchers
this.deps=[];
this.newDeps=[];
this.depIds=new_Set();
this.newDepIds=new_Set();
this.expression=expOrFn.toString();
parseexpressionforgetter
if(typeofexpOrFn==='function'){
this.getter=expOrFn;
}else{
this.getter=parsePath(expOrFn);
if(!this.getter){
this.getter=function(){};
"development"!=='production'&&warn(
"Failedwatchingpath:\""+expOrFn+"\""+
'Watcheronlyacceptssimpledot-delimitedpaths.'+
'Forfullcontrol,useafunctioninstead.',
vm
);
}
}
this.value=this.lazy
?undefined
:this.get();
};

/**
*Evaluatethegetter,andre-collectdependencies.
*/
Watcher.prototype.get=functionget(){
pushTarget(this);
varvalue;
varvm=this.vm;
try{
value=this.getter.call(vm,vm);
}catch(e){
if(this.user){
handleError(e,vm,("getterforwatcher\""+(this.expression)+"\""));
}else{
throwe
}
}finally{
"touch"everypropertysotheyarealltrackedas
dependenciesfordeepwatching
if(this.deep){
traverse(value);
}
popTarget();
this.cleanupDeps();
}
returnvalue
};

/**
*Addadependencytothisdirective.
*/
Watcher.prototype.addDep=functionaddDep(dep){
varid=dep.id;
if(!this.newDepIds.has(id)){
this.newDepIds.add(id);
this.newDeps.push(dep);
if(!this.depIds.has(id)){
dep.addSub(this);
}
}
};

/**
*Cleanupfordependencycollection.
*/
Watcher.prototype.cleanupDeps=functioncleanupDeps(){
varthis$1=this;

vari=this.deps.length;
while(i--){
vardep=this$1.deps[i];
if(!this$1.newDepIds.has(dep.id)){
dep.removeSub(this$1);
}
}
vartmp=this.depIds;
this.depIds=this.newDepIds;
this.newDepIds=tmp;
this.newDepIds.clear();
tmp=this.deps;
this.deps=this.newDeps;
this.newDeps=tmp;
this.newDeps.length=0;
};

/**
*Subscriberinterface.
*Willbecalledwhenadependencychanges.
*/
Watcher.prototype.update=functionupdate(){
/*istanbulignoreelse*/
if(this.lazy){
this.dirty=true;
}elseif(this.sync){
this.run();
}else{
queueWatcher(this);
}
};

/**
*Schedulerjobinterface.
*Willbecalledbythescheduler.
*/
Watcher.prototype.run=functionrun(){
if(this.active){
varvalue=this.get();
if(
value!==this.value||
DeepwatchersandwatchersonObject/Arraysshouldfireeven
whenthevalueisthesame,becausethevaluemay
havemutated.
isObject(value)||
this.deep
){
setnewvalue
varoldValue=this.value;
this.value=value;
if(this.user){
try{
this.cb.call(this.vm,value,oldValue);
}catch(e){
handleError(e,this.vm,("callbackforwatcher\""+(this.expression)+"\""));
}
}else{
this.cb.call(this.vm,value,oldValue);
}
}
}
};

/**
*Evaluatethevalueofthewatcher.
*Thisonlygetscalledforlazywatchers.
*/
Watcher.prototype.evaluate=functionevaluate(){
this.value=this.get();
this.dirty=false;
};

/**
*Dependonalldepscollectedbythiswatcher.
*/
Watcher.prototype.depend=functiondepend(){
varthis$1=this;

vari=this.deps.length;
while(i--){
this$1.deps[i].depend();
}
};

/**
*Removeselffromalldependencies'subscriberlist.
*/
Watcher.prototype.teardown=functionteardown(){
varthis$1=this;

if(this.active){
removeselffromvm'swatcherlist
thisisasomewhatexpensiveoperationsoweskipit
ifthevmisbeingdestroyed.
if(!this.vm._isBeingDestroyed){
remove(this.vm._watchers,this);
}
vari=this.deps.length;
while(i--){
this$1.deps[i].removeSub(this$1);
}
this.active=false;
}
};

/**
*Recursivelytraverseanobjecttoevokeallconverted
*getters,sothateverynestedpropertyinsidetheobject
*iscollectedasa"deep"dependency.
*/
varseenObjects=new_Set();
functiontraverse(val){
seenObjects.clear();
_traverse(val,seenObjects);
}

function_traverse(val,seen){
vari,keys;
varisA=Array.isArray(val);
if((!isA&&!isObject(val))||!Object.isExtensible(val)){
return
}
if(val.__ob__){
vardepId=val.__ob__.dep.id;
if(seen.has(depId)){
return
}
seen.add(depId);
}
if(isA){
i=val.length;
while(i--){_traverse(val[i],seen);}
}else{
keys=Object.keys(val);
i=keys.length;
while(i--){_traverse(val[keys[i]],seen);}
}
}

/**/

varsharedPropertyDefinition={
enumerable:true,
configurable:true,
get:noop,
set:noop
};

functionproxy(target,sourceKey,key){
sharedPropertyDefinition.get=functionproxyGetter(){
returnthis[sourceKey][key]
};
sharedPropertyDefinition.set=functionproxySetter(val){
this[sourceKey][key]=val;
};
Object.defineProperty(target,key,sharedPropertyDefinition);
}

functioninitState(vm){
vm._watchers=[];
varopts=vm.$options;
if(opts.props){initProps(vm,opts.props);}
if(opts.methods){initMethods(vm,opts.methods);}
if(opts.data){
initData(vm);
}else{
observe(vm._data={},true/*asRootData*/);
}
if(opts.computed){initComputed(vm,opts.computed);}
if(opts.watch&&opts.watch!==nativeWatch){
initWatch(vm,opts.watch);
}
}

functioncheckOptionType(vm,name){
varoption=vm.$options[name];
if(!isPlainObject(option)){
warn(
("componentoption\""+name+"\"shouldbeanobject."),
vm
);
}
}

functioninitProps(vm,propsOptions){
varpropsData=vm.$options.propsData||{};
varprops=vm._props={};
cachepropkeyssothatfuturepropsupdatescaniterateusingArray
insteadofdynamicobjectkeyenumeration.
varkeys=vm.$options._propKeys=[];
varisRoot=!vm.$parent;
rootinstancepropsshouldbeconverted
observerState.shouldConvert=isRoot;
varloop=function(key){
keys.push(key);
varvalue=validateProp(key,propsOptions,propsData,vm);
/*istanbulignoreelse*/
{
if(isReservedAttribute(key)||config.isReservedAttr(key)){
warn(
("\""+key+"\"isareservedattributeandcannotbeusedascomponentprop."),
vm
);
}
defineReactive$$1(props,key,value,function(){
if(vm.$parent&&!isUpdatingChildComponent){
warn(
"Avoidmutatingapropdirectlysincethevaluewillbe"+
"overwrittenwhenevertheparentcomponentre-renders."+
"Instead,useadataorcomputedpropertybasedontheprop's"+
"value.Propbeingmutated:\""+key+"\"",
vm
);
}
});
}
staticpropsarealreadyproxiedonthecomponent'sprototype
duringVue.extend().Weonlyneedtoproxypropsdefinedat
instantiationhere.
if(!(keyinvm)){
proxy(vm,"_props",key);
}
};

for(varkeyinpropsOptions)loop(key);
observerState.shouldConvert=true;
}

functioninitData(vm){
vardata=vm.$options.data;
data=vm._data=typeofdata==='function'
?getData(data,vm)
:data||{};
if(!isPlainObject(data)){
data={};
"development"!=='production'&&warn(
'datafunctionsshouldreturnanobject:\n'+
'https:vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
vm
);
}
proxydataoninstance
varkeys=Object.keys(data);
varprops=vm.$options.props;
varmethods=vm.$options.methods;
vari=keys.length;
while(i--){
varkey=keys[i];
{
if(methods&&hasOwn(methods,key)){
warn(
("method\""+key+"\"hasalreadybeendefinedasadataproperty."),
vm
);
}
}
if(props&&hasOwn(props,key)){
"development"!=='production'&&warn(
"Thedataproperty\""+key+"\"isalreadydeclaredasaprop."+
"Usepropdefaultvalueinstead.",
vm
);
}elseif(!isReserved(key)){
proxy(vm,"_data",key);
}
}
observedata
observe(data,true/*asRootData*/);
}

functiongetData(data,vm){
try{
returndata.call(vm)
}catch(e){
handleError(e,vm,"data()");
return{}
}
}

varcomputedWatcherOptions={lazy:true};

functioninitComputed(vm,computed){
"development"!=='production'&&checkOptionType(vm,'computed');
varwatchers=vm._computedWatchers=Object.create(null);

for(varkeyincomputed){
varuserDef=computed[key];
vargetter=typeofuserDef==='function'?userDef:userDef.get;
if("development"!=='production'&&getter==null){
warn(
("Getterismissingforcomputedproperty\""+key+"\"."),
vm
);
}
createinternalwatcherforthecomputedproperty.
watchers[key]=newWatcher(vm,getter||noop,noop,computedWatcherOptions);

component-definedcomputedpropertiesarealreadydefinedonthe
componentprototype.Weonlyneedtodefinecomputedpropertiesdefined
atinstantiationhere.
if(!(keyinvm)){
defineComputed(vm,key,userDef);
}else{
if(keyinvm.$data){
warn(("Thecomputedproperty\""+key+"\"isalreadydefinedindata."),vm);
}elseif(vm.$options.props&&keyinvm.$options.props){
warn(("Thecomputedproperty\""+key+"\"isalreadydefinedasaprop."),vm);
}
}
}
}

functiondefineComputed(target,key,userDef){
if(typeofuserDef==='function'){
sharedPropertyDefinition.get=createComputedGetter(key);
sharedPropertyDefinition.set=noop;
}else{
sharedPropertyDefinition.get=userDef.get
?userDef.cache!==false
?createComputedGetter(key)
:userDef.get
:noop;
sharedPropertyDefinition.set=userDef.set
?userDef.set
:noop;
}
if("development"!=='production'&&
sharedPropertyDefinition.set===noop){
sharedPropertyDefinition.set=function(){
warn(
("Computedproperty\""+key+"\"wasassignedtobutithasnosetter."),
this
);
};
}
Object.defineProperty(target,key,sharedPropertyDefinition);
}

functioncreateComputedGetter(key){
returnfunctioncomputedGetter(){
varwatcher=this._computedWatchers&&this._computedWatchers[key];
if(watcher){
if(watcher.dirty){
watcher.evaluate();
}
if(Dep.target){
watcher.depend();
}
returnwatcher.value
}
}
}

functioninitMethods(vm,methods){
"development"!=='production'&&checkOptionType(vm,'methods');
varprops=vm.$options.props;
for(varkeyinmethods){
vm[key]=methods[key]==null?noop:bind(methods[key],vm);
{
if(methods[key]==null){
warn(
"method\""+key+"\"hasanundefinedvalueinthecomponentdefinition."+
"Didyoureferencethefunctioncorrectly?",
vm
);
}
if(props&&hasOwn(props,key)){
warn(
("method\""+key+"\"hasalreadybeendefinedasaprop."),
vm
);
}
}
}
}

functioninitWatch(vm,watch){
"development"!=='production'&&checkOptionType(vm,'watch');
for(varkeyinwatch){
varhandler=watch[key];
if(Array.isArray(handler)){
for(vari=0;i<handler.length;i++){
createWatcher(vm,key,handler[i]);
}
}else{
createWatcher(vm,key,handler);
}
}
}

functioncreateWatcher(
vm,
keyOrFn,
handler,
options
){
if(isPlainObject(handler)){
options=handler;
handler=handler.handler;
}
if(typeofhandler==='string'){
handler=vm[handler];
}
returnvm.$watch(keyOrFn,handler,options)
}

functionstateMixin(Vue){
flowsomehowhasproblemswithdirectlydeclareddefinitionobject
whenusingObject.defineProperty,sowehavetoprocedurallybuildup
theobjecthere.
vardataDef={};
dataDef.get=function(){returnthis._data};
varpropsDef={};
propsDef.get=function(){returnthis._props};
{
dataDef.set=function(newData){
warn(
'Avoidreplacinginstanceroot$data.'+
'Usenesteddatapropertiesinstead.',
this
);
};
propsDef.set=function(){
warn("$propsisreadonly.",this);
};
}
Object.defineProperty(Vue.prototype,'$data',dataDef);
Object.defineProperty(Vue.prototype,'$props',propsDef);

Vue.prototype.$set=set;
Vue.prototype.$delete=del;

Vue.prototype.$watch=function(
expOrFn,
cb,
options
){
varvm=this;
if(isPlainObject(cb)){
returncreateWatcher(vm,expOrFn,cb,options)
}
options=options||{};
options.user=true;
varwatcher=newWatcher(vm,expOrFn,cb,options);
if(options.immediate){
cb.call(vm,watcher.value);
}
returnfunctionunwatchFn(){
watcher.teardown();
}
};
}

/**/

functioninitProvide(vm){
varprovide=vm.$options.provide;
if(provide){
vm._provided=typeofprovide==='function'
?provide.call(vm)
:provide;
}
}

functioninitInjections(vm){
varresult=resolveInject(vm.$options.inject,vm);
if(result){
observerState.shouldConvert=false;
Object.keys(result).forEach(function(key){
/*istanbulignoreelse*/
{
defineReactive$$1(vm,key,result[key],function(){
warn(
"Avoidmutatinganinjectedvaluedirectlysincethechangeswillbe"+
"overwrittenwhenevertheprovidedcomponentre-renders."+
"injectionbeingmutated:\""+key+"\"",
vm
);
});
}
});
observerState.shouldConvert=true;
}
}

functionresolveInject(inject,vm){
if(inject){
injectis:anybecauseflowisnotsmartenoughtofigureoutcached
varresult=Object.create(null);
varkeys=hasSymbol
?Reflect.ownKeys(inject)
:Object.keys(inject);

for(vari=0;i<keys.length;i++){
varkey=keys[i];
varprovideKey=inject[key];
varsource=vm;
while(source){
if(source._provided&&provideKeyinsource._provided){
result[key]=source._provided[provideKey];
break
}
source=source.$parent;
}
if("development"!=='production'&&!source){
warn(("Injection\""+key+"\"notfound"),vm);
}
}
returnresult
}
}

/**/

functioncreateFunctionalComponent(
Ctor,
propsData,
data,
context,
children
){
varprops={};
varpropOptions=Ctor.options.props;
if(isDef(propOptions)){
for(varkeyinpropOptions){
props[key]=validateProp(key,propOptions,propsData||{});
}
}else{
if(isDef(data.attrs)){mergeProps(props,data.attrs);}
if(isDef(data.props)){mergeProps(props,data.props);}
}
ensurethecreateElementfunctioninfunctionalcomponents
getsauniquecontext-thisisnecessaryforcorrectnamedslotcheck
var_context=Object.create(context);
varh=function(a,b,c,d){returncreateElement(_context,a,b,c,d,true);};
varvnode=Ctor.options.render.call(null,h,{
data:data,
props:props,
children:children,
parent:context,
listeners:data.on||{},
injections:resolveInject(Ctor.options.inject,context),
slots:function(){returnresolveSlots(children,context);}
});
if(vnodeinstanceofVNode){
vnode.functionalContext=context;
vnode.functionalOptions=Ctor.options;
if(data.slot){
(vnode.data||(vnode.data={})).slot=data.slot;
}
}
returnvnode
}

functionmergeProps(to,from){
for(varkeyinfrom){
to[camelize(key)]=from[key];
}
}

/**/

hookstobeinvokedoncomponentVNodesduringpatch
varcomponentVNodeHooks={
init:functioninit(
vnode,
hydrating,
parentElm,
refElm
){
if(!vnode.componentInstance||vnode.componentInstance._isDestroyed){
varchild=vnode.componentInstance=createComponentInstanceForVnode(
vnode,
activeInstance,
parentElm,
refElm
);
child.$mount(hydrating?vnode.elm:undefined,hydrating);
}elseif(vnode.data.keepAlive){
kept-alivecomponents,treatasapatch
varmountedNode=vnode;workaroundflow
componentVNodeHooks.prepatch(mountedNode,mountedNode);
}
},

prepatch:functionprepatch(oldVnode,vnode){
varoptions=vnode.componentOptions;
varchild=vnode.componentInstance=oldVnode.componentInstance;
updateChildComponent(
child,
options.propsData,updatedprops
options.listeners,updatedlisteners
vnode,newparentvnode
options.childrennewchildren
);
},

insert:functioninsert(vnode){
varcontext=vnode.context;
varcomponentInstance=vnode.componentInstance;
if(!componentInstance._isMounted){
componentInstance._isMounted=true;
callHook(componentInstance,'mounted');
}
if(vnode.data.keepAlive){
if(context._isMounted){
vue-router#1212
Duringupdates,akept-alivecomponent'schildcomponentsmay
change,sodirectlywalkingthetreeheremaycallactivatedhooks
onincorrectchildren.Insteadwepushthemintoaqueuewhichwill
beprocessedafterthewholepatchprocessended.
queueActivatedComponent(componentInstance);
}else{
activateChildComponent(componentInstance,true/*direct*/);
}
}
},

destroy:functiondestroy(vnode){
varcomponentInstance=vnode.componentInstance;
if(!componentInstance._isDestroyed){
if(!vnode.data.keepAlive){
componentInstance.$destroy();
}else{
deactivateChildComponent(componentInstance,true/*direct*/);
}
}
}
};

varhooksToMerge=Object.keys(componentVNodeHooks);

functioncreateComponent(
Ctor,
data,
context,
children,
tag
){
if(isUndef(Ctor)){
return
}

varbaseCtor=context.$options._base;

plainoptionsobject:turnitintoaconstructor
if(isObject(Ctor)){
Ctor=baseCtor.extend(Ctor);
}

ifatthisstageit'snotaconstructororanasynccomponentfactory,
reject.
if(typeofCtor!=='function'){
{
warn(("InvalidComponentdefinition:"+(String(Ctor))),context);
}
return
}

asynccomponent
varasyncFactory;
if(isUndef(Ctor.cid)){
asyncFactory=Ctor;
Ctor=resolveAsyncComponent(asyncFactory,baseCtor,context);
if(Ctor===undefined){
returnaplaceholdernodeforasynccomponent,whichisrendered
asacommentnodebutpreservesalltherawinformationforthenode.
theinformationwillbeusedforasyncserver-renderingandhydration.
returncreateAsyncPlaceholder(
asyncFactory,
data,
context,
children,
tag
)
}
}

data=data||{};

resolveconstructoroptionsincaseglobalmixinsareappliedafter
componentconstructorcreation
resolveConstructorOptions(Ctor);

transformcomponentv-modeldataintoprops&events
if(isDef(data.model)){
transformModel(Ctor.options,data);
}

extractprops
varpropsData=extractPropsFromVNodeData(data,Ctor,tag);

functionalcomponent
if(isTrue(Ctor.options.functional)){
returncreateFunctionalComponent(Ctor,propsData,data,context,children)
}

extractlisteners,sincetheseneedstobetreatedas
childcomponentlistenersinsteadofDOMlisteners
varlisteners=data.on;
replacewithlistenerswith.nativemodifier
soitgetsprocessedduringparentcomponentpatch.
data.on=data.nativeOn;

if(isTrue(Ctor.options.abstract)){
abstractcomponentsdonotkeepanything
otherthanprops&listeners&slot

workaroundflow
varslot=data.slot;
data={};
if(slot){
data.slot=slot;
}
}

mergecomponentmanagementhooksontotheplaceholdernode
mergeHooks(data);

returnaplaceholdervnode
varname=Ctor.options.name||tag;
varvnode=newVNode(
("vue-component-"+(Ctor.cid)+(name?("-"+name):'')),
data,undefined,undefined,undefined,context,
{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},
asyncFactory
);
returnvnode
}

functioncreateComponentInstanceForVnode(
vnode,weknowit'sMountedComponentVNodebutflowdoesn't
parent,activeInstanceinlifecyclestate
parentElm,
refElm
){
varvnodeComponentOptions=vnode.componentOptions;
varoptions={
_isComponent:true,
parent:parent,
propsData:vnodeComponentOptions.propsData,
_componentTag:vnodeComponentOptions.tag,
_parentVnode:vnode,
_parentListeners:vnodeComponentOptions.listeners,
_renderChildren:vnodeComponentOptions.children,
_parentElm:parentElm||null,
_refElm:refElm||null
};
checkinline-templaterenderfunctions
varinlineTemplate=vnode.data.inlineTemplate;
if(isDef(inlineTemplate)){
options.render=inlineTemplate.render;
options.staticRenderFns=inlineTemplate.staticRenderFns;
}
returnnewvnodeComponentOptions.Ctor(options)
}

functionmergeHooks(data){
if(!data.hook){
data.hook={};
}
for(vari=0;i<hooksToMerge.length;i++){
varkey=hooksToMerge[i];
varfromParent=data.hook[key];
varours=componentVNodeHooks[key];
data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;
}
}

functionmergeHook$1(one,two){
returnfunction(a,b,c,d){
one(a,b,c,d);
two(a,b,c,d);
}
}

transformcomponentv-modelinfo(valueandcallback)into
propandeventhandlerrespectively.
functiontransformModel(options,data){
varprop=(options.model&&options.model.prop)||'value';
varevent=(options.model&&options.model.event)||'input';(data.props||(data.props={}))[prop]=data.model.value;
varon=data.on||(data.on={});
if(isDef(on[event])){
on[event]=[data.model.callback].concat(on[event]);
}else{
on[event]=data.model.callback;
}
}

/**/

varSIMPLE_NORMALIZE=1;
varALWAYS_NORMALIZE=2;

wrapperfunctionforprovidingamoreflexibleinterface
withoutgettingyelledatbyflow
functioncreateElement(
context,
tag,
data,
children,
normalizationType,
alwaysNormalize
){
if(Array.isArray(data)||isPrimitive(data)){
normalizationType=children;
children=data;
data=undefined;
}
if(isTrue(alwaysNormalize)){
normalizationType=ALWAYS_NORMALIZE;
}
return_createElement(context,tag,data,children,normalizationType)
}

function_createElement(
context,
tag,
data,
children,
normalizationType
){
if(isDef(data)&&isDef((data).__ob__)){
"development"!=='production'&&warn(
"Avoidusingobserveddataobjectasvnodedata:"+(JSON.stringify(data))+"\n"+
'Alwayscreatefreshvnodedataobjectsineachrender!',
context
);
returncreateEmptyVNode()
}
objectsyntaxinv-bind
if(isDef(data)&&isDef(data.is)){
tag=data.is;
}
if(!tag){
incaseofcomponent:issettofalsyvalue
returncreateEmptyVNode()
}
warnagainstnon-primitivekey
if("development"!=='production'&&
isDef(data)&&isDef(data.key)&&!isPrimitive(data.key)
){
warn(
'Avoidusingnon-primitivevalueaskey,'+
'usestring/numbervalueinstead.',
context
);
}
supportsinglefunctionchildrenasdefaultscopedslot
if(Array.isArray(children)&&
typeofchildren[0]==='function'
){
data=data||{};
data.scopedSlots={default:children[0]};
children.length=0;
}
if(normalizationType===ALWAYS_NORMALIZE){
children=normalizeChildren(children);
}elseif(normalizationType===SIMPLE_NORMALIZE){
children=simpleNormalizeChildren(children);
}
varvnode,ns;
if(typeoftag==='string'){
varCtor;
ns=config.getTagNamespace(tag);
if(config.isReservedTag(tag)){
platformbuilt-inelements
vnode=newVNode(
config.parsePlatformTagName(tag),data,children,
undefined,undefined,context
);
}elseif(isDef(Ctor=resolveAsset(context.$options,'components',tag))){
component
vnode=createComponent(Ctor,data,context,children,tag);
}else{
unknownorunlistednamespacedelements
checkatruntimebecauseitmaygetassignedanamespacewhenits
parentnormalizeschildren
vnode=newVNode(
tag,data,children,
undefined,undefined,context
);
}
}else{
directcomponentoptions/constructor
vnode=createComponent(tag,data,context,children);
}
if(isDef(vnode)){
if(ns){applyNS(vnode,ns);}
returnvnode
}else{
returncreateEmptyVNode()
}
}

functionapplyNS(vnode,ns){
vnode.ns=ns;
if(vnode.tag==='foreignObject'){
usedefaultnamespaceinsideforeignObject
return
}
if(isDef(vnode.children)){
for(vari=0,l=vnode.children.length;i<l;i++){
varchild=vnode.children[i];
if(isDef(child.tag)&&isUndef(child.ns)){
applyNS(child,ns);
}
}
}
}

/**/

/**
*Runtimehelperforrenderingv-forlists.
*/
functionrenderList(
val,
render
){
varret,i,l,keys,key;
if(Array.isArray(val)||typeofval==='string'){
ret=newArray(val.length);
for(i=0,l=val.length;i<l;i++){
ret[i]=render(val[i],i);
}
}elseif(typeofval==='number'){
ret=newArray(val);
for(i=0;i<val;i++){
ret[i]=render(i+1,i);
}
}elseif(isObject(val)){
keys=Object.keys(val);
ret=newArray(keys.length);
for(i=0,l=keys.length;i<l;i++){
key=keys[i];
ret[i]=render(val[key],key,i);
}
}
if(isDef(ret)){
(ret)._isVList=true;
}
returnret
}

/**/

/**
*Runtimehelperforrendering<slot>
*/
functionrenderSlot(
name,
fallback,
props,
bindObject
){
varscopedSlotFn=this.$scopedSlots[name];
if(scopedSlotFn){scopedslot
props=props||{};
if(bindObject){
props=extend(extend({},bindObject),props);
}
returnscopedSlotFn(props)||fallback
}else{
varslotNodes=this.$slots[name];
warnduplicateslotusage
if(slotNodes&&"development"!=='production'){
slotNodes._rendered&&warn(
"Duplicatepresenceofslot\""+name+"\"foundinthesamerendertree"+
"-thiswilllikelycauserendererrors.",
this
);
slotNodes._rendered=true;
}
returnslotNodes||fallback
}
}

/**/

/**
*Runtimehelperforresolvingfilters
*/
functionresolveFilter(id){
returnresolveAsset(this.$options,'filters',id,true)||identity
}

/**/

/**
*RuntimehelperforcheckingkeyCodesfromconfig.
*/
functioncheckKeyCodes(
eventKeyCode,
key,
builtInAlias
){
varkeyCodes=config.keyCodes[key]||builtInAlias;
if(Array.isArray(keyCodes)){
returnkeyCodes.indexOf(eventKeyCode)===-1
}else{
returnkeyCodes!==eventKeyCode
}
}

/**/

/**
*Runtimehelperformergingv-bind="object"intoaVNode'sdata.
*/
functionbindObjectProps(
data,
tag,
value,
asProp,
isSync
){
if(value){
if(!isObject(value)){
"development"!=='production'&&warn(
'v-bindwithoutargumentexpectsanObjectorArrayvalue',
this
);
}else{
if(Array.isArray(value)){
value=toObject(value);
}
varhash;
varloop=function(key){
if(
key==='class'||
key==='style'||
isReservedAttribute(key)
){
hash=data;
}else{
vartype=data.attrs&&data.attrs.type;
hash=asProp||config.mustUseProp(tag,type,key)
?data.domProps||(data.domProps={})
:data.attrs||(data.attrs={});
}
if(!(keyinhash)){
hash[key]=value[key];

if(isSync){
varon=data.on||(data.on={});
on[("update:"+key)]=function($event){
value[key]=$event;
};
}
}
};

for(varkeyinvalue)loop(key);
}
}
returndata
}

/**/

/**
*Runtimehelperforrenderingstatictrees.
*/
functionrenderStatic(
index,
isInFor
){
vartree=this._staticTrees[index];
ifhasalready-renderedstatictreeandnotinsidev-for,
wecanreusethesametreebydoingashallowclone.
if(tree&&!isInFor){
returnArray.isArray(tree)
?cloneVNodes(tree)
:cloneVNode(tree)
}
otherwise,renderafreshtree.
tree=this._staticTrees[index]=
this.$options.staticRenderFns[index].call(this._renderProxy);
markStatic(tree,("__static__"+index),false);
returntree
}

/**
*Runtimehelperforv-once.
*Effectivelyitmeansmarkingthenodeasstaticwithauniquekey.
*/
functionmarkOnce(
tree,
index,
key
){
markStatic(tree,("__once__"+index+(key?("_"+key):"")),true);
returntree
}

functionmarkStatic(
tree,
key,
isOnce
){
if(Array.isArray(tree)){
for(vari=0;i<tree.length;i++){
if(tree[i]&&typeoftree[i]!=='string'){
markStaticNode(tree[i],(key+"_"+i),isOnce);
}
}
}else{
markStaticNode(tree,key,isOnce);
}
}

functionmarkStaticNode(node,key,isOnce){
node.isStatic=true;
node.key=key;
node.isOnce=isOnce;
}

/**/

functionbindObjectListeners(data,value){
if(value){
if(!isPlainObject(value)){
"development"!=='production'&&warn(
'v-onwithoutargumentexpectsanObjectvalue',
this
);
}else{
varon=data.on=data.on?extend({},data.on):{};
for(varkeyinvalue){
varexisting=on[key];
varours=value[key];
on[key]=existing?[].concat(ours,existing):ours;
}
}
}
returndata
}

/**/

functioninitRender(vm){
vm._vnode=null;therootofthechildtree
vm._staticTrees=null;
varparentVnode=vm.$vnode=vm.$options._parentVnode;theplaceholdernodeinparenttree
varrenderContext=parentVnode&&parentVnode.context;
vm.$slots=resolveSlots(vm.$options._renderChildren,renderContext);
vm.$scopedSlots=emptyObject;
bindthecreateElementfntothisinstance
sothatwegetproperrendercontextinsideit.
argsorder:tag,data,children,normalizationType,alwaysNormalize
internalversionisusedbyrenderfunctionscompiledfromtemplates
vm._c=function(a,b,c,d){returncreateElement(vm,a,b,c,d,false);};
normalizationisalwaysappliedforthepublicversion,usedin
user-writtenrenderfunctions.
vm.$createElement=function(a,b,c,d){returncreateElement(vm,a,b,c,d,true);};

$attrs&$listenersareexposedforeasierHOCcreation.
theyneedtobereactivesothatHOCsusingthemarealwaysupdated
varparentData=parentVnode&&parentVnode.data;
/*istanbulignoreelse*/
{
defineReactive$$1(vm,'$attrs',parentData&&parentData.attrs,function(){
!isUpdatingChildComponent&&warn("$attrsisreadonly.",vm);
},true);
defineReactive$$1(vm,'$listeners',vm.$options._parentListeners,function(){
!isUpdatingChildComponent&&warn("$listenersisreadonly.",vm);
},true);
}
}

functionrenderMixin(Vue){
Vue.prototype.$nextTick=function(fn){
returnnextTick(fn,this)
};

Vue.prototype._render=function(){
varvm=this;
varref=vm.$options;
varrender=ref.render;
varstaticRenderFns=ref.staticRenderFns;
var_parentVnode=ref._parentVnode;

if(vm._isMounted){
cloneslotnodesonre-renders
for(varkeyinvm.$slots){
vm.$slots[key]=cloneVNodes(vm.$slots[key]);
}
}

vm.$scopedSlots=(_parentVnode&&_parentVnode.data.scopedSlots)||emptyObject;

if(staticRenderFns&&!vm._staticTrees){
vm._staticTrees=[];
}
setparentvnode.thisallowsrenderfunctionstohaveaccess
tothedataontheplaceholdernode.
vm.$vnode=_parentVnode;
renderself
varvnode;
try{
vnode=render.call(vm._renderProxy,vm.$createElement);
}catch(e){
handleError(e,vm,"renderfunction");
returnerrorrenderresult,
orpreviousvnodetopreventrendererrorcausingblankcomponent
/*istanbulignoreelse*/
{
vnode=vm.$options.renderError
?vm.$options.renderError.call(vm._renderProxy,vm.$createElement,e)
:vm._vnode;
}
}
returnemptyvnodeincasetherenderfunctionerroredout
if(!(vnodeinstanceofVNode)){
if("development"!=='production'&&Array.isArray(vnode)){
warn(
'Multiplerootnodesreturnedfromrenderfunction.Renderfunction'+
'shouldreturnasinglerootnode.',
vm
);
}
vnode=createEmptyVNode();
}
setparent
vnode.parent=_parentVnode;
returnvnode
};

internalrenderhelpers.
theseareexposedontheinstanceprototypetoreducegeneratedrender
codesize.
Vue.prototype._o=markOnce;
Vue.prototype._n=toNumber;
Vue.prototype._s=toString;
Vue.prototype._l=renderList;
Vue.prototype._t=renderSlot;
Vue.prototype._q=looseEqual;
Vue.prototype._i=looseIndexOf;
Vue.prototype._m=renderStatic;
Vue.prototype._f=resolveFilter;
Vue.prototype._k=checkKeyCodes;
Vue.prototype._b=bindObjectProps;
Vue.prototype._v=createTextVNode;
Vue.prototype._e=createEmptyVNode;
Vue.prototype._u=resolveScopedSlots;
Vue.prototype._g=bindObjectListeners;
}

/**/

varuid$1=0;

functioninitMixin(Vue){
Vue.prototype._init=function(options){
varvm=this;
auid
vm._uid=uid$1++;

varstartTag,endTag;
/*istanbulignoreif*/
if("development"!=='production'&&config.performance&&mark){
startTag="vue-perf-init:"+(vm._uid);
endTag="vue-perf-end:"+(vm._uid);
mark(startTag);
}

aflagtoavoidthisbeingobserved
vm._isVue=true;
mergeoptions
if(options&&options._isComponent){
optimizeinternalcomponentinstantiation
sincedynamicoptionsmergingisprettyslow,andnoneofthe
internalcomponentoptionsneedsspecialtreatment.
initInternalComponent(vm,options);
}else{
vm.$options=mergeOptions(
resolveConstructorOptions(vm.constructor),
options||{},
vm
);
}
/*istanbulignoreelse*/
{
initProxy(vm);
}
exposerealself
vm._self=vm;
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm,'beforeCreate');
initInjections(vm);resolveinjectionsbeforedata/props
initState(vm);
initProvide(vm);resolveprovideafterdata/props
callHook(vm,'created');

/*istanbulignoreif*/
if("development"!=='production'&&config.performance&&mark){
vm._name=formatComponentName(vm,false);
mark(endTag);
measure(((vm._name)+"init"),startTag,endTag);
}

if(vm.$options.el){
vm.$mount(vm.$options.el);
}
};
}

functioninitInternalComponent(vm,options){
varopts=vm.$options=Object.create(vm.constructor.options);
doingthisbecauseit'sfasterthandynamicenumeration.
opts.parent=options.parent;
opts.propsData=options.propsData;
opts._parentVnode=options._parentVnode;
opts._parentListeners=options._parentListeners;
opts._renderChildren=options._renderChildren;
opts._componentTag=options._componentTag;
opts._parentElm=options._parentElm;
opts._refElm=options._refElm;
if(options.render){
opts.render=options.render;
opts.staticRenderFns=options.staticRenderFns;
}
}

functionresolveConstructorOptions(Ctor){
varoptions=Ctor.options;
if(Ctor.super){
varsuperOptions=resolveConstructorOptions(Ctor.super);
varcachedSuperOptions=Ctor.superOptions;
if(superOptions!==cachedSuperOptions){
superoptionchanged,
needtoresolvenewoptions.
Ctor.superOptions=superOptions;
checkifthereareanylate-modified/attachedoptions(#4976)
varmodifiedOptions=resolveModifiedOptions(Ctor);
updatebaseextendoptions
if(modifiedOptions){
extend(Ctor.extendOptions,modifiedOptions);
}
options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);
if(options.name){
options.components[options.name]=Ctor;
}
}
}
returnoptions
}

functionresolveModifiedOptions(Ctor){
varmodified;
varlatest=Ctor.options;
varextended=Ctor.extendOptions;
varsealed=Ctor.sealedOptions;
for(varkeyinlatest){
if(latest[key]!==sealed[key]){
if(!modified){modified={};}
modified[key]=dedupe(latest[key],extended[key],sealed[key]);
}
}
returnmodified
}

functiondedupe(latest,extended,sealed){
comparelatestandsealedtoensurelifecyclehookswon'tbeduplicated
betweenmerges
if(Array.isArray(latest)){
varres=[];
sealed=Array.isArray(sealed)?sealed:[sealed];
extended=Array.isArray(extended)?extended:[extended];
for(vari=0;i<latest.length;i++){
pushoriginaloptionsandnotsealedoptionstoexcludeduplicatedoptions
if(extended.indexOf(latest[i])>=0||sealed.indexOf(latest[i])<0){
res.push(latest[i]);
}
}
returnres
}else{
returnlatest
}
}

functionVue$3(options){
if("development"!=='production'&&
!(thisinstanceofVue$3)
){
warn('Vueisaconstructorandshouldbecalledwiththe`new`keyword');
}
this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/**/

functioninitUse(Vue){
Vue.use=function(plugin){
varinstalledPlugins=(this._installedPlugins||(this._installedPlugins=[]));
if(installedPlugins.indexOf(plugin)>-1){
returnthis
}

additionalparameters
varargs=toArray(arguments,1);
args.unshift(this);
if(typeofplugin.install==='function'){
plugin.install.apply(plugin,args);
}elseif(typeofplugin==='function'){
plugin.apply(null,args);
}
installedPlugins.push(plugin);
returnthis
};
}

/**/

functioninitMixin$1(Vue){
Vue.mixin=function(mixin){
this.options=mergeOptions(this.options,mixin);
returnthis
};
}

/**/

functioninitExtend(Vue){
/**
*Eachinstanceconstructor,includingVue,hasaunique
*cid.Thisenablesustocreatewrapped"child
*constructors"forprototypalinheritanceandcachethem.
*/
Vue.cid=0;
varcid=1;

/**
*Classinheritance
*/
Vue.extend=function(extendOptions){
extendOptions=extendOptions||{};
varSuper=this;
varSuperId=Super.cid;
varcachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});
if(cachedCtors[SuperId]){
returncachedCtors[SuperId]
}

varname=extendOptions.name||Super.options.name;
{
if(!/^[a-zA-Z][\w-]*$/.test(name)){
warn(
'Invalidcomponentname:"'+name+'".Componentnames'+
'canonlycontainalphanumericcharactersandthehyphen,'+
'andmuststartwithaletter.'
);
}
}

varSub=functionVueComponent(options){
this._init(options);
};
Sub.prototype=Object.create(Super.prototype);
Sub.prototype.constructor=Sub;
Sub.cid=cid++;
Sub.options=mergeOptions(
Super.options,
extendOptions
);
Sub['super']=Super;

Forpropsandcomputedproperties,wedefinetheproxygetterson
theVueinstancesatextensiontime,ontheextendedprototype.This
avoidsObject.definePropertycallsforeachinstancecreated.
if(Sub.options.props){
initProps$1(Sub);
}
if(Sub.options.computed){
initComputed$1(Sub);
}

allowfurtherextension/mixin/pluginusage
Sub.extend=Super.extend;
Sub.mixin=Super.mixin;
Sub.use=Super.use;

createassetregisters,soextendedclasses
canhavetheirprivateassetstoo.
ASSET_TYPES.forEach(function(type){
Sub[type]=Super[type];
});
enablerecursiveself-lookup
if(name){
Sub.options.components[name]=Sub;
}

keepareferencetothesuperoptionsatextensiontime.
lateratinstantiationwecancheckifSuper'soptionshave
beenupdated.
Sub.superOptions=Super.options;
Sub.extendOptions=extendOptions;
Sub.sealedOptions=extend({},Sub.options);

cacheconstructor
cachedCtors[SuperId]=Sub;
returnSub
};
}

functioninitProps$1(Comp){
varprops=Comp.options.props;
for(varkeyinprops){
proxy(Comp.prototype,"_props",key);
}
}

functioninitComputed$1(Comp){
varcomputed=Comp.options.computed;
for(varkeyincomputed){
defineComputed(Comp.prototype,key,computed[key]);
}
}

/**/

functioninitAssetRegisters(Vue){
/**
*Createassetregistrationmethods.
*/
ASSET_TYPES.forEach(function(type){
Vue[type]=function(
id,
definition
){
if(!definition){
returnthis.options[type+'s'][id]
}else{
/*istanbulignoreif*/
{
if(type==='component'&&config.isReservedTag(id)){
warn(
'Donotusebuilt-inorreservedHTMLelementsascomponent'+
'id:'+id
);
}
}
if(type==='component'&&isPlainObject(definition)){
definition.name=definition.name||id;
definition=this.options._base.extend(definition);
}
if(type==='directive'&&typeofdefinition==='function'){
definition={bind:definition,update:definition};
}
this.options[type+'s'][id]=definition;
returndefinition
}
};
});
}

/**/

varpatternTypes=[String,RegExp,Array];

functiongetComponentName(opts){
returnopts&&(opts.Ctor.options.name||opts.tag)
}

functionmatches(pattern,name){
if(Array.isArray(pattern)){
returnpattern.indexOf(name)>-1
}elseif(typeofpattern==='string'){
returnpattern.split(',').indexOf(name)>-1
}elseif(isRegExp(pattern)){
returnpattern.test(name)
}
/*istanbulignorenext*/
returnfalse
}

functionpruneCache(cache,current,filter){
for(varkeyincache){
varcachedNode=cache[key];
if(cachedNode){
varname=getComponentName(cachedNode.componentOptions);
if(name&&!filter(name)){
if(cachedNode!==current){
pruneCacheEntry(cachedNode);
}
cache[key]=null;
}
}
}
}

functionpruneCacheEntry(vnode){
if(vnode){
vnode.componentInstance.$destroy();
}
}

varKeepAlive={
name:'keep-alive',
abstract:true,

props:{
include:patternTypes,
exclude:patternTypes
},

created:functioncreated(){
this.cache=Object.create(null);
},

destroyed:functiondestroyed(){
varthis$1=this;

for(varkeyinthis$1.cache){
pruneCacheEntry(this$1.cache[key]);
}
},

watch:{
include:functioninclude(val){
pruneCache(this.cache,this._vnode,function(name){returnmatches(val,name);});
},
exclude:functionexclude(val){
pruneCache(this.cache,this._vnode,function(name){return!matches(val,name);});
}
},

render:functionrender(){
varvnode=getFirstComponentChild(this.$slots.default);
varcomponentOptions=vnode&&vnode.componentOptions;
if(componentOptions){
checkpattern
varname=getComponentName(componentOptions);
if(name&&(
(this.include&&!matches(this.include,name))||
(this.exclude&&matches(this.exclude,name))
)){
returnvnode
}
varkey=vnode.key==null
sameconstructormaygetregisteredasdifferentlocalcomponents
socidaloneisnotenough(#3269)
?componentOptions.Ctor.cid+(componentOptions.tag?("::"+(componentOptions.tag)):'')
:vnode.key;
if(this.cache[key]){
vnode.componentInstance=this.cache[key].componentInstance;
}else{
this.cache[key]=vnode;
}
vnode.data.keepAlive=true;
}
returnvnode
}
};

varbuiltInComponents={
KeepAlive:KeepAlive
};

/**/

functioninitGlobalAPI(Vue){
config
varconfigDef={};
configDef.get=function(){returnconfig;};
{
configDef.set=function(){
warn(
'DonotreplacetheVue.configobject,setindividualfieldsinstead.'
);
};
}
Object.defineProperty(Vue,'config',configDef);

exposedutilmethods.
NOTE:thesearenotconsideredpartofthepublicAPI-avoidrelyingon
themunlessyouareawareoftherisk.
Vue.util={
warn:warn,
extend:extend,
mergeOptions:mergeOptions,
defineReactive:defineReactive$$1
};

Vue.set=set;
Vue.delete=del;
Vue.nextTick=nextTick;

Vue.options=Object.create(null);
ASSET_TYPES.forEach(function(type){
Vue.options[type+'s']=Object.create(null);
});

thisisusedtoidentifythe"base"constructortoextendallplain-object
componentswithinWeex'smulti-instancescenarios.
Vue.options._base=Vue;

extend(Vue.options.components,builtInComponents);

initUse(Vue);
initMixin$1(Vue);
initExtend(Vue);
initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype,'$isServer',{
get:isServerRendering
});

Object.defineProperty(Vue$3.prototype,'$ssrContext',{
get:functionget(){
/*istanbulignorenext*/
returnthis.$vnode&&this.$vnode.ssrContext
}
});

Vue$3.version='2.4.2';

/**/

thesearereservedforwebbecausetheyaredirectlycompiledaway
duringtemplatecompilation
varisReservedAttr=makeMap('style,class');

attributesthatshouldbeusingpropsforbinding
varacceptValue=makeMap('input,textarea,option,select');
varmustUseProp=function(tag,type,attr){
return(
(attr==='value'&&acceptValue(tag))&&type!=='button'||
(attr==='selected'&&tag==='option')||
(attr==='checked'&&tag==='input')||
(attr==='muted'&&tag==='video')
)
};

varisEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');

varisBooleanAttr=makeMap(
'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+
'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+
'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+
'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+
'required,reversed,scoped,seamless,selected,sortable,translate,'+
'truespeed,typemustmatch,visible'
);

varxlinkNS='http:www.w3.org/1999/xlink';

varisXlink=function(name){
returnname.charAt(5)===':'&&name.slice(0,5)==='xlink'
};

vargetXlinkProp=function(name){
returnisXlink(name)?name.slice(6,name.length):''
};

varisFalsyAttrValue=function(val){
returnval==null||val===false
};

/**/

functiongenClassForVnode(vnode){
vardata=vnode.data;
varparentNode=vnode;
varchildNode=vnode;
while(isDef(childNode.componentInstance)){
childNode=childNode.componentInstance._vnode;
if(childNode.data){
data=mergeClassData(childNode.data,data);
}
}
while(isDef(parentNode=parentNode.parent)){
if(parentNode.data){
data=mergeClassData(data,parentNode.data);
}
}
returnrenderClass(data.staticClass,data.class)
}

functionmergeClassData(child,parent){
return{
staticClass:concat(child.staticClass,parent.staticClass),
class:isDef(child.class)
?[child.class,parent.class]
:parent.class
}
}

functionrenderClass(
staticClass,
dynamicClass
){
if(isDef(staticClass)||isDef(dynamicClass)){
returnconcat(staticClass,stringifyClass(dynamicClass))
}
/*istanbulignorenext*/
return''
}

functionconcat(a,b){
returna?b?(a+''+b):a:(b||'')
}

functionstringifyClass(value){
if(Array.isArray(value)){
returnstringifyArray(value)
}
if(isObject(value)){
returnstringifyObject(value)
}
if(typeofvalue==='string'){
returnvalue
}
/*istanbulignorenext*/
return''
}

functionstringifyArray(value){
varres='';
varstringified;
for(vari=0,l=value.length;i<l;i++){
if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){
if(res){res+='';}
res+=stringified;
}
}
returnres
}

functionstringifyObject(value){
varres='';
for(varkeyinvalue){
if(value[key]){
if(res){res+='';}
res+=key;
}
}
returnres
}

/**/

varnamespaceMap={
svg:'http:www.w3.org/2000/svg',
math:'http:www.w3.org/1998/Math/MathML'
};

varisHTMLTag=makeMap(
'html,body,base,head,link,meta,style,title,'+
'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+
'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+
'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+
's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+
'embed,object,param,source,canvas,script,noscript,del,ins,'+
'caption,col,colgroup,table,thead,tbody,td,th,tr,'+
'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+
'output,progress,select,textarea,'+
'details,dialog,menu,menuitem,summary,'+
'content,element,shadow,template,blockquote,iframe,tfoot'
);

thismapisintentionallyselective,onlycoveringSVGelementsthatmay
containchildelements.
varisSVG=makeMap(
'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+
'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+
'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
true
);

varisPreTag=function(tag){returntag==='pre';};

varisReservedTag=function(tag){
returnisHTMLTag(tag)||isSVG(tag)
};

functiongetTagNamespace(tag){
if(isSVG(tag)){
return'svg'
}
basicsupportforMathML
noteitdoesn'tsupportotherMathMLelementsbeingcomponentroots
if(tag==='math'){
return'math'
}
}

varunknownElementCache=Object.create(null);
functionisUnknownElement(tag){
/*istanbulignoreif*/
if(!inBrowser){
returntrue
}
if(isReservedTag(tag)){
returnfalse
}
tag=tag.toLowerCase();
/*istanbulignoreif*/
if(unknownElementCache[tag]!=null){
returnunknownElementCache[tag]
}
varel=document.createElement(tag);
if(tag.indexOf('-')>-1){
http:stackoverflow.com/a/28210364/1070244
return(unknownElementCache[tag]=(
el.constructor===window.HTMLUnknownElement||
el.constructor===window.HTMLElement
))
}else{
return(unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString()))
}
}

/**/

/**
*Queryanelementselectorifit'snotanelementalready.
*/
functionquery(el){
if(typeofel==='string'){
varselected=document.querySelector(el);
if(!selected){
"development"!=='production'&&warn(
'Cannotfindelement:'+el
);
returndocument.createElement('div')
}
returnselected
}else{
returnel
}
}

/**/

functioncreateElement$1(tagName,vnode){
varelm=document.createElement(tagName);
if(tagName!=='select'){
returnelm
}
falseornullwillremovetheattributebutundefinedwillnot
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){
elm.setAttribute('multiple','multiple');
}
returnelm
}

functioncreateElementNS(namespace,tagName){
returndocument.createElementNS(namespaceMap[namespace],tagName)
}

functioncreateTextNode(text){
returndocument.createTextNode(text)
}

functioncreateComment(text){
returndocument.createComment(text)
}

functioninsertBefore(parentNode,newNode,referenceNode){
parentNode.insertBefore(newNode,referenceNode);
}

functionremoveChild(node,child){
node.removeChild(child);
}

functionappendChild(node,child){
node.appendChild(child);
}

functionparentNode(node){
returnnode.parentNode
}

functionnextSibling(node){
returnnode.nextSibling
}

functiontagName(node){
returnnode.tagName
}

functionsetTextContent(node,text){
node.textContent=text;
}

functionsetAttribute(node,key,val){
node.setAttribute(key,val);
}


varnodeOps=Object.freeze({
	createElement:createElement$1,
	createElementNS:createElementNS,
	createTextNode:createTextNode,
	createComment:createComment,
	insertBefore:insertBefore,
	removeChild:removeChild,
	appendChild:appendChild,
	parentNode:parentNode,
	nextSibling:nextSibling,
	tagName:tagName,
	setTextContent:setTextContent,
	setAttribute:setAttribute
});

/**/

varref={
create:functioncreate(_,vnode){
registerRef(vnode);
},
update:functionupdate(oldVnode,vnode){
if(oldVnode.data.ref!==vnode.data.ref){
registerRef(oldVnode,true);
registerRef(vnode);
}
},
destroy:functiondestroy(vnode){
registerRef(vnode,true);
}
};

functionregisterRef(vnode,isRemoval){
varkey=vnode.data.ref;
if(!key){return}

varvm=vnode.context;
varref=vnode.componentInstance||vnode.elm;
varrefs=vm.$refs;
if(isRemoval){
if(Array.isArray(refs[key])){
remove(refs[key],ref);
}elseif(refs[key]===ref){
refs[key]=undefined;
}
}else{
if(vnode.data.refInFor){
if(!Array.isArray(refs[key])){
refs[key]=[ref];
}elseif(refs[key].indexOf(ref)<0){
$flow-disable-line
refs[key].push(ref);
}
}else{
refs[key]=ref;
}
}
}

/**
*VirtualDOMpatchingalgorithmbasedonSnabbdomby
*SimonFriisVindum(@paldepind)
*LicensedundertheMITLicense
*https:github.com/paldepind/snabbdom/blob/master/LICENSE
*
*modifiedbyEvanYou(@yyx990803)
*

/*
*Nottype-checkingthisbecausethisfileisperf-criticalandthecost
*ofmakingflowunderstanditisnotworthit.
*/

varemptyNode=newVNode('',{},[]);

varhooks=['create','activate','update','remove','destroy'];

functionsameVnode(a,b){
return(
a.key===b.key&&(
(
a.tag===b.tag&&
a.isComment===b.isComment&&
isDef(a.data)===isDef(b.data)&&
sameInputType(a,b)
)||(
isTrue(a.isAsyncPlaceholder)&&
a.asyncFactory===b.asyncFactory&&
isUndef(b.asyncFactory.error)
)
)
)
}

Somebrowsersdonotsupportdynamicallychangingtypefor<input>
sotheyneedtobetreatedasdifferentnodes
functionsameInputType(a,b){
if(a.tag!=='input'){returntrue}
vari;
vartypeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;
vartypeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;
returntypeA===typeB
}

functioncreateKeyToOldIdx(children,beginIdx,endIdx){
vari,key;
varmap={};
for(i=beginIdx;i<=endIdx;++i){
key=children[i].key;
if(isDef(key)){map[key]=i;}
}
returnmap
}

functioncreatePatchFunction(backend){
vari,j;
varcbs={};

varmodules=backend.modules;
varnodeOps=backend.nodeOps;

for(i=0;i<hooks.length;++i){
cbs[hooks[i]]=[];
for(j=0;j<modules.length;++j){
if(isDef(modules[j][hooks[i]])){
cbs[hooks[i]].push(modules[j][hooks[i]]);
}
}
}

functionemptyNodeAt(elm){
returnnewVNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm)
}

functioncreateRmCb(childElm,listeners){
functionremove$$1(){
if(--remove$$1.listeners===0){
removeNode(childElm);
}
}
remove$$1.listeners=listeners;
returnremove$$1
}

functionremoveNode(el){
varparent=nodeOps.parentNode(el);
elementmayhavealreadybeenremovedduetov-html/v-text
if(isDef(parent)){
nodeOps.removeChild(parent,el);
}
}

varinPre=0;
functioncreateElm(vnode,insertedVnodeQueue,parentElm,refElm,nested){
vnode.isRootInsert=!nested;fortransitionentercheck
if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){
return
}

vardata=vnode.data;
varchildren=vnode.children;
vartag=vnode.tag;
if(isDef(tag)){
{
if(data&&data.pre){
inPre++;
}
if(
!inPre&&
!vnode.ns&&
!(config.ignoredElements.length&&config.ignoredElements.indexOf(tag)>-1)&&
config.isUnknownElement(tag)
){
warn(
'Unknowncustomelement:<'+tag+'>-didyou'+
'registerthecomponentcorrectly?Forrecursivecomponents,'+
'makesuretoprovidethe"name"option.',
vnode.context
);
}
}
vnode.elm=vnode.ns
?nodeOps.createElementNS(vnode.ns,tag)
:nodeOps.createElement(tag,vnode);
setScope(vnode);

/*istanbulignoreif*/
{
createChildren(vnode,children,insertedVnodeQueue);
if(isDef(data)){
invokeCreateHooks(vnode,insertedVnodeQueue);
}
insert(parentElm,vnode.elm,refElm);
}

if("development"!=='production'&&data&&data.pre){
inPre--;
}
}elseif(isTrue(vnode.isComment)){
vnode.elm=nodeOps.createComment(vnode.text);
insert(parentElm,vnode.elm,refElm);
}else{
vnode.elm=nodeOps.createTextNode(vnode.text);
insert(parentElm,vnode.elm,refElm);
}
}

functioncreateComponent(vnode,insertedVnodeQueue,parentElm,refElm){
vari=vnode.data;
if(isDef(i)){
varisReactivated=isDef(vnode.componentInstance)&&i.keepAlive;
if(isDef(i=i.hook)&&isDef(i=i.init)){
i(vnode,false/*hydrating*/,parentElm,refElm);
}
aftercallingtheinithook,ifthevnodeisachildcomponent
itshould'vecreatedachildinstanceandmountedit.thechild
componentalsohassettheplaceholdervnode'selm.
inthatcasewecanjustreturntheelementandbedone.
if(isDef(vnode.componentInstance)){
initComponent(vnode,insertedVnodeQueue);
if(isTrue(isReactivated)){
reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);
}
returntrue
}
}
}

functioninitComponent(vnode,insertedVnodeQueue){
if(isDef(vnode.data.pendingInsert)){
insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);
vnode.data.pendingInsert=null;
}
vnode.elm=vnode.componentInstance.$el;
if(isPatchable(vnode)){
invokeCreateHooks(vnode,insertedVnodeQueue);
setScope(vnode);
}else{
emptycomponentroot.
skipallelement-relatedmodulesexceptforref(#3455)
registerRef(vnode);
makesuretoinvoketheinserthook
insertedVnodeQueue.push(vnode);
}
}

functionreactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){
vari;
hackfor#4339:areactivatedcomponentwithinnertransition
doesnottriggerbecausetheinnernode'screatedhooksarenotcalled
again.It'snotidealtoinvolvemodule-specificlogicinherebut
theredoesn'tseemtobeabetterwaytodoit.
varinnerNode=vnode;
while(innerNode.componentInstance){
innerNode=innerNode.componentInstance._vnode;
if(isDef(i=innerNode.data)&&isDef(i=i.transition)){
for(i=0;i<cbs.activate.length;++i){
cbs.activate[i](emptyNode,innerNode);
}
insertedVnodeQueue.push(innerNode);
break
}
}
unlikeanewlycreatedcomponent,
areactivatedkeep-alivecomponentdoesn'tinsertitself
insert(parentElm,vnode.elm,refElm);
}

functioninsert(parent,elm,ref$$1){
if(isDef(parent)){
if(isDef(ref$$1)){
if(ref$$1.parentNode===parent){
nodeOps.insertBefore(parent,elm,ref$$1);
}
}else{
nodeOps.appendChild(parent,elm);
}
}
}

functioncreateChildren(vnode,children,insertedVnodeQueue){
if(Array.isArray(children)){
for(vari=0;i<children.length;++i){
createElm(children[i],insertedVnodeQueue,vnode.elm,null,true);
}
}elseif(isPrimitive(vnode.text)){
nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));
}
}

functionisPatchable(vnode){
while(vnode.componentInstance){
vnode=vnode.componentInstance._vnode;
}
returnisDef(vnode.tag)
}

functioninvokeCreateHooks(vnode,insertedVnodeQueue){
for(vari$1=0;i$1<cbs.create.length;++i$1){
cbs.create[i$1](emptyNode,vnode);
}
i=vnode.data.hook;Reusevariable
if(isDef(i)){
if(isDef(i.create)){i.create(emptyNode,vnode);}
if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}
}
}

setscopeidattributeforscopedCSS.
thisisimplementedasaspecialcasetoavoidtheoverhead
ofgoingthroughthenormalattributepatchingprocess.
functionsetScope(vnode){
vari;
varancestor=vnode;
while(ancestor){
if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){
nodeOps.setAttribute(vnode.elm,i,'');
}
ancestor=ancestor.parent;
}
forslotcontenttheyshouldalsogetthescopeIdfromthehostinstance.
if(isDef(i=activeInstance)&&
i!==vnode.context&&
isDef(i=i.$options._scopeId)
){
nodeOps.setAttribute(vnode.elm,i,'');
}
}

functionaddVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){
for(;startIdx<=endIdx;++startIdx){
createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm);
}
}

functioninvokeDestroyHook(vnode){
vari,j;
vardata=vnode.data;
if(isDef(data)){
if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}
for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}
}
if(isDef(i=vnode.children)){
for(j=0;j<vnode.children.length;++j){
invokeDestroyHook(vnode.children[j]);
}
}
}

functionremoveVnodes(parentElm,vnodes,startIdx,endIdx){
for(;startIdx<=endIdx;++startIdx){
varch=vnodes[startIdx];
if(isDef(ch)){
if(isDef(ch.tag)){
removeAndInvokeRemoveHook(ch);
invokeDestroyHook(ch);
}else{Textnode
removeNode(ch.elm);
}
}
}
}

functionremoveAndInvokeRemoveHook(vnode,rm){
if(isDef(rm)||isDef(vnode.data)){
vari;
varlisteners=cbs.remove.length+1;
if(isDef(rm)){
wehavearecursivelypasseddownrmcallback
increasethelistenerscount
rm.listeners+=listeners;
}else{
directlyremoving
rm=createRmCb(vnode.elm,listeners);
}
recursivelyinvokehooksonchildcomponentrootnode
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){
removeAndInvokeRemoveHook(i,rm);
}
for(i=0;i<cbs.remove.length;++i){
cbs.remove[i](vnode,rm);
}
if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){
i(vnode,rm);
}else{
rm();
}
}else{
removeNode(vnode.elm);
}
}

functionupdateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){
varoldStartIdx=0;
varnewStartIdx=0;
varoldEndIdx=oldCh.length-1;
varoldStartVnode=oldCh[0];
varoldEndVnode=oldCh[oldEndIdx];
varnewEndIdx=newCh.length-1;
varnewStartVnode=newCh[0];
varnewEndVnode=newCh[newEndIdx];
varoldKeyToIdx,idxInOld,elmToMove,refElm;

removeOnlyisaspecialflagusedonlyby<transition-group>
toensureremovedelementsstayincorrectrelativepositions
duringleavingtransitions
varcanMove=!removeOnly;

while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){
if(isUndef(oldStartVnode)){
oldStartVnode=oldCh[++oldStartIdx];Vnodehasbeenmovedleft
}elseif(isUndef(oldEndVnode)){
oldEndVnode=oldCh[--oldEndIdx];
}elseif(sameVnode(oldStartVnode,newStartVnode)){
patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);
oldStartVnode=oldCh[++oldStartIdx];
newStartVnode=newCh[++newStartIdx];
}elseif(sameVnode(oldEndVnode,newEndVnode)){
patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);
oldEndVnode=oldCh[--oldEndIdx];
newEndVnode=newCh[--newEndIdx];
}elseif(sameVnode(oldStartVnode,newEndVnode)){Vnodemovedright
patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);
canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));
oldStartVnode=oldCh[++oldStartIdx];
newEndVnode=newCh[--newEndIdx];
}elseif(sameVnode(oldEndVnode,newStartVnode)){Vnodemovedleft
patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);
canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);
oldEndVnode=oldCh[--oldEndIdx];
newStartVnode=newCh[++newStartIdx];
}else{
if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}
idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null;
if(isUndef(idxInOld)){Newelement
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);
newStartVnode=newCh[++newStartIdx];
}else{
elmToMove=oldCh[idxInOld];
/*istanbulignoreif*/
if("development"!=='production'&&!elmToMove){
warn(
'Itseemsthereareduplicatekeysthatiscausinganupdateerror.'+
'Makesureeachv-foritemhasauniquekey.'
);
}
if(sameVnode(elmToMove,newStartVnode)){
patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);
oldCh[idxInOld]=undefined;
canMove&&nodeOps.insertBefore(parentElm,elmToMove.elm,oldStartVnode.elm);
newStartVnode=newCh[++newStartIdx];
}else{
samekeybutdifferentelement.treatasnewelement
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);
newStartVnode=newCh[++newStartIdx];
}
}
}
}
if(oldStartIdx>oldEndIdx){
refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;
addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);
}elseif(newStartIdx>newEndIdx){
removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);
}
}

functionpatchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){
if(oldVnode===vnode){
return
}

varelm=vnode.elm=oldVnode.elm;

if(isTrue(oldVnode.isAsyncPlaceholder)){
if(isDef(vnode.asyncFactory.resolved)){
hydrate(oldVnode.elm,vnode,insertedVnodeQueue);
}else{
vnode.isAsyncPlaceholder=true;
}
return
}

reuseelementforstatictrees.
noteweonlydothisifthevnodeiscloned-
ifthenewnodeisnotcloneditmeanstherenderfunctionshavebeen
resetbythehot-reload-apiandweneedtodoaproperre-render.
if(isTrue(vnode.isStatic)&&
isTrue(oldVnode.isStatic)&&
vnode.key===oldVnode.key&&
(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))
){
vnode.componentInstance=oldVnode.componentInstance;
return
}

vari;
vardata=vnode.data;
if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){
i(oldVnode,vnode);
}

varoldCh=oldVnode.children;
varch=vnode.children;
if(isDef(data)&&isPatchable(vnode)){
for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}
if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}
}
if(isUndef(vnode.text)){
if(isDef(oldCh)&&isDef(ch)){
if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}
}elseif(isDef(ch)){
if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}
addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);
}elseif(isDef(oldCh)){
removeVnodes(elm,oldCh,0,oldCh.length-1);
}elseif(isDef(oldVnode.text)){
nodeOps.setTextContent(elm,'');
}
}elseif(oldVnode.text!==vnode.text){
nodeOps.setTextContent(elm,vnode.text);
}
if(isDef(data)){
if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}
}
}

functioninvokeInsertHook(vnode,queue,initial){
delayinserthooksforcomponentrootnodes,invokethemafterthe
elementisreallyinserted
if(isTrue(initial)&&isDef(vnode.parent)){
vnode.parent.data.pendingInsert=queue;
}else{
for(vari=0;i<queue.length;++i){
queue[i].data.hook.insert(queue[i]);
}
}
}

varbailed=false;
listofmodulesthatcanskipcreatehookduringhydrationbecausethey
arealreadyrenderedontheclientorhasnoneedforinitialization
varisRenderedModule=makeMap('attrs,style,class,staticClass,staticStyle,key');

Note:thisisabrowser-onlyfunctionsowecanassumeelmsareDOMnodes.
functionhydrate(elm,vnode,insertedVnodeQueue){
if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){
vnode.elm=elm;
vnode.isAsyncPlaceholder=true;
returntrue
}
{
if(!assertNodeMatch(elm,vnode)){
returnfalse
}
}
vnode.elm=elm;
vartag=vnode.tag;
vardata=vnode.data;
varchildren=vnode.children;
if(isDef(data)){
if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/*hydrating*/);}
if(isDef(i=vnode.componentInstance)){
childcomponent.itshouldhavehydrateditsowntree.
initComponent(vnode,insertedVnodeQueue);
returntrue
}
}
if(isDef(tag)){
if(isDef(children)){
emptyelement,allowclienttopickupandpopulatechildren
if(!elm.hasChildNodes()){
createChildren(vnode,children,insertedVnodeQueue);
}else{
varchildrenMatch=true;
varchildNode=elm.firstChild;
for(vari$1=0;i$1<children.length;i$1++){
if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue)){
childrenMatch=false;
break
}
childNode=childNode.nextSibling;
}
ifchildNodeisnotnull,itmeanstheactualchildNodeslistis
longerthanthevirtualchildrenlist.
if(!childrenMatch||childNode){
if("development"!=='production'&&
typeofconsole!=='undefined'&&
!bailed
){
bailed=true;
console.warn('Parent:',elm);
console.warn('MismatchingchildNodesvs.VNodes:',elm.childNodes,children);
}
returnfalse
}
}
}
if(isDef(data)){
for(varkeyindata){
if(!isRenderedModule(key)){
invokeCreateHooks(vnode,insertedVnodeQueue);
break
}
}
}
}elseif(elm.data!==vnode.text){
elm.data=vnode.text;
}
returntrue
}

functionassertNodeMatch(node,vnode){
if(isDef(vnode.tag)){
return(
vnode.tag.indexOf('vue-component')===0||
vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase())
)
}else{
returnnode.nodeType===(vnode.isComment?8:3)
}
}

returnfunctionpatch(oldVnode,vnode,hydrating,removeOnly,parentElm,refElm){
if(isUndef(vnode)){
if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}
return
}

varisInitialPatch=false;
varinsertedVnodeQueue=[];

if(isUndef(oldVnode)){
emptymount(likelyascomponent),createnewrootelement
isInitialPatch=true;
createElm(vnode,insertedVnodeQueue,parentElm,refElm);
}else{
varisRealElement=isDef(oldVnode.nodeType);
if(!isRealElement&&sameVnode(oldVnode,vnode)){
patchexistingrootnode
patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);
}else{
if(isRealElement){
mountingtoarealelement
checkifthisisserver-renderedcontentandifwecanperform
asuccessfulhydration.
if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){
oldVnode.removeAttribute(SSR_ATTR);
hydrating=true;
}
if(isTrue(hydrating)){
if(hydrate(oldVnode,vnode,insertedVnodeQueue)){
invokeInsertHook(vnode,insertedVnodeQueue,true);
returnoldVnode
}else{
warn(
'Theclient-siderenderedvirtualDOMtreeisnotmatching'+
'server-renderedcontent.Thisislikelycausedbyincorrect'+
'HTMLmarkup,forexamplenestingblock-levelelementsinside'+
'<p>,ormissing<tbody>.Bailinghydrationandperforming'+
'fullclient-siderender.'
);
}
}
eithernotserver-rendered,orhydrationfailed.
createanemptynodeandreplaceit
oldVnode=emptyNodeAt(oldVnode);
}
replacingexistingelement
varoldElm=oldVnode.elm;
varparentElm$1=nodeOps.parentNode(oldElm);
createElm(
vnode,
insertedVnodeQueue,
extremelyrareedgecase:donotinsertifoldelementisina
leavingtransition.Onlyhappenswhencombiningtransition+
keep-alive+HOCs.(#4590)
oldElm._leaveCb?null:parentElm$1,
nodeOps.nextSibling(oldElm)
);

if(isDef(vnode.parent)){
componentrootelementreplaced.
updateparentplaceholdernodeelement,recursively
varancestor=vnode.parent;
while(ancestor){
ancestor.elm=vnode.elm;
ancestor=ancestor.parent;
}
if(isPatchable(vnode)){
for(vari=0;i<cbs.create.length;++i){
cbs.create[i](emptyNode,vnode.parent);
}
}
}

if(isDef(parentElm$1)){
removeVnodes(parentElm$1,[oldVnode],0,0);
}elseif(isDef(oldVnode.tag)){
invokeDestroyHook(oldVnode);
}
}
}

invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);
returnvnode.elm
}
}

/**/

vardirectives={
create:updateDirectives,
update:updateDirectives,
destroy:functionunbindDirectives(vnode){
updateDirectives(vnode,emptyNode);
}
};

functionupdateDirectives(oldVnode,vnode){
if(oldVnode.data.directives||vnode.data.directives){
_update(oldVnode,vnode);
}
}

function_update(oldVnode,vnode){
varisCreate=oldVnode===emptyNode;
varisDestroy=vnode===emptyNode;
varoldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);
varnewDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);

vardirsWithInsert=[];
vardirsWithPostpatch=[];

varkey,oldDir,dir;
for(keyinnewDirs){
oldDir=oldDirs[key];
dir=newDirs[key];
if(!oldDir){
newdirective,bind
callHook$1(dir,'bind',vnode,oldVnode);
if(dir.def&&dir.def.inserted){
dirsWithInsert.push(dir);
}
}else{
existingdirective,update
dir.oldValue=oldDir.value;
callHook$1(dir,'update',vnode,oldVnode);
if(dir.def&&dir.def.componentUpdated){
dirsWithPostpatch.push(dir);
}
}
}

if(dirsWithInsert.length){
varcallInsert=function(){
for(vari=0;i<dirsWithInsert.length;i++){
callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);
}
};
if(isCreate){
mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',callInsert);
}else{
callInsert();
}
}

if(dirsWithPostpatch.length){
mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'postpatch',function(){
for(vari=0;i<dirsWithPostpatch.length;i++){
callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);
}
});
}

if(!isCreate){
for(keyinoldDirs){
if(!newDirs[key]){
nolongerpresent,unbind
callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);
}
}
}
}

varemptyModifiers=Object.create(null);

functionnormalizeDirectives$1(
dirs,
vm
){
varres=Object.create(null);
if(!dirs){
returnres
}
vari,dir;
for(i=0;i<dirs.length;i++){
dir=dirs[i];
if(!dir.modifiers){
dir.modifiers=emptyModifiers;
}
res[getRawDirName(dir)]=dir;
dir.def=resolveAsset(vm.$options,'directives',dir.name,true);
}
returnres
}

functiongetRawDirName(dir){
returndir.rawName||((dir.name)+"."+(Object.keys(dir.modifiers||{}).join('.')))
}

functioncallHook$1(dir,hook,vnode,oldVnode,isDestroy){
varfn=dir.def&&dir.def[hook];
if(fn){
try{
fn(vnode.elm,dir,vnode,oldVnode,isDestroy);
}catch(e){
handleError(e,vnode.context,("directive"+(dir.name)+""+hook+"hook"));
}
}
}

varbaseModules=[
ref,
directives
];

/**/

functionupdateAttrs(oldVnode,vnode){
varopts=vnode.componentOptions;
if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){
return
}
if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){
return
}
varkey,cur,old;
varelm=vnode.elm;
varoldAttrs=oldVnode.data.attrs||{};
varattrs=vnode.data.attrs||{};
cloneobservedobjects,astheuserprobablywantstomutateit
if(isDef(attrs.__ob__)){
attrs=vnode.data.attrs=extend({},attrs);
}

for(keyinattrs){
cur=attrs[key];
old=oldAttrs[key];
if(old!==cur){
setAttr(elm,key,cur);
}
}
#4391:inIE9,settingtypecanresetvalueforinput[type=radio]
/*istanbulignoreif*/
if(isIE9&&attrs.value!==oldAttrs.value){
setAttr(elm,'value',attrs.value);
}
for(keyinoldAttrs){
if(isUndef(attrs[key])){
if(isXlink(key)){
elm.removeAttributeNS(xlinkNS,getXlinkProp(key));
}elseif(!isEnumeratedAttr(key)){
elm.removeAttribute(key);
}
}
}
}

functionsetAttr(el,key,value){
if(isBooleanAttr(key)){
setattributeforblankvalue
e.g.<optiondisabled>Selectone</option>
if(isFalsyAttrValue(value)){
el.removeAttribute(key);
}else{
el.setAttribute(key,key);
}
}elseif(isEnumeratedAttr(key)){
el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');
}elseif(isXlink(key)){
if(isFalsyAttrValue(value)){
el.removeAttributeNS(xlinkNS,getXlinkProp(key));
}else{
el.setAttributeNS(xlinkNS,key,value);
}
}else{
if(isFalsyAttrValue(value)){
el.removeAttribute(key);
}else{
el.setAttribute(key,value);
}
}
}

varattrs={
create:updateAttrs,
update:updateAttrs
};

/**/

functionupdateClass(oldVnode,vnode){
varel=vnode.elm;
vardata=vnode.data;
varoldData=oldVnode.data;
if(
isUndef(data.staticClass)&&
isUndef(data.class)&&(
isUndef(oldData)||(
isUndef(oldData.staticClass)&&
isUndef(oldData.class)
)
)
){
return
}

varcls=genClassForVnode(vnode);

handletransitionclasses
vartransitionClass=el._transitionClasses;
if(isDef(transitionClass)){
cls=concat(cls,stringifyClass(transitionClass));
}

settheclass
if(cls!==el._prevClass){
el.setAttribute('class',cls);
el._prevClass=cls;
}
}

varklass={
create:updateClass,
update:updateClass
};

/**/

varvalidDivisionCharRE=/[\w).+\-_$\]]/;

functionparseFilters(exp){
varinSingle=false;
varinDouble=false;
varinTemplateString=false;
varinRegex=false;
varcurly=0;
varsquare=0;
varparen=0;
varlastFilterIndex=0;
varc,prev,i,expression,filters;

for(i=0;i<exp.length;i++){
prev=c;
c=exp.charCodeAt(i);
if(inSingle){
if(c===0x27&&prev!==0x5C){inSingle=false;}
}elseif(inDouble){
if(c===0x22&&prev!==0x5C){inDouble=false;}
}elseif(inTemplateString){
if(c===0x60&&prev!==0x5C){inTemplateString=false;}
}elseif(inRegex){
if(c===0x2f&&prev!==0x5C){inRegex=false;}
}elseif(
c===0x7C&&pipe
exp.charCodeAt(i+1)!==0x7C&&
exp.charCodeAt(i-1)!==0x7C&&
!curly&&!square&&!paren
){
if(expression===undefined){
firstfilter,endofexpression
lastFilterIndex=i+1;
expression=exp.slice(0,i).trim();
}else{
pushFilter();
}
}else{
switch(c){
case0x22:inDouble=true;break"
case0x27:inSingle=true;break'
case0x60:inTemplateString=true;break`
case0x28:paren++;break(
case0x29:paren--;break)
case0x5B:square++;break[
case0x5D:square--;break]
case0x7B:curly++;break{
case0x7D:curly--;break}
}
if(c===0x2f){/
varj=i-1;
varp=(void0);
findfirstnon-whitespaceprevchar
for(;j>=0;j--){
p=exp.charAt(j);
if(p!==''){break}
}
if(!p||!validDivisionCharRE.test(p)){
inRegex=true;
}
}
}
}

if(expression===undefined){
expression=exp.slice(0,i).trim();
}elseif(lastFilterIndex!==0){
pushFilter();
}

functionpushFilter(){
(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());
lastFilterIndex=i+1;
}

if(filters){
for(i=0;i<filters.length;i++){
expression=wrapFilter(expression,filters[i]);
}
}

returnexpression
}

functionwrapFilter(exp,filter){
vari=filter.indexOf('(');
if(i<0){
_f:resolveFilter
return("_f(\""+filter+"\")("+exp+")")
}else{
varname=filter.slice(0,i);
varargs=filter.slice(i+1);
return("_f(\""+name+"\")("+exp+","+args)
}
}

/**/

functionbaseWarn(msg){
console.error(("[Vuecompiler]:"+msg));
}

functionpluckModuleFunction(
modules,
key
){
returnmodules
?modules.map(function(m){returnm[key];}).filter(function(_){return_;})
:[]
}

functionaddProp(el,name,value){
(el.props||(el.props=[])).push({name:name,value:value});
}

functionaddAttr(el,name,value){
(el.attrs||(el.attrs=[])).push({name:name,value:value});
}

functionaddDirective(
el,
name,
rawName,
value,
arg,
modifiers
){
(el.directives||(el.directives=[])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers});
}

functionaddHandler(
el,
name,
value,
modifiers,
important,
warn
){
warnpreventandpassivemodifier
/*istanbulignoreif*/
if(
"development"!=='production'&&warn&&
modifiers&&modifiers.prevent&&modifiers.passive
){
warn(
'passiveandpreventcan\'tbeusedtogether.'+
'Passivehandlercan\'tpreventdefaultevent.'
);
}
checkcapturemodifier
if(modifiers&&modifiers.capture){
deletemodifiers.capture;
name='!'+name;marktheeventascaptured
}
if(modifiers&&modifiers.once){
deletemodifiers.once;
name='~'+name;marktheeventasonce
}
/*istanbulignoreif*/
if(modifiers&&modifiers.passive){
deletemodifiers.passive;
name='&'+name;marktheeventaspassive
}
varevents;
if(modifiers&&modifiers.native){
deletemodifiers.native;
events=el.nativeEvents||(el.nativeEvents={});
}else{
events=el.events||(el.events={});
}
varnewHandler={value:value,modifiers:modifiers};
varhandlers=events[name];
/*istanbulignoreif*/
if(Array.isArray(handlers)){
important?handlers.unshift(newHandler):handlers.push(newHandler);
}elseif(handlers){
events[name]=important?[newHandler,handlers]:[handlers,newHandler];
}else{
events[name]=newHandler;
}
}

functiongetBindingAttr(
el,
name,
getStatic
){
vardynamicValue=
getAndRemoveAttr(el,':'+name)||
getAndRemoveAttr(el,'v-bind:'+name);
if(dynamicValue!=null){
returnparseFilters(dynamicValue)
}elseif(getStatic!==false){
varstaticValue=getAndRemoveAttr(el,name);
if(staticValue!=null){
returnJSON.stringify(staticValue)
}
}
}

functiongetAndRemoveAttr(el,name){
varval;
if((val=el.attrsMap[name])!=null){
varlist=el.attrsList;
for(vari=0,l=list.length;i<l;i++){
if(list[i].name===name){
list.splice(i,1);
break
}
}
}
returnval
}

/**/

/**
*Cross-platformcodegenerationforcomponentv-model
*/
functiongenComponentModel(
el,
value,
modifiers
){
varref=modifiers||{};
varnumber=ref.number;
vartrim=ref.trim;

varbaseValueExpression='$$v';
varvalueExpression=baseValueExpression;
if(trim){
valueExpression=
"(typeof"+baseValueExpression+"==='string'"+
"?"+baseValueExpression+".trim()"+
":"+baseValueExpression+")";
}
if(number){
valueExpression="_n("+valueExpression+")";
}
varassignment=genAssignmentCode(value,valueExpression);

el.model={
value:("("+value+")"),
expression:("\""+value+"\""),
callback:("function("+baseValueExpression+"){"+assignment+"}")
};
}

/**
*Cross-platformcodegenhelperforgeneratingv-modelvalueassignmentcode.
*/
functiongenAssignmentCode(
value,
assignment
){
varmodelRs=parseModel(value);
if(modelRs.idx===null){
return(value+"="+assignment)
}else{
return("$set("+(modelRs.exp)+","+(modelRs.idx)+","+assignment+")")
}
}

/**
*parsedirectivemodeltodothearrayupdatetransform.a[idx]=val=>$$a.splice($$idx,1,val)
*
*forlooppossiblecases:
*
*-test
*-test[idx]
*-test[test1[idx]]
*-test["a"][idx]
*-xxx.test[a[a].test1[idx]]
*-test.xxx.a["asa"][test1[idx]]
*
*/

varlen;
varstr;
varchr;
varindex$1;
varexpressionPos;
varexpressionEndPos;

functionparseModel(val){
str=val;
len=str.length;
index$1=expressionPos=expressionEndPos=0;

if(val.indexOf('[')<0||val.lastIndexOf(']')<len-1){
return{
exp:val,
idx:null
}
}

while(!eof()){
chr=next();
/*istanbulignoreif*/
if(isStringStart(chr)){
parseString(chr);
}elseif(chr===0x5B){
parseBracket(chr);
}
}

return{
exp:val.substring(0,expressionPos),
idx:val.substring(expressionPos+1,expressionEndPos)
}
}

functionnext(){
returnstr.charCodeAt(++index$1)
}

functioneof(){
returnindex$1>=len
}

functionisStringStart(chr){
returnchr===0x22||chr===0x27
}

functionparseBracket(chr){
varinBracket=1;
expressionPos=index$1;
while(!eof()){
chr=next();
if(isStringStart(chr)){
parseString(chr);
continue
}
if(chr===0x5B){inBracket++;}
if(chr===0x5D){inBracket--;}
if(inBracket===0){
expressionEndPos=index$1;
break
}
}
}

functionparseString(chr){
varstringQuote=chr;
while(!eof()){
chr=next();
if(chr===stringQuote){
break
}
}
}

/**/

varwarn$1;

insomecases,theeventusedhastobedeterminedatruntime
soweusedsomereservedtokensduringcompile.
varRANGE_TOKEN='__r';
varCHECKBOX_RADIO_TOKEN='__c';

functionmodel(
el,
dir,
_warn
){
warn$1=_warn;
varvalue=dir.value;
varmodifiers=dir.modifiers;
vartag=el.tag;
vartype=el.attrsMap.type;

{
vardynamicType=el.attrsMap['v-bind:type']||el.attrsMap[':type'];
if(tag==='input'&&dynamicType){
warn$1(
"<input:type=\""+dynamicType+"\"v-model=\""+value+"\">:\n"+
"v-modeldoesnotsupportdynamicinputtypes.Usev-ifbranchesinstead."
);
}
inputswithtype="file"arereadonlyandsettingtheinput's
valuewillthrowanerror.
if(tag==='input'&&type==='file'){
warn$1(
"<"+(el.tag)+"v-model=\""+value+"\"type=\"file\">:\n"+
"Fileinputsarereadonly.Useav-on:changelistenerinstead."
);
}
}

if(el.component){
genComponentModel(el,value,modifiers);
componentv-modeldoesn'tneedextraruntime
returnfalse
}elseif(tag==='select'){
genSelect(el,value,modifiers);
}elseif(tag==='input'&&type==='checkbox'){
genCheckboxModel(el,value,modifiers);
}elseif(tag==='input'&&type==='radio'){
genRadioModel(el,value,modifiers);
}elseif(tag==='input'||tag==='textarea'){
genDefaultModel(el,value,modifiers);
}elseif(!config.isReservedTag(tag)){
genComponentModel(el,value,modifiers);
componentv-modeldoesn'tneedextraruntime
returnfalse
}else{
warn$1(
"<"+(el.tag)+"v-model=\""+value+"\">:"+
"v-modelisnotsupportedonthiselementtype."+
'Ifyouareworkingwithcontenteditable,it\'srecommendedto'+
'wrapalibrarydedicatedforthatpurposeinsideacustomcomponent.'
);
}

ensureruntimedirectivemetadata
returntrue
}

functiongenCheckboxModel(
el,
value,
modifiers
){
varnumber=modifiers&&modifiers.number;
varvalueBinding=getBindingAttr(el,'value')||'null';
vartrueValueBinding=getBindingAttr(el,'true-value')||'true';
varfalseValueBinding=getBindingAttr(el,'false-value')||'false';
addProp(el,'checked',
"Array.isArray("+value+")"+
"?_i("+value+","+valueBinding+")>-1"+(
trueValueBinding==='true'
?(":("+value+")")
:(":_q("+value+","+trueValueBinding+")")
)
);
addHandler(el,CHECKBOX_RADIO_TOKEN,
"var$$a="+value+","+
'$$el=$event.target,'+
"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+
'if(Array.isArray($$a)){'+
"var$$v="+(number?'_n('+valueBinding+')':valueBinding)+","+
'$$i=_i($$a,$$v);'+
"if($$el.checked){$$i<0&&("+value+"=$$a.concat($$v))}"+
"else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+
"}else{"+(genAssignmentCode(value,'$$c'))+"}",
null,true
);
}

functiongenRadioModel(
el,
value,
modifiers
){
varnumber=modifiers&&modifiers.number;
varvalueBinding=getBindingAttr(el,'value')||'null';
valueBinding=number?("_n("+valueBinding+")"):valueBinding;
addProp(el,'checked',("_q("+value+","+valueBinding+")"));
addHandler(el,CHECKBOX_RADIO_TOKEN,genAssignmentCode(value,valueBinding),null,true);
}

functiongenSelect(
el,
value,
modifiers
){
varnumber=modifiers&&modifiers.number;
varselectedVal="Array.prototype.filter"+
".call($event.target.options,function(o){returno.selected})"+
".map(function(o){varval=\"_value\"ino?o._value:o.value;"+
"return"+(number?'_n(val)':'val')+"})";

varassignment='$event.target.multiple?$$selectedVal:$$selectedVal[0]';
varcode="var$$selectedVal="+selectedVal+";";
code=code+""+(genAssignmentCode(value,assignment));
addHandler(el,'change',code,null,true);
}

functiongenDefaultModel(
el,
value,
modifiers
){
vartype=el.attrsMap.type;
varref=modifiers||{};
varlazy=ref.lazy;
varnumber=ref.number;
vartrim=ref.trim;
varneedCompositionGuard=!lazy&&type!=='range';
varevent=lazy
?'change'
:type==='range'
?RANGE_TOKEN
:'input';

varvalueExpression='$event.target.value';
if(trim){
valueExpression="$event.target.value.trim()";
}
if(number){
valueExpression="_n("+valueExpression+")";
}

varcode=genAssignmentCode(value,valueExpression);
if(needCompositionGuard){
code="if($event.target.composing)return;"+code;
}

addProp(el,'value',("("+value+")"));
addHandler(el,event,code,null,true);
if(trim||number){
addHandler(el,'blur','$forceUpdate()');
}
}

/**/

normalizev-modeleventtokensthatcanonlybedeterminedatruntime.
it'simportanttoplacetheeventasthefirstinthearraybecause
thewholepointisensuringthev-modelcallbackgetscalledbefore
user-attachedhandlers.
functionnormalizeEvents(on){
varevent;
/*istanbulignoreif*/
if(isDef(on[RANGE_TOKEN])){
IEinput[type=range]onlysupports`change`event
event=isIE?'change':'input';
on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);
deleteon[RANGE_TOKEN];
}
if(isDef(on[CHECKBOX_RADIO_TOKEN])){
Chromefiresmicrotasksinbetweenclick/change,leadsto#4521
event=isChrome?'click':'change';
on[event]=[].concat(on[CHECKBOX_RADIO_TOKEN],on[event]||[]);
deleteon[CHECKBOX_RADIO_TOKEN];
}
}

vartarget$1;

functionadd$1(
event,
handler,
once$$1,
capture,
passive
){
if(once$$1){
varoldHandler=handler;
var_target=target$1;savecurrenttargetelementinclosure
handler=function(ev){
varres=arguments.length===1
?oldHandler(ev)
:oldHandler.apply(null,arguments);
if(res!==null){
remove$2(event,handler,capture,_target);
}
};
}
target$1.addEventListener(
event,
handler,
supportsPassive
?{capture:capture,passive:passive}
:capture
);
}

functionremove$2(
event,
handler,
capture,
_target
){
(_target||target$1).removeEventListener(event,handler,capture);
}

functionupdateDOMListeners(oldVnode,vnode){
if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){
return
}
varon=vnode.data.on||{};
varoldOn=oldVnode.data.on||{};
target$1=vnode.elm;
normalizeEvents(on);
updateListeners(on,oldOn,add$1,remove$2,vnode.context);
}

varevents={
create:updateDOMListeners,
update:updateDOMListeners
};

/**/

functionupdateDOMProps(oldVnode,vnode){
if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){
return
}
varkey,cur;
varelm=vnode.elm;
varoldProps=oldVnode.data.domProps||{};
varprops=vnode.data.domProps||{};
cloneobservedobjects,astheuserprobablywantstomutateit
if(isDef(props.__ob__)){
props=vnode.data.domProps=extend({},props);
}

for(keyinoldProps){
if(isUndef(props[key])){
elm[key]='';
}
}
for(keyinprops){
cur=props[key];
ignorechildrenifthenodehastextContentorinnerHTML,
asthesewillthrowawayexistingDOMnodesandcauseremovalerrors
onsubsequentpatches(#3360)
if(key==='textContent'||key==='innerHTML'){
if(vnode.children){vnode.children.length=0;}
if(cur===oldProps[key]){continue}
}

if(key==='value'){
storevalueas_valueaswellsince
non-stringvalueswillbestringified
elm._value=cur;
avoidresettingcursorpositionwhenvalueisthesame
varstrCur=isUndef(cur)?'':String(cur);
if(shouldUpdateValue(elm,vnode,strCur)){
elm.value=strCur;
}
}else{
elm[key]=cur;
}
}
}

checkplatforms/web/util/attrs.jsacceptValue


functionshouldUpdateValue(
elm,
vnode,
checkVal
){
return(!elm.composing&&(
vnode.tag==='option'||
isDirty(elm,checkVal)||
isInputChanged(elm,checkVal)
))
}

functionisDirty(elm,checkVal){
returntruewhentextbox(.numberand.trim)losesfocusanditsvalueis
notequaltotheupdatedvalue
varnotInFocus=true;
#6157
workaroundIEbugwhenaccessingdocument.activeElementinaniframe
try{notInFocus=document.activeElement!==elm;}catch(e){}
returnnotInFocus&&elm.value!==checkVal
}

functionisInputChanged(elm,newVal){
varvalue=elm.value;
varmodifiers=elm._vModifiers;injectedbyv-modelruntime
if(isDef(modifiers)&&modifiers.number){
returntoNumber(value)!==toNumber(newVal)
}
if(isDef(modifiers)&&modifiers.trim){
returnvalue.trim()!==newVal.trim()
}
returnvalue!==newVal
}

vardomProps={
create:updateDOMProps,
update:updateDOMProps
};

/**/

varparseStyleText=cached(function(cssText){
varres={};
varlistDelimiter=/;(?![^(]*\))/g;
varpropertyDelimiter=/:(.+)/;
cssText.split(listDelimiter).forEach(function(item){
if(item){
vartmp=item.split(propertyDelimiter);
tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());
}
});
returnres
});

mergestaticanddynamicstyledataonthesamevnode
functionnormalizeStyleData(data){
varstyle=normalizeStyleBinding(data.style);
staticstyleispre-processedintoanobjectduringcompilation
andisalwaysafreshobject,soit'ssafetomergeintoit
returndata.staticStyle
?extend(data.staticStyle,style)
:style
}

normalizepossiblearray/stringvaluesintoObject
functionnormalizeStyleBinding(bindingStyle){
if(Array.isArray(bindingStyle)){
returntoObject(bindingStyle)
}
if(typeofbindingStyle==='string'){
returnparseStyleText(bindingStyle)
}
returnbindingStyle
}

/**
*parentcomponentstyleshouldbeafterchild's
*sothatparentcomponent'sstylecouldoverrideit
*/
functiongetStyle(vnode,checkChild){
varres={};
varstyleData;

if(checkChild){
varchildNode=vnode;
while(childNode.componentInstance){
childNode=childNode.componentInstance._vnode;
if(childNode.data&&(styleData=normalizeStyleData(childNode.data))){
extend(res,styleData);
}
}
}

if((styleData=normalizeStyleData(vnode.data))){
extend(res,styleData);
}

varparentNode=vnode;
while((parentNode=parentNode.parent)){
if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){
extend(res,styleData);
}
}
returnres
}

/**/

varcssVarRE=/^--/;
varimportantRE=/\s*!important$/;
varsetProp=function(el,name,val){
/*istanbulignoreif*/
if(cssVarRE.test(name)){
el.style.setProperty(name,val);
}elseif(importantRE.test(val)){
el.style.setProperty(name,val.replace(importantRE,''),'important');
}else{
varnormalizedName=normalize(name);
if(Array.isArray(val)){
Supportvaluesarraycreatedbyautoprefixer,e.g.
{display:["-webkit-box","-ms-flexbox","flex"]}
Setthemonebyone,andthebrowserwillonlysetthoseitcanrecognize
for(vari=0,len=val.length;i<len;i++){
el.style[normalizedName]=val[i];
}
}else{
el.style[normalizedName]=val;
}
}
};

varvendorNames=['Webkit','Moz','ms'];

varemptyStyle;
varnormalize=cached(function(prop){
emptyStyle=emptyStyle||document.createElement('div').style;
prop=camelize(prop);
if(prop!=='filter'&&(propinemptyStyle)){
returnprop
}
varcapName=prop.charAt(0).toUpperCase()+prop.slice(1);
for(vari=0;i<vendorNames.length;i++){
varname=vendorNames[i]+capName;
if(nameinemptyStyle){
returnname
}
}
});

functionupdateStyle(oldVnode,vnode){
vardata=vnode.data;
varoldData=oldVnode.data;

if(isUndef(data.staticStyle)&&isUndef(data.style)&&
isUndef(oldData.staticStyle)&&isUndef(oldData.style)
){
return
}

varcur,name;
varel=vnode.elm;
varoldStaticStyle=oldData.staticStyle;
varoldStyleBinding=oldData.normalizedStyle||oldData.style||{};

ifstaticstyleexists,stylebindingalreadymergedintoitwhendoingnormalizeStyleData
varoldStyle=oldStaticStyle||oldStyleBinding;

varstyle=normalizeStyleBinding(vnode.data.style)||{};

storenormalizedstyleunderadifferentkeyfornextdiff
makesuretocloneitifit'sreactive,sincetheuserlikleywants
tomutateit.
vnode.data.normalizedStyle=isDef(style.__ob__)
?extend({},style)
:style;

varnewStyle=getStyle(vnode,true);

for(nameinoldStyle){
if(isUndef(newStyle[name])){
setProp(el,name,'');
}
}
for(nameinnewStyle){
cur=newStyle[name];
if(cur!==oldStyle[name]){
ie9settingtonullhasnoeffect,mustuseemptystring
setProp(el,name,cur==null?'':cur);
}
}
}

varstyle={
create:updateStyle,
update:updateStyle
};

/**/

/**
*AddclasswithcompatibilityforSVGsinceclassListisnotsupportedon
*SVGelementsinIE
*/
functionaddClass(el,cls){
/*istanbulignoreif*/
if(!cls||!(cls=cls.trim())){
return
}

/*istanbulignoreelse*/
if(el.classList){
if(cls.indexOf('')>-1){
cls.split(/\s+/).forEach(function(c){returnel.classList.add(c);});
}else{
el.classList.add(cls);
}
}else{
varcur=""+(el.getAttribute('class')||'')+"";
if(cur.indexOf(''+cls+'')<0){
el.setAttribute('class',(cur+cls).trim());
}
}
}

/**
*RemoveclasswithcompatibilityforSVGsinceclassListisnotsupportedon
*SVGelementsinIE
*/
functionremoveClass(el,cls){
/*istanbulignoreif*/
if(!cls||!(cls=cls.trim())){
return
}

/*istanbulignoreelse*/
if(el.classList){
if(cls.indexOf('')>-1){
cls.split(/\s+/).forEach(function(c){returnel.classList.remove(c);});
}else{
el.classList.remove(cls);
}
if(!el.classList.length){
el.removeAttribute('class');
}
}else{
varcur=""+(el.getAttribute('class')||'')+"";
vartar=''+cls+'';
while(cur.indexOf(tar)>=0){
cur=cur.replace(tar,'');
}
cur=cur.trim();
if(cur){
el.setAttribute('class',cur);
}else{
el.removeAttribute('class');
}
}
}

/**/

functionresolveTransition(def$$1){
if(!def$$1){
return
}
/*istanbulignoreelse*/
if(typeofdef$$1==='object'){
varres={};
if(def$$1.css!==false){
extend(res,autoCssTransition(def$$1.name||'v'));
}
extend(res,def$$1);
returnres
}elseif(typeofdef$$1==='string'){
returnautoCssTransition(def$$1)
}
}

varautoCssTransition=cached(function(name){
return{
enterClass:(name+"-enter"),
enterToClass:(name+"-enter-to"),
enterActiveClass:(name+"-enter-active"),
leaveClass:(name+"-leave"),
leaveToClass:(name+"-leave-to"),
leaveActiveClass:(name+"-leave-active")
}
});

varhasTransition=inBrowser&&!isIE9;
varTRANSITION='transition';
varANIMATION='animation';

Transitionproperty/eventsniffing
vartransitionProp='transition';
vartransitionEndEvent='transitionend';
varanimationProp='animation';
varanimationEndEvent='animationend';
if(hasTransition){
/*istanbulignoreif*/
if(window.ontransitionend===undefined&&
window.onwebkittransitionend!==undefined
){
transitionProp='WebkitTransition';
transitionEndEvent='webkitTransitionEnd';
}
if(window.onanimationend===undefined&&
window.onwebkitanimationend!==undefined
){
animationProp='WebkitAnimation';
animationEndEvent='webkitAnimationEnd';
}
}

bindingtowindowisnecessarytomakehotreloadworkinIEinstrictmode
varraf=inBrowser&&window.requestAnimationFrame
?window.requestAnimationFrame.bind(window)
:setTimeout;

functionnextFrame(fn){
raf(function(){
raf(fn);
});
}

functionaddTransitionClass(el,cls){
vartransitionClasses=el._transitionClasses||(el._transitionClasses=[]);
if(transitionClasses.indexOf(cls)<0){
transitionClasses.push(cls);
addClass(el,cls);
}
}

functionremoveTransitionClass(el,cls){
if(el._transitionClasses){
remove(el._transitionClasses,cls);
}
removeClass(el,cls);
}

functionwhenTransitionEnds(
el,
expectedType,
cb
){
varref=getTransitionInfo(el,expectedType);
vartype=ref.type;
vartimeout=ref.timeout;
varpropCount=ref.propCount;
if(!type){returncb()}
varevent=type===TRANSITION?transitionEndEvent:animationEndEvent;
varended=0;
varend=function(){
el.removeEventListener(event,onEnd);
cb();
};
varonEnd=function(e){
if(e.target===el){
if(++ended>=propCount){
end();
}
}
};
setTimeout(function(){
if(ended<propCount){
end();
}
},timeout+1);
el.addEventListener(event,onEnd);
}

vartransformRE=/\b(transform|all)(,|$)/;

functiongetTransitionInfo(el,expectedType){
varstyles=window.getComputedStyle(el);
vartransitionDelays=styles[transitionProp+'Delay'].split(',');
vartransitionDurations=styles[transitionProp+'Duration'].split(',');
vartransitionTimeout=getTimeout(transitionDelays,transitionDurations);
varanimationDelays=styles[animationProp+'Delay'].split(',');
varanimationDurations=styles[animationProp+'Duration'].split(',');
varanimationTimeout=getTimeout(animationDelays,animationDurations);

vartype;
vartimeout=0;
varpropCount=0;
/*istanbulignoreif*/
if(expectedType===TRANSITION){
if(transitionTimeout>0){
type=TRANSITION;
timeout=transitionTimeout;
propCount=transitionDurations.length;
}
}elseif(expectedType===ANIMATION){
if(animationTimeout>0){
type=ANIMATION;
timeout=animationTimeout;
propCount=animationDurations.length;
}
}else{
timeout=Math.max(transitionTimeout,animationTimeout);
type=timeout>0
?transitionTimeout>animationTimeout
?TRANSITION
:ANIMATION
:null;
propCount=type
?type===TRANSITION
?transitionDurations.length
:animationDurations.length
:0;
}
varhasTransform=
type===TRANSITION&&
transformRE.test(styles[transitionProp+'Property']);
return{
type:type,
timeout:timeout,
propCount:propCount,
hasTransform:hasTransform
}
}

functiongetTimeout(delays,durations){
/*istanbulignorenext*/
while(delays.length<durations.length){
delays=delays.concat(delays);
}

returnMath.max.apply(null,durations.map(function(d,i){
returntoMs(d)+toMs(delays[i])
}))
}

functiontoMs(s){
returnNumber(s.slice(0,-1))*1000
}

/**/

functionenter(vnode,toggleDisplay){
varel=vnode.elm;

callleavecallbacknow
if(isDef(el._leaveCb)){
el._leaveCb.cancelled=true;
el._leaveCb();
}

vardata=resolveTransition(vnode.data.transition);
if(isUndef(data)){
return
}

/*istanbulignoreif*/
if(isDef(el._enterCb)||el.nodeType!==1){
return
}

varcss=data.css;
vartype=data.type;
varenterClass=data.enterClass;
varenterToClass=data.enterToClass;
varenterActiveClass=data.enterActiveClass;
varappearClass=data.appearClass;
varappearToClass=data.appearToClass;
varappearActiveClass=data.appearActiveClass;
varbeforeEnter=data.beforeEnter;
varenter=data.enter;
varafterEnter=data.afterEnter;
varenterCancelled=data.enterCancelled;
varbeforeAppear=data.beforeAppear;
varappear=data.appear;
varafterAppear=data.afterAppear;
varappearCancelled=data.appearCancelled;
varduration=data.duration;

activeInstancewillalwaysbethe<transition>componentmanagingthis
transition.Oneedgecasetocheckiswhenthe<transition>isplaced
astherootnodeofachildcomponent.Inthatcaseweneedtocheck
<transition>'sparentforappearcheck.
varcontext=activeInstance;
vartransitionNode=activeInstance.$vnode;
while(transitionNode&&transitionNode.parent){
transitionNode=transitionNode.parent;
context=transitionNode.context;
}

varisAppear=!context._isMounted||!vnode.isRootInsert;

if(isAppear&&!appear&&appear!==''){
return
}

varstartClass=isAppear&&appearClass
?appearClass
:enterClass;
varactiveClass=isAppear&&appearActiveClass
?appearActiveClass
:enterActiveClass;
vartoClass=isAppear&&appearToClass
?appearToClass
:enterToClass;

varbeforeEnterHook=isAppear
?(beforeAppear||beforeEnter)
:beforeEnter;
varenterHook=isAppear
?(typeofappear==='function'?appear:enter)
:enter;
varafterEnterHook=isAppear
?(afterAppear||afterEnter)
:afterEnter;
varenterCancelledHook=isAppear
?(appearCancelled||enterCancelled)
:enterCancelled;

varexplicitEnterDuration=toNumber(
isObject(duration)
?duration.enter
:duration
);

if("development"!=='production'&&explicitEnterDuration!=null){
checkDuration(explicitEnterDuration,'enter',vnode);
}

varexpectsCSS=css!==false&&!isIE9;
varuserWantsControl=getHookArgumentsLength(enterHook);

varcb=el._enterCb=once(function(){
if(expectsCSS){
removeTransitionClass(el,toClass);
removeTransitionClass(el,activeClass);
}
if(cb.cancelled){
if(expectsCSS){
removeTransitionClass(el,startClass);
}
enterCancelledHook&&enterCancelledHook(el);
}else{
afterEnterHook&&afterEnterHook(el);
}
el._enterCb=null;
});

if(!vnode.data.show){
removependingleaveelementonenterbyinjectinganinserthook
mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){
varparent=el.parentNode;
varpendingNode=parent&&parent._pending&&parent._pending[vnode.key];
if(pendingNode&&
pendingNode.tag===vnode.tag&&
pendingNode.elm._leaveCb
){
pendingNode.elm._leaveCb();
}
enterHook&&enterHook(el,cb);
});
}

startentertransition
beforeEnterHook&&beforeEnterHook(el);
if(expectsCSS){
addTransitionClass(el,startClass);
addTransitionClass(el,activeClass);
nextFrame(function(){
addTransitionClass(el,toClass);
removeTransitionClass(el,startClass);
if(!cb.cancelled&&!userWantsControl){
if(isValidDuration(explicitEnterDuration)){
setTimeout(cb,explicitEnterDuration);
}else{
whenTransitionEnds(el,type,cb);
}
}
});
}

if(vnode.data.show){
toggleDisplay&&toggleDisplay();
enterHook&&enterHook(el,cb);
}

if(!expectsCSS&&!userWantsControl){
cb();
}
}

functionleave(vnode,rm){
varel=vnode.elm;

callentercallbacknow
if(isDef(el._enterCb)){
el._enterCb.cancelled=true;
el._enterCb();
}

vardata=resolveTransition(vnode.data.transition);
if(isUndef(data)){
returnrm()
}

/*istanbulignoreif*/
if(isDef(el._leaveCb)||el.nodeType!==1){
return
}

varcss=data.css;
vartype=data.type;
varleaveClass=data.leaveClass;
varleaveToClass=data.leaveToClass;
varleaveActiveClass=data.leaveActiveClass;
varbeforeLeave=data.beforeLeave;
varleave=data.leave;
varafterLeave=data.afterLeave;
varleaveCancelled=data.leaveCancelled;
vardelayLeave=data.delayLeave;
varduration=data.duration;

varexpectsCSS=css!==false&&!isIE9;
varuserWantsControl=getHookArgumentsLength(leave);

varexplicitLeaveDuration=toNumber(
isObject(duration)
?duration.leave
:duration
);

if("development"!=='production'&&isDef(explicitLeaveDuration)){
checkDuration(explicitLeaveDuration,'leave',vnode);
}

varcb=el._leaveCb=once(function(){
if(el.parentNode&&el.parentNode._pending){
el.parentNode._pending[vnode.key]=null;
}
if(expectsCSS){
removeTransitionClass(el,leaveToClass);
removeTransitionClass(el,leaveActiveClass);
}
if(cb.cancelled){
if(expectsCSS){
removeTransitionClass(el,leaveClass);
}
leaveCancelled&&leaveCancelled(el);
}else{
rm();
afterLeave&&afterLeave(el);
}
el._leaveCb=null;
});

if(delayLeave){
delayLeave(performLeave);
}else{
performLeave();
}

functionperformLeave(){
thedelayedleavemayhavealreadybeencancelled
if(cb.cancelled){
return
}
recordleavingelement
if(!vnode.data.show){
(el.parentNode._pending||(el.parentNode._pending={}))[(vnode.key)]=vnode;
}
beforeLeave&&beforeLeave(el);
if(expectsCSS){
addTransitionClass(el,leaveClass);
addTransitionClass(el,leaveActiveClass);
nextFrame(function(){
addTransitionClass(el,leaveToClass);
removeTransitionClass(el,leaveClass);
if(!cb.cancelled&&!userWantsControl){
if(isValidDuration(explicitLeaveDuration)){
setTimeout(cb,explicitLeaveDuration);
}else{
whenTransitionEnds(el,type,cb);
}
}
});
}
leave&&leave(el,cb);
if(!expectsCSS&&!userWantsControl){
cb();
}
}
}

onlyusedindevmode
functioncheckDuration(val,name,vnode){
if(typeofval!=='number'){
warn(
"<transition>explicit"+name+"durationisnotavalidnumber-"+
"got"+(JSON.stringify(val))+".",
vnode.context
);
}elseif(isNaN(val)){
warn(
"<transition>explicit"+name+"durationisNaN-"+
'thedurationexpressionmightbeincorrect.',
vnode.context
);
}
}

functionisValidDuration(val){
returntypeofval==='number'&&!isNaN(val)
}

/**
*Normalizeatransitionhook'sargumentlength.Thehookmaybe:
*-amergedhook(invoker)withtheoriginalin.fns
*-awrappedcomponentmethod(check._length)
*-aplainfunction(.length)
*/
functiongetHookArgumentsLength(fn){
if(isUndef(fn)){
returnfalse
}
varinvokerFns=fn.fns;
if(isDef(invokerFns)){
invoker
returngetHookArgumentsLength(
Array.isArray(invokerFns)
?invokerFns[0]
:invokerFns
)
}else{
return(fn._length||fn.length)>1
}
}

function_enter(_,vnode){
if(vnode.data.show!==true){
enter(vnode);
}
}

vartransition=inBrowser?{
create:_enter,
activate:_enter,
remove:functionremove$$1(vnode,rm){
/*istanbulignoreelse*/
if(vnode.data.show!==true){
leave(vnode,rm);
}else{
rm();
}
}
}:{};

varplatformModules=[
attrs,
klass,
events,
domProps,
style,
transition
];

/**/

thedirectivemoduleshouldbeappliedlast,afterall
built-inmoduleshavebeenapplied.
varmodules=platformModules.concat(baseModules);

varpatch=createPatchFunction({nodeOps:nodeOps,modules:modules});

/**
*Nottypecheckingthisfilebecauseflowdoesn'tlikeattaching
*propertiestoElements.
*/

varisTextInputType=makeMap('text,number,password,search,email,tel,url');

/*istanbulignoreif*/
if(isIE9){
http:www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener('selectionchange',function(){
varel=document.activeElement;
if(el&&el.vmodel){
trigger(el,'input');
}
});
}

varmodel$1={
inserted:functioninserted(el,binding,vnode){
if(vnode.tag==='select'){
varcb=function(){
setSelected(el,binding,vnode.context);
};
cb();
/*istanbulignoreif*/
if(isIE||isEdge){
setTimeout(cb,0);
}
el._vOptions=[].map.call(el.options,getValue);
}elseif(vnode.tag==='textarea'||isTextInputType(el.type)){
el._vModifiers=binding.modifiers;
if(!binding.modifiers.lazy){
Safari<10.2&UIWebViewdoesn'tfirecompositionendwhen
switchingfocusbeforeconfirmingcompositionchoice
thisalsofixestheissuewheresomebrowserse.g.iOSChrome
fires"change"insteadof"input"onautocomplete.
el.addEventListener('change',onCompositionEnd);
if(!isAndroid){
el.addEventListener('compositionstart',onCompositionStart);
el.addEventListener('compositionend',onCompositionEnd);
}
/*istanbulignoreif*/
if(isIE9){
el.vmodel=true;
}
}
}
},
componentUpdated:functioncomponentUpdated(el,binding,vnode){
if(vnode.tag==='select'){
setSelected(el,binding,vnode.context);
incasetheoptionsrenderedbyv-forhavechanged,
it'spossiblethatthevalueisout-of-syncwiththerenderedoptions.
detectsuchcasesandfilteroutvaluesthatnolongerhasamatching
optionintheDOM.
varprevOptions=el._vOptions;
varcurOptions=el._vOptions=[].map.call(el.options,getValue);
if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){
trigger(el,'change');
}
}
}
};

functionsetSelected(el,binding,vm){
varvalue=binding.value;
varisMultiple=el.multiple;
if(isMultiple&&!Array.isArray(value)){
"development"!=='production'&&warn(
"<selectmultiplev-model=\""+(binding.expression)+"\">"+
"expectsanArrayvalueforitsbinding,butgot"+(Object.prototype.toString.call(value).slice(8,-1)),
vm
);
return
}
varselected,option;
for(vari=0,l=el.options.length;i<l;i++){
option=el.options[i];
if(isMultiple){
selected=looseIndexOf(value,getValue(option))>-1;
if(option.selected!==selected){
option.selected=selected;
}
}else{
if(looseEqual(getValue(option),value)){
if(el.selectedIndex!==i){
el.selectedIndex=i;
}
return
}
}
}
if(!isMultiple){
el.selectedIndex=-1;
}
}

functiongetValue(option){
return'_value'inoption
?option._value
:option.value
}

functiononCompositionStart(e){
e.target.composing=true;
}

functiononCompositionEnd(e){
preventtriggeringaninputeventfornoreason
if(!e.target.composing){return}
e.target.composing=false;
trigger(e.target,'input');
}

functiontrigger(el,type){
vare=document.createEvent('HTMLEvents');
e.initEvent(type,true,true);
el.dispatchEvent(e);
}

/**/

recursivelysearchforpossibletransitiondefinedinsidethecomponentroot
functionlocateNode(vnode){
returnvnode.componentInstance&&(!vnode.data||!vnode.data.transition)
?locateNode(vnode.componentInstance._vnode)
:vnode
}

varshow={
bind:functionbind(el,ref,vnode){
varvalue=ref.value;

vnode=locateNode(vnode);
vartransition$$1=vnode.data&&vnode.data.transition;
varoriginalDisplay=el.__vOriginalDisplay=
el.style.display==='none'?'':el.style.display;
if(value&&transition$$1){
vnode.data.show=true;
enter(vnode,function(){
el.style.display=originalDisplay;
});
}else{
el.style.display=value?originalDisplay:'none';
}
},

update:functionupdate(el,ref,vnode){
varvalue=ref.value;
varoldValue=ref.oldValue;

/*istanbulignoreif*/
if(value===oldValue){return}
vnode=locateNode(vnode);
vartransition$$1=vnode.data&&vnode.data.transition;
if(transition$$1){
vnode.data.show=true;
if(value){
enter(vnode,function(){
el.style.display=el.__vOriginalDisplay;
});
}else{
leave(vnode,function(){
el.style.display='none';
});
}
}else{
el.style.display=value?el.__vOriginalDisplay:'none';
}
},

unbind:functionunbind(
el,
binding,
vnode,
oldVnode,
isDestroy
){
if(!isDestroy){
el.style.display=el.__vOriginalDisplay;
}
}
};

varplatformDirectives={
model:model$1,
show:show
};

/**/

Providestransitionsupportforasingleelement/component.
supportstransitionmode(out-in/in-out)

vartransitionProps={
name:String,
appear:Boolean,
css:Boolean,
mode:String,
type:String,
enterClass:String,
leaveClass:String,
enterToClass:String,
leaveToClass:String,
enterActiveClass:String,
leaveActiveClass:String,
appearClass:String,
appearActiveClass:String,
appearToClass:String,
duration:[Number,String,Object]
};

incasethechildisalsoanabstractcomponent,e.g.<keep-alive>
wewanttorecursivelyretrievetherealcomponenttoberendered
functiongetRealChild(vnode){
varcompOptions=vnode&&vnode.componentOptions;
if(compOptions&&compOptions.Ctor.options.abstract){
returngetRealChild(getFirstComponentChild(compOptions.children))
}else{
returnvnode
}
}

functionextractTransitionData(comp){
vardata={};
varoptions=comp.$options;
props
for(varkeyinoptions.propsData){
data[key]=comp[key];
}
events.
extractlistenersandpassthemdirectlytothetransitionmethods
varlisteners=options._parentListeners;
for(varkey$1inlisteners){
data[camelize(key$1)]=listeners[key$1];
}
returndata
}

functionplaceholder(h,rawChild){
if(/\d-keep-alive$/.test(rawChild.tag)){
returnh('keep-alive',{
props:rawChild.componentOptions.propsData
})
}
}

functionhasParentTransition(vnode){
while((vnode=vnode.parent)){
if(vnode.data.transition){
returntrue
}
}
}

functionisSameChild(child,oldChild){
returnoldChild.key===child.key&&oldChild.tag===child.tag
}

functionisAsyncPlaceholder(node){
returnnode.isComment&&node.asyncFactory
}

varTransition={
name:'transition',
props:transitionProps,
abstract:true,

render:functionrender(h){
varthis$1=this;

varchildren=this.$options._renderChildren;
if(!children){
return
}

filterouttextnodes(possiblewhitespaces)
children=children.filter(function(c){returnc.tag||isAsyncPlaceholder(c);});
/*istanbulignoreif*/
if(!children.length){
return
}

warnmultipleelements
if("development"!=='production'&&children.length>1){
warn(
'<transition>canonlybeusedonasingleelement.Use'+
'<transition-group>forlists.',
this.$parent
);
}

varmode=this.mode;

warninvalidmode
if("development"!=='production'&&
mode&&mode!=='in-out'&&mode!=='out-in'
){
warn(
'invalid<transition>mode:'+mode,
this.$parent
);
}

varrawChild=children[0];

ifthisisacomponentrootnodeandthecomponent's
parentcontainernodealsohastransition,skip.
if(hasParentTransition(this.$vnode)){
returnrawChild
}

applytransitiondatatochild
usegetRealChild()toignoreabstractcomponentse.g.keep-alive
varchild=getRealChild(rawChild);
/*istanbulignoreif*/
if(!child){
returnrawChild
}

if(this._leaving){
returnplaceholder(h,rawChild)
}

ensureakeythatisuniquetothevnodetypeandtothistransition
componentinstance.Thiskeywillbeusedtoremovependingleavingnodes
duringentering.
varid="__transition-"+(this._uid)+"-";
child.key=child.key==null
?child.isComment
?id+'comment'
:id+child.tag
:isPrimitive(child.key)
?(String(child.key).indexOf(id)===0?child.key:id+child.key)
:child.key;

vardata=(child.data||(child.data={})).transition=extractTransitionData(this);
varoldRawChild=this._vnode;
varoldChild=getRealChild(oldRawChild);

markv-show
sothatthetransitionmodulecanhandoverthecontroltothedirective
if(child.data.directives&&child.data.directives.some(function(d){returnd.name==='show';})){
child.data.show=true;
}

if(
oldChild&&
oldChild.data&&
!isSameChild(child,oldChild)&&
!isAsyncPlaceholder(oldChild)
){
replaceoldchildtransitiondatawithfreshone
importantfordynamictransitions!
varoldData=oldChild&&(oldChild.data.transition=extend({},data));
handletransitionmode
if(mode==='out-in'){
returnplaceholdernodeandqueueupdatewhenleavefinishes
this._leaving=true;
mergeVNodeHook(oldData,'afterLeave',function(){
this$1._leaving=false;
this$1.$forceUpdate();
});
returnplaceholder(h,rawChild)
}elseif(mode==='in-out'){
if(isAsyncPlaceholder(child)){
returnoldRawChild
}
vardelayedLeave;
varperformLeave=function(){delayedLeave();};
mergeVNodeHook(data,'afterEnter',performLeave);
mergeVNodeHook(data,'enterCancelled',performLeave);
mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});
}
}

returnrawChild
}
};

/**/

Providestransitionsupportforlistitems.
supportsmovetransitionsusingtheFLIPtechnique.

Becausethevdom'schildrenupdatealgorithmis"unstable"-i.e.
itdoesn'tguaranteetherelativepositioningofremovedelements,
weforcetransition-grouptoupdateitschildrenintotwopasses:
inthefirstpass,weremoveallnodesthatneedtoberemoved,
triggeringtheirleavingtransition;inthesecondpass,weinsert/move
intothefinaldesiredstate.Thiswayinthesecondpassremoved
nodeswillremainwheretheyshouldbe.

varprops=extend({
tag:String,
moveClass:String
},transitionProps);

deleteprops.mode;

varTransitionGroup={
props:props,

render:functionrender(h){
vartag=this.tag||this.$vnode.data.tag||'span';
varmap=Object.create(null);
varprevChildren=this.prevChildren=this.children;
varrawChildren=this.$slots.default||[];
varchildren=this.children=[];
vartransitionData=extractTransitionData(this);

for(vari=0;i<rawChildren.length;i++){
varc=rawChildren[i];
if(c.tag){
if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){
children.push(c);
map[c.key]=c
;(c.data||(c.data={})).transition=transitionData;
}else{
varopts=c.componentOptions;
varname=opts?(opts.Ctor.options.name||opts.tag||''):c.tag;
warn(("<transition-group>childrenmustbekeyed:<"+name+">"));
}
}
}

if(prevChildren){
varkept=[];
varremoved=[];
for(vari$1=0;i$1<prevChildren.length;i$1++){
varc$1=prevChildren[i$1];
c$1.data.transition=transitionData;
c$1.data.pos=c$1.elm.getBoundingClientRect();
if(map[c$1.key]){
kept.push(c$1);
}else{
removed.push(c$1);
}
}
this.kept=h(tag,null,kept);
this.removed=removed;
}

returnh(tag,null,children)
},

beforeUpdate:functionbeforeUpdate(){
forceremovingpass
this.__patch__(
this._vnode,
this.kept,
false,hydrating
trueremoveOnly(!important,avoidsunnecessarymoves)
);
this._vnode=this.kept;
},

updated:functionupdated(){
varchildren=this.prevChildren;
varmoveClass=this.moveClass||((this.name||'v')+'-move');
if(!children.length||!this.hasMove(children[0].elm,moveClass)){
return
}

wedividetheworkintothreeloopstoavoidmixingDOMreadsandwrites
ineachiteration-whichhelpspreventlayoutthrashing.
children.forEach(callPendingCbs);
children.forEach(recordPosition);
children.forEach(applyTranslation);

forcereflowtoputeverythinginposition
varbody=document.body;
varf=body.offsetHeight;eslint-disable-line

children.forEach(function(c){
if(c.data.moved){
varel=c.elm;
vars=el.style;
addTransitionClass(el,moveClass);
s.transform=s.WebkitTransform=s.transitionDuration='';
el.addEventListener(transitionEndEvent,el._moveCb=functioncb(e){
if(!e||/transform$/.test(e.propertyName)){
el.removeEventListener(transitionEndEvent,cb);
el._moveCb=null;
removeTransitionClass(el,moveClass);
}
});
}
});
},

methods:{
hasMove:functionhasMove(el,moveClass){
/*istanbulignoreif*/
if(!hasTransition){
returnfalse
}
/*istanbulignoreif*/
if(this._hasMove){
returnthis._hasMove
}
Detectwhetheranelementwiththemoveclassappliedhas
CSStransitions.Sincetheelementmaybeinsideanentering
transitionatthisverymoment,wemakeacloneofitandremove
allothertransitionclassesappliedtoensureonlythemoveclass
isapplied.
varclone=el.cloneNode();
if(el._transitionClasses){
el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});
}
addClass(clone,moveClass);
clone.style.display='none';
this.$el.appendChild(clone);
varinfo=getTransitionInfo(clone);
this.$el.removeChild(clone);
return(this._hasMove=info.hasTransform)
}
}
};

functioncallPendingCbs(c){
/*istanbulignoreif*/
if(c.elm._moveCb){
c.elm._moveCb();
}
/*istanbulignoreif*/
if(c.elm._enterCb){
c.elm._enterCb();
}
}

functionrecordPosition(c){
c.data.newPos=c.elm.getBoundingClientRect();
}

functionapplyTranslation(c){
varoldPos=c.data.pos;
varnewPos=c.data.newPos;
vardx=oldPos.left-newPos.left;
vardy=oldPos.top-newPos.top;
if(dx||dy){
c.data.moved=true;
vars=c.elm.style;
s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";
s.transitionDuration='0s';
}
}

varplatformComponents={
Transition:Transition,
TransitionGroup:TransitionGroup
};

/**/

installplatformspecificutils
Vue$3.config.mustUseProp=mustUseProp;
Vue$3.config.isReservedTag=isReservedTag;
Vue$3.config.isReservedAttr=isReservedAttr;
Vue$3.config.getTagNamespace=getTagNamespace;
Vue$3.config.isUnknownElement=isUnknownElement;

installplatformruntimedirectives&components
extend(Vue$3.options.directives,platformDirectives);
extend(Vue$3.options.components,platformComponents);

installplatformpatchfunction
Vue$3.prototype.__patch__=inBrowser?patch:noop;

publicmountmethod
Vue$3.prototype.$mount=function(
el,
hydrating
){
el=el&&inBrowser?query(el):undefined;
returnmountComponent(this,el,hydrating)
};

devtoolsglobalhook
/*istanbulignorenext*/
setTimeout(function(){
if(config.devtools){
if(devtools){
devtools.emit('init',Vue$3);
}elseif("development"!=='production'&&isChrome){
console[console.info?'info':'log'](
'DownloadtheVueDevtoolsextensionforabetterdevelopmentexperience:\n'+
'https:github.com/vuejs/vue-devtools'
);
}
}
if("development"!=='production'&&
config.productionTip!==false&&
inBrowser&&typeofconsole!=='undefined'
){
console[console.info?'info':'log'](
"YouarerunningVueindevelopmentmode.\n"+
"Makesuretoturnonproductionmodewhendeployingforproduction.\n"+
"Seemoretipsathttps:vuejs.org/guide/deployment.html"
);
}
},0);

/**/

checkwhethercurrentbrowserencodesacharinsideattributevalues
functionshouldDecode(content,encoded){
vardiv=document.createElement('div');
div.innerHTML="<diva=\""+content+"\"/>";
returndiv.innerHTML.indexOf(encoded)>0
}

#3663
IEencodesnewlinesinsideattributevalueswhileotherbrowsersdon't
varshouldDecodeNewlines=inBrowser?shouldDecode('\n','&#10;'):false;

/**/

vardefaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;
varregexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;

varbuildRegex=cached(function(delimiters){
varopen=delimiters[0].replace(regexEscapeRE,'\\$&');
varclose=delimiters[1].replace(regexEscapeRE,'\\$&');
returnnewRegExp(open+'((?:.|\\n)+?)'+close,'g')
});

functionparseText(
text,
delimiters
){
vartagRE=delimiters?buildRegex(delimiters):defaultTagRE;
if(!tagRE.test(text)){
return
}
vartokens=[];
varlastIndex=tagRE.lastIndex=0;
varmatch,index;
while((match=tagRE.exec(text))){
index=match.index;
pushtexttoken
if(index>lastIndex){
tokens.push(JSON.stringify(text.slice(lastIndex,index)));
}
tagtoken
varexp=parseFilters(match[1].trim());
tokens.push(("_s("+exp+")"));
lastIndex=index+match[0].length;
}
if(lastIndex<text.length){
tokens.push(JSON.stringify(text.slice(lastIndex)));
}
returntokens.join('+')
}

/**/

functiontransformNode(el,options){
varwarn=options.warn||baseWarn;
varstaticClass=getAndRemoveAttr(el,'class');
if("development"!=='production'&&staticClass){
varexpression=parseText(staticClass,options.delimiters);
if(expression){
warn(
"class=\""+staticClass+"\":"+
'Interpolationinsideattributeshasbeenremoved.'+
'Usev-bindorthecolonshorthandinstead.Forexample,'+
'insteadof<divclass="{{val}}">,use<div:class="val">.'
);
}
}
if(staticClass){
el.staticClass=JSON.stringify(staticClass);
}
varclassBinding=getBindingAttr(el,'class',false/*getStatic*/);
if(classBinding){
el.classBinding=classBinding;
}
}

functiongenData(el){
vardata='';
if(el.staticClass){
data+="staticClass:"+(el.staticClass)+",";
}
if(el.classBinding){
data+="class:"+(el.classBinding)+",";
}
returndata
}

varklass$1={
staticKeys:['staticClass'],
transformNode:transformNode,
genData:genData
};

/**/

functiontransformNode$1(el,options){
varwarn=options.warn||baseWarn;
varstaticStyle=getAndRemoveAttr(el,'style');
if(staticStyle){
/*istanbulignoreif*/
{
varexpression=parseText(staticStyle,options.delimiters);
if(expression){
warn(
"style=\""+staticStyle+"\":"+
'Interpolationinsideattributeshasbeenremoved.'+
'Usev-bindorthecolonshorthandinstead.Forexample,'+
'insteadof<divstyle="{{val}}">,use<div:style="val">.'
);
}
}
el.staticStyle=JSON.stringify(parseStyleText(staticStyle));
}

varstyleBinding=getBindingAttr(el,'style',false/*getStatic*/);
if(styleBinding){
el.styleBinding=styleBinding;
}
}

functiongenData$1(el){
vardata='';
if(el.staticStyle){
data+="staticStyle:"+(el.staticStyle)+",";
}
if(el.styleBinding){
data+="style:("+(el.styleBinding)+"),";
}
returndata
}

varstyle$1={
staticKeys:['staticStyle'],
transformNode:transformNode$1,
genData:genData$1
};

varmodules$1=[
klass$1,
style$1
];

/**/

functiontext(el,dir){
if(dir.value){
addProp(el,'textContent',("_s("+(dir.value)+")"));
}
}

/**/

functionhtml(el,dir){
if(dir.value){
addProp(el,'innerHTML',("_s("+(dir.value)+")"));
}
}

vardirectives$1={
model:model,
text:text,
html:html
};

/**/

varisUnaryTag=makeMap(
'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+
'link,meta,param,source,track,wbr'
);

Elementsthatyoucan,intentionally,leaveopen
(andwhichclosethemselves)
varcanBeLeftOpenTag=makeMap(
'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

HTML5tagshttps:html.spec.whatwg.org/multipage/indices.html#elements-3
PhrasingContenthttps:html.spec.whatwg.org/multipage/dom.html#phrasing-content
varisNonPhrasingTag=makeMap(
'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+
'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+
'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+
'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+
'title,tr,track'
);

/**/

varbaseOptions={
expectHTML:true,
modules:modules$1,
directives:directives$1,
isPreTag:isPreTag,
isUnaryTag:isUnaryTag,
mustUseProp:mustUseProp,
canBeLeftOpenTag:canBeLeftOpenTag,
isReservedTag:isReservedTag,
getTagNamespace:getTagNamespace,
staticKeys:genStaticKeys(modules$1)
};

/**/

vardecoder;

varhe={
decode:functiondecode(html){
decoder=decoder||document.createElement('div');
decoder.innerHTML=html;
returndecoder.textContent
}
};

/**
*Nottype-checkingthisfilebecauseit'smostlyvendorcode.
*/

/*!
*HTMLParserByJohnResig(ejohn.org)
*ModifiedbyJuriy"kangax"Zaytsev
*OriginalcodebyErikArvidsson,MozillaPublicLicense
*http:erik.eae.net/simplehtmlparser/simplehtmlparser.js
*/

RegularExpressionsforparsingtagsandattributes
varsingleAttrIdentifier=/([^\s"'<>/=]+)/;
varsingleAttrAssign=/(?:=)/;
varsingleAttrValues=[
attrvaluedoublequotes
/"([^"]*)"+/.source,
attrvalue,singlequotes
/'([^']*)'+/.source,
attrvalue,noquotes
/([^\s"'=<>`]+)/.source
];
varattribute=newRegExp(
'^\\s*'+singleAttrIdentifier.source+
'(?:\\s*('+singleAttrAssign.source+')'+
'\\s*(?:'+singleAttrValues.join('|')+'))?'
);

couldusehttps:www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
butforVuetemplateswecanenforceasimplecharset
varncname='[a-zA-Z_][\\w\\-\\.]*';
varqnameCapture='((?:'+ncname+'\\:)?'+ncname+')';
varstartTagOpen=newRegExp('^<'+qnameCapture);
varstartTagClose=/^\s*(\/?)>/;
varendTag=newRegExp('^<\\/'+qnameCapture+'[^>]*>');
vardoctype=/^<!DOCTYPE[^>]+>/i;
varcomment=/^<!--/;
varconditionalComment=/^<!\[/;

varIS_REGEX_CAPTURING_BROKEN=false;
'x'.replace(/x(.)?/g,function(m,g){
IS_REGEX_CAPTURING_BROKEN=g==='';
});

SpecialElements(cancontainanything)
varisPlainTextElement=makeMap('script,style,textarea',true);
varreCache={};

vardecodingMap={
'&lt;':'<',
'&gt;':'>',
'&quot;':'"',
'&amp;':'&',
'&#10;':'\n'
};
varencodedAttr=/&(?:lt|gt|quot|amp);/g;
varencodedAttrWithNewLines=/&(?:lt|gt|quot|amp|#10);/g;

#5992
varisIgnoreNewlineTag=makeMap('pre,textarea',true);
varshouldIgnoreFirstNewline=function(tag,html){returntag&&isIgnoreNewlineTag(tag)&&html[0]==='\n';};

functiondecodeAttr(value,shouldDecodeNewlines){
varre=shouldDecodeNewlines?encodedAttrWithNewLines:encodedAttr;
returnvalue.replace(re,function(match){returndecodingMap[match];})
}

functionparseHTML(html,options){
varstack=[];
varexpectHTML=options.expectHTML;
varisUnaryTag$$1=options.isUnaryTag||no;
varcanBeLeftOpenTag$$1=options.canBeLeftOpenTag||no;
varindex=0;
varlast,lastTag;
while(html){
last=html;
Makesurewe'renotinaplaintextcontentelementlikescript/style
if(!lastTag||!isPlainTextElement(lastTag)){
vartextEnd=html.indexOf('<');
if(textEnd===0){
Comment:
if(comment.test(html)){
varcommentEnd=html.indexOf('-->');

if(commentEnd>=0){
if(options.shouldKeepComment){
options.comment(html.substring(4,commentEnd));
}
advance(commentEnd+3);
continue
}
}

http:en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
if(conditionalComment.test(html)){
varconditionalEnd=html.indexOf(']>');

if(conditionalEnd>=0){
advance(conditionalEnd+2);
continue
}
}

Doctype:
vardoctypeMatch=html.match(doctype);
if(doctypeMatch){
advance(doctypeMatch[0].length);
continue
}

Endtag:
varendTagMatch=html.match(endTag);
if(endTagMatch){
varcurIndex=index;
advance(endTagMatch[0].length);
parseEndTag(endTagMatch[1],curIndex,index);
continue
}

Starttag:
varstartTagMatch=parseStartTag();
if(startTagMatch){
handleStartTag(startTagMatch);
if(shouldIgnoreFirstNewline(lastTag,html)){
advance(1);
}
continue
}
}

vartext=(void0),rest=(void0),next=(void0);
if(textEnd>=0){
rest=html.slice(textEnd);
while(
!endTag.test(rest)&&
!startTagOpen.test(rest)&&
!comment.test(rest)&&
!conditionalComment.test(rest)
){
<inplaintext,beforgivingandtreatitastext
next=rest.indexOf('<',1);
if(next<0){break}
textEnd+=next;
rest=html.slice(textEnd);
}
text=html.substring(0,textEnd);
advance(textEnd);
}

if(textEnd<0){
text=html;
html='';
}

if(options.chars&&text){
options.chars(text);
}
}else{
varendTagLength=0;
varstackedTag=lastTag.toLowerCase();
varreStackedTag=reCache[stackedTag]||(reCache[stackedTag]=newRegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));
varrest$1=html.replace(reStackedTag,function(all,text,endTag){
endTagLength=endTag.length;
if(!isPlainTextElement(stackedTag)&&stackedTag!=='noscript'){
text=text
.replace(/<!--([\s\S]*?)-->/g,'$1')
.replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');
}
if(shouldIgnoreFirstNewline(stackedTag,text)){
text=text.slice(1);
}
if(options.chars){
options.chars(text);
}
return''
});
index+=html.length-rest$1.length;
html=rest$1;
parseEndTag(stackedTag,index-endTagLength,index);
}

if(html===last){
options.chars&&options.chars(html);
if("development"!=='production'&&!stack.length&&options.warn){
options.warn(("Mal-formattedtagatendoftemplate:\""+html+"\""));
}
break
}
}

Cleanupanyremainingtags
parseEndTag();

functionadvance(n){
index+=n;
html=html.substring(n);
}

functionparseStartTag(){
varstart=html.match(startTagOpen);
if(start){
varmatch={
tagName:start[1],
attrs:[],
start:index
};
advance(start[0].length);
varend,attr;
while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){
advance(attr[0].length);
match.attrs.push(attr);
}
if(end){
match.unarySlash=end[1];
advance(end[0].length);
match.end=index;
returnmatch
}
}
}

functionhandleStartTag(match){
vartagName=match.tagName;
varunarySlash=match.unarySlash;

if(expectHTML){
if(lastTag==='p'&&isNonPhrasingTag(tagName)){
parseEndTag(lastTag);
}
if(canBeLeftOpenTag$$1(tagName)&&lastTag===tagName){
parseEndTag(tagName);
}
}

varunary=isUnaryTag$$1(tagName)||!!unarySlash;

varl=match.attrs.length;
varattrs=newArray(l);
for(vari=0;i<l;i++){
varargs=match.attrs[i];
hackishworkaroundFFbughttps:bugzilla.mozilla.org/show_bug.cgi?id=369778
if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){
if(args[3]===''){deleteargs[3];}
if(args[4]===''){deleteargs[4];}
if(args[5]===''){deleteargs[5];}
}
varvalue=args[3]||args[4]||args[5]||'';
attrs[i]={
name:args[1],
value:decodeAttr(
value,
options.shouldDecodeNewlines
)
};
}

if(!unary){
stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs});
lastTag=tagName;
}

if(options.start){
options.start(tagName,attrs,unary,match.start,match.end);
}
}

functionparseEndTag(tagName,start,end){
varpos,lowerCasedTagName;
if(start==null){start=index;}
if(end==null){end=index;}

if(tagName){
lowerCasedTagName=tagName.toLowerCase();
}

Findtheclosestopenedtagofthesametype
if(tagName){
for(pos=stack.length-1;pos>=0;pos--){
if(stack[pos].lowerCasedTag===lowerCasedTagName){
break
}
}
}else{
Ifnotagnameisprovided,cleanshop
pos=0;
}

if(pos>=0){
Closealltheopenelements,upthestack
for(vari=stack.length-1;i>=pos;i--){
if("development"!=='production'&&
(i>pos||!tagName)&&
options.warn
){
options.warn(
("tag<"+(stack[i].tag)+">hasnomatchingendtag.")
);
}
if(options.end){
options.end(stack[i].tag,start,end);
}
}

Removetheopenelementsfromthestack
stack.length=pos;
lastTag=pos&&stack[pos-1].tag;
}elseif(lowerCasedTagName==='br'){
if(options.start){
options.start(tagName,[],true,start,end);
}
}elseif(lowerCasedTagName==='p'){
if(options.start){
options.start(tagName,[],false,start,end);
}
if(options.end){
options.end(tagName,start,end);
}
}
}
}

/**/

varonRE=/^@|^v-on:/;
vardirRE=/^v-|^@|^:/;
varforAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/;
varforIteratorRE=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

varargRE=/:(.*)$/;
varbindRE=/^:|^v-bind:/;
varmodifierRE=/\.[^.]+/g;

vardecodeHTMLCached=cached(he.decode);

configurablestate
varwarn$2;
vardelimiters;
vartransforms;
varpreTransforms;
varpostTransforms;
varplatformIsPreTag;
varplatformMustUseProp;
varplatformGetTagNamespace;

/**
*ConvertHTMLstringtoAST.
*/
functionparse(
template,
options
){
warn$2=options.warn||baseWarn;

platformIsPreTag=options.isPreTag||no;
platformMustUseProp=options.mustUseProp||no;
platformGetTagNamespace=options.getTagNamespace||no;

transforms=pluckModuleFunction(options.modules,'transformNode');
preTransforms=pluckModuleFunction(options.modules,'preTransformNode');
postTransforms=pluckModuleFunction(options.modules,'postTransformNode');

delimiters=options.delimiters;

varstack=[];
varpreserveWhitespace=options.preserveWhitespace!==false;
varroot;
varcurrentParent;
varinVPre=false;
varinPre=false;
varwarned=false;

functionwarnOnce(msg){
if(!warned){
warned=true;
warn$2(msg);
}
}

functionendPre(element){
checkprestate
if(element.pre){
inVPre=false;
}
if(platformIsPreTag(element.tag)){
inPre=false;
}
}

parseHTML(template,{
warn:warn$2,
expectHTML:options.expectHTML,
isUnaryTag:options.isUnaryTag,
canBeLeftOpenTag:options.canBeLeftOpenTag,
shouldDecodeNewlines:options.shouldDecodeNewlines,
shouldKeepComment:options.comments,
start:functionstart(tag,attrs,unary){
checknamespace.
inheritparentnsifthereisone
varns=(currentParent&&currentParent.ns)||platformGetTagNamespace(tag);

handleIEsvgbug
/*istanbulignoreif*/
if(isIE&&ns==='svg'){
attrs=guardIESVGBug(attrs);
}

varelement={
type:1,
tag:tag,
attrsList:attrs,
attrsMap:makeAttrsMap(attrs),
parent:currentParent,
children:[]
};
if(ns){
element.ns=ns;
}

if(isForbiddenTag(element)&&!isServerRendering()){
element.forbidden=true;
"development"!=='production'&&warn$2(
'Templatesshouldonlyberesponsibleformappingthestatetothe'+
'UI.Avoidplacingtagswithside-effectsinyourtemplates,suchas'+
"<"+tag+">"+',astheywillnotbeparsed.'
);
}

applypre-transforms
for(vari=0;i<preTransforms.length;i++){
preTransforms[i](element,options);
}

if(!inVPre){
processPre(element);
if(element.pre){
inVPre=true;
}
}
if(platformIsPreTag(element.tag)){
inPre=true;
}
if(inVPre){
processRawAttrs(element);
}else{
processFor(element);
processIf(element);
processOnce(element);
processKey(element);

determinewhetherthisisaplainelementafter
removingstructuralattributes
element.plain=!element.key&&!attrs.length;

processRef(element);
processSlot(element);
processComponent(element);
for(vari$1=0;i$1<transforms.length;i$1++){
transforms[i$1](element,options);
}
processAttrs(element);
}

functioncheckRootConstraints(el){
{
if(el.tag==='slot'||el.tag==='template'){
warnOnce(
"Cannotuse<"+(el.tag)+">ascomponentrootelementbecauseitmay"+
'containmultiplenodes.'
);
}
if(el.attrsMap.hasOwnProperty('v-for')){
warnOnce(
'Cannotusev-foronstatefulcomponentrootelementbecause'+
'itrendersmultipleelements.'
);
}
}
}

treemanagement
if(!root){
root=element;
checkRootConstraints(root);
}elseif(!stack.length){
allowrootelementswithv-if,v-else-ifandv-else
if(root.if&&(element.elseif||element.else)){
checkRootConstraints(element);
addIfCondition(root,{
exp:element.elseif,
block:element
});
}else{
warnOnce(
"Componenttemplateshouldcontainexactlyonerootelement."+
"Ifyouareusingv-ifonmultipleelements,"+
"usev-else-iftochaintheminstead."
);
}
}
if(currentParent&&!element.forbidden){
if(element.elseif||element.else){
processIfConditions(element,currentParent);
}elseif(element.slotScope){scopedslot
currentParent.plain=false;
varname=element.slotTarget||'"default"';(currentParent.scopedSlots||(currentParent.scopedSlots={}))[name]=element;
}else{
currentParent.children.push(element);
element.parent=currentParent;
}
}
if(!unary){
currentParent=element;
stack.push(element);
}else{
endPre(element);
}
applypost-transforms
for(vari$2=0;i$2<postTransforms.length;i$2++){
postTransforms[i$2](element,options);
}
},

end:functionend(){
removetrailingwhitespace
varelement=stack[stack.length-1];
varlastNode=element.children[element.children.length-1];
if(lastNode&&lastNode.type===3&&lastNode.text===''&&!inPre){
element.children.pop();
}
popstack
stack.length-=1;
currentParent=stack[stack.length-1];
endPre(element);
},

chars:functionchars(text){
if(!currentParent){
{
if(text===template){
warnOnce(
'Componenttemplaterequiresarootelement,ratherthanjusttext.'
);
}elseif((text=text.trim())){
warnOnce(
("text\""+text+"\"outsiderootelementwillbeignored.")
);
}
}
return
}
IEtextareaplaceholderbug
/*istanbulignoreif*/
if(isIE&&
currentParent.tag==='textarea'&&
currentParent.attrsMap.placeholder===text
){
return
}
varchildren=currentParent.children;
text=inPre||text.trim()
?isTextTag(currentParent)?text:decodeHTMLCached(text)
onlypreservewhitespaceifitsnotrightafterastartingtag
:preserveWhitespace&&children.length?'':'';
if(text){
varexpression;
if(!inVPre&&text!==''&&(expression=parseText(text,delimiters))){
children.push({
type:2,
expression:expression,
text:text
});
}elseif(text!==''||!children.length||children[children.length-1].text!==''){
children.push({
type:3,
text:text
});
}
}
},
comment:functioncomment(text){
currentParent.children.push({
type:3,
text:text,
isComment:true
});
}
});
returnroot
}

functionprocessPre(el){
if(getAndRemoveAttr(el,'v-pre')!=null){
el.pre=true;
}
}

functionprocessRawAttrs(el){
varl=el.attrsList.length;
if(l){
varattrs=el.attrs=newArray(l);
for(vari=0;i<l;i++){
attrs[i]={
name:el.attrsList[i].name,
value:JSON.stringify(el.attrsList[i].value)
};
}
}elseif(!el.pre){
nonrootnodeinpreblockswithnoattributes
el.plain=true;
}
}

functionprocessKey(el){
varexp=getBindingAttr(el,'key');
if(exp){
if("development"!=='production'&&el.tag==='template'){
warn$2("<template>cannotbekeyed.Placethekeyonrealelementsinstead.");
}
el.key=exp;
}
}

functionprocessRef(el){
varref=getBindingAttr(el,'ref');
if(ref){
el.ref=ref;
el.refInFor=checkInFor(el);
}
}

functionprocessFor(el){
varexp;
if((exp=getAndRemoveAttr(el,'v-for'))){
varinMatch=exp.match(forAliasRE);
if(!inMatch){
"development"!=='production'&&warn$2(
("Invalidv-forexpression:"+exp)
);
return
}
el.for=inMatch[2].trim();
varalias=inMatch[1].trim();
variteratorMatch=alias.match(forIteratorRE);
if(iteratorMatch){
el.alias=iteratorMatch[1].trim();
el.iterator1=iteratorMatch[2].trim();
if(iteratorMatch[3]){
el.iterator2=iteratorMatch[3].trim();
}
}else{
el.alias=alias;
}
}
}

functionprocessIf(el){
varexp=getAndRemoveAttr(el,'v-if');
if(exp){
el.if=exp;
addIfCondition(el,{
exp:exp,
block:el
});
}else{
if(getAndRemoveAttr(el,'v-else')!=null){
el.else=true;
}
varelseif=getAndRemoveAttr(el,'v-else-if');
if(elseif){
el.elseif=elseif;
}
}
}

functionprocessIfConditions(el,parent){
varprev=findPrevElement(parent.children);
if(prev&&prev.if){
addIfCondition(prev,{
exp:el.elseif,
block:el
});
}else{
warn$2(
"v-"+(el.elseif?('else-if="'+el.elseif+'"'):'else')+""+
"usedonelement<"+(el.tag)+">withoutcorrespondingv-if."
);
}
}

functionfindPrevElement(children){
vari=children.length;
while(i--){
if(children[i].type===1){
returnchildren[i]
}else{
if("development"!=='production'&&children[i].text!==''){
warn$2(
"text\""+(children[i].text.trim())+"\"betweenv-ifandv-else(-if)"+
"willbeignored."
);
}
children.pop();
}
}
}

functionaddIfCondition(el,condition){
if(!el.ifConditions){
el.ifConditions=[];
}
el.ifConditions.push(condition);
}

functionprocessOnce(el){
varonce$$1=getAndRemoveAttr(el,'v-once');
if(once$$1!=null){
el.once=true;
}
}

functionprocessSlot(el){
if(el.tag==='slot'){
el.slotName=getBindingAttr(el,'name');
if("development"!=='production'&&el.key){
warn$2(
"`key`doesnotworkon<slot>becauseslotsareabstractoutlets"+
"andcanpossiblyexpandintomultipleelements."+
"Usethekeyonawrappingelementinstead."
);
}
}else{
varslotTarget=getBindingAttr(el,'slot');
if(slotTarget){
el.slotTarget=slotTarget==='""'?'"default"':slotTarget;
}
if(el.tag==='template'){
el.slotScope=getAndRemoveAttr(el,'scope');
}
}
}

functionprocessComponent(el){
varbinding;
if((binding=getBindingAttr(el,'is'))){
el.component=binding;
}
if(getAndRemoveAttr(el,'inline-template')!=null){
el.inlineTemplate=true;
}
}

functionprocessAttrs(el){
varlist=el.attrsList;
vari,l,name,rawName,value,modifiers,isProp;
for(i=0,l=list.length;i<l;i++){
name=rawName=list[i].name;
value=list[i].value;
if(dirRE.test(name)){
markelementasdynamic
el.hasBindings=true;
modifiers
modifiers=parseModifiers(name);
if(modifiers){
name=name.replace(modifierRE,'');
}
if(bindRE.test(name)){v-bind
name=name.replace(bindRE,'');
value=parseFilters(value);
isProp=false;
if(modifiers){
if(modifiers.prop){
isProp=true;
name=camelize(name);
if(name==='innerHtml'){name='innerHTML';}
}
if(modifiers.camel){
name=camelize(name);
}
if(modifiers.sync){
addHandler(
el,
("update:"+(camelize(name))),
genAssignmentCode(value,"$event")
);
}
}
if(isProp||(
!el.component&&platformMustUseProp(el.tag,el.attrsMap.type,name)
)){
addProp(el,name,value);
}else{
addAttr(el,name,value);
}
}elseif(onRE.test(name)){v-on
name=name.replace(onRE,'');
addHandler(el,name,value,modifiers,false,warn$2);
}else{normaldirectives
name=name.replace(dirRE,'');
parsearg
varargMatch=name.match(argRE);
vararg=argMatch&&argMatch[1];
if(arg){
name=name.slice(0,-(arg.length+1));
}
addDirective(el,name,rawName,value,arg,modifiers);
if("development"!=='production'&&name==='model'){
checkForAliasModel(el,value);
}
}
}else{
literalattribute
{
varexpression=parseText(value,delimiters);
if(expression){
warn$2(
name+"=\""+value+"\":"+
'Interpolationinsideattributeshasbeenremoved.'+
'Usev-bindorthecolonshorthandinstead.Forexample,'+
'insteadof<divid="{{val}}">,use<div:id="val">.'
);
}
}
addAttr(el,name,JSON.stringify(value));
}
}
}

functioncheckInFor(el){
varparent=el;
while(parent){
if(parent.for!==undefined){
returntrue
}
parent=parent.parent;
}
returnfalse
}

functionparseModifiers(name){
varmatch=name.match(modifierRE);
if(match){
varret={};
match.forEach(function(m){ret[m.slice(1)]=true;});
returnret
}
}

functionmakeAttrsMap(attrs){
varmap={};
for(vari=0,l=attrs.length;i<l;i++){
if(
"development"!=='production'&&
map[attrs[i].name]&&!isIE&&!isEdge
){
warn$2('duplicateattribute:'+attrs[i].name);
}
map[attrs[i].name]=attrs[i].value;
}
returnmap
}

forscript(e.g.type="x/template")orstyle,donotdecodecontent
functionisTextTag(el){
returnel.tag==='script'||el.tag==='style'
}

functionisForbiddenTag(el){
return(
el.tag==='style'||
(el.tag==='script'&&(
!el.attrsMap.type||
el.attrsMap.type==='text/javascript'
))
)
}

varieNSBug=/^xmlns:NS\d+/;
varieNSPrefix=/^NS\d+:/;

/*istanbulignorenext*/
functionguardIESVGBug(attrs){
varres=[];
for(vari=0;i<attrs.length;i++){
varattr=attrs[i];
if(!ieNSBug.test(attr.name)){
attr.name=attr.name.replace(ieNSPrefix,'');
res.push(attr);
}
}
returnres
}

functioncheckForAliasModel(el,value){
var_el=el;
while(_el){
if(_el.for&&_el.alias===value){
warn$2(
"<"+(el.tag)+"v-model=\""+value+"\">:"+
"Youarebindingv-modeldirectlytoav-foriterationalias."+
"Thiswillnotbeabletomodifythev-forsourcearraybecause"+
"writingtothealiasislikemodifyingafunctionlocalvariable."+
"Considerusinganarrayofobjectsandusev-modelonanobjectpropertyinstead."
);
}
_el=_el.parent;
}
}

/**/

varisStaticKey;
varisPlatformReservedTag;

vargenStaticKeysCached=cached(genStaticKeys$1);

/**
*Goaloftheoptimizer:walkthegeneratedtemplateASTtree
*anddetectsub-treesthatarepurelystatic,i.e.partsof
*theDOMthatneverneedstochange.
*
*Oncewedetectthesesub-trees,wecan:
*
*1.Hoistthemintoconstants,sothatwenolongerneedto
*createfreshnodesforthemoneachre-render;
*2.Completelyskiptheminthepatchingprocess.
*/
functionoptimize(root,options){
if(!root){return}
isStaticKey=genStaticKeysCached(options.staticKeys||'');
isPlatformReservedTag=options.isReservedTag||no;
firstpass:markallnon-staticnodes.
markStatic$1(root);
secondpass:markstaticroots.
markStaticRoots(root,false);
}

functiongenStaticKeys$1(keys){
returnmakeMap(
'type,tag,attrsList,attrsMap,plain,parent,children,attrs'+
(keys?','+keys:'')
)
}

functionmarkStatic$1(node){
node.static=isStatic(node);
if(node.type===1){
donotmakecomponentslotcontentstatic.thisavoids
1.componentsnotabletomutateslotnodes
2.staticslotcontentfailsforhot-reloading
if(
!isPlatformReservedTag(node.tag)&&
node.tag!=='slot'&&
node.attrsMap['inline-template']==null
){
return
}
for(vari=0,l=node.children.length;i<l;i++){
varchild=node.children[i];
markStatic$1(child);
if(!child.static){
node.static=false;
}
}
if(node.ifConditions){
for(vari$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){
varblock=node.ifConditions[i$1].block;
markStatic$1(block);
if(!block.static){
node.static=false;
}
}
}
}
}

functionmarkStaticRoots(node,isInFor){
if(node.type===1){
if(node.static||node.once){
node.staticInFor=isInFor;
}
Foranodetoqualifyasastaticroot,itshouldhavechildrenthat
arenotjuststatictext.Otherwisethecostofhoistingoutwill
outweighthebenefitsandit'sbetterofftojustalwaysrenderitfresh.
if(node.static&&node.children.length&&!(
node.children.length===1&&
node.children[0].type===3
)){
node.staticRoot=true;
return
}else{
node.staticRoot=false;
}
if(node.children){
for(vari=0,l=node.children.length;i<l;i++){
markStaticRoots(node.children[i],isInFor||!!node.for);
}
}
if(node.ifConditions){
for(vari$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){
markStaticRoots(node.ifConditions[i$1].block,isInFor);
}
}
}
}

functionisStatic(node){
if(node.type===2){expression
returnfalse
}
if(node.type===3){text
returntrue
}
return!!(node.pre||(
!node.hasBindings&&nodynamicbindings
!node.if&&!node.for&&notv-iforv-fororv-else
!isBuiltInTag(node.tag)&&notabuilt-in
isPlatformReservedTag(node.tag)&&notacomponent
!isDirectChildOfTemplateFor(node)&&
Object.keys(node).every(isStaticKey)
))
}

functionisDirectChildOfTemplateFor(node){
while(node.parent){
node=node.parent;
if(node.tag!=='template'){
returnfalse
}
if(node.for){
returntrue
}
}
returnfalse
}

/**/

varfnExpRE=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
varsimplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

keyCodealiases
varkeyCodes={
esc:27,
tab:9,
enter:13,
space:32,
up:38,
left:37,
right:39,
down:40,
'delete':[8,46]
};

#4868:modifiersthatpreventtheexecutionofthelistener
needtoexplicitlyreturnnullsothatwecandeterminewhethertoremove
thelistenerfor.once
vargenGuard=function(condition){return("if("+condition+")returnnull;");};

varmodifierCode={
stop:'$event.stopPropagation();',
prevent:'$event.preventDefault();',
self:genGuard("$event.target!==$event.currentTarget"),
ctrl:genGuard("!$event.ctrlKey"),
shift:genGuard("!$event.shiftKey"),
alt:genGuard("!$event.altKey"),
meta:genGuard("!$event.metaKey"),
left:genGuard("'button'in$event&&$event.button!==0"),
middle:genGuard("'button'in$event&&$event.button!==1"),
right:genGuard("'button'in$event&&$event.button!==2")
};

functiongenHandlers(
events,
isNative,
warn
){
varres=isNative?'nativeOn:{':'on:{';
for(varnameinevents){
varhandler=events[name];
#5330:warnclick.right,sincerightclicksdonotactuallyfireclickevents.
if("development"!=='production'&&
name==='click'&&
handler&&handler.modifiers&&handler.modifiers.right
){
warn(
"Use\"contextmenu\"insteadof\"click.right\"sincerightclicks"+
"donotactuallyfire\"click\"events."
);
}
res+="\""+name+"\":"+(genHandler(name,handler))+",";
}
returnres.slice(0,-1)+'}'
}

functiongenHandler(
name,
handler
){
if(!handler){
return'function(){}'
}

if(Array.isArray(handler)){
return("["+(handler.map(function(handler){returngenHandler(name,handler);}).join(','))+"]")
}

varisMethodPath=simplePathRE.test(handler.value);
varisFunctionExpression=fnExpRE.test(handler.value);

if(!handler.modifiers){
returnisMethodPath||isFunctionExpression
?handler.value
:("function($event){"+(handler.value)+"}")inlinestatement
}else{
varcode='';
vargenModifierCode='';
varkeys=[];
for(varkeyinhandler.modifiers){
if(modifierCode[key]){
genModifierCode+=modifierCode[key];
left/right
if(keyCodes[key]){
keys.push(key);
}
}else{
keys.push(key);
}
}
if(keys.length){
code+=genKeyFilter(keys);
}
Makesuremodifierslikepreventandstopgetexecutedafterkeyfiltering
if(genModifierCode){
code+=genModifierCode;
}
varhandlerCode=isMethodPath
?handler.value+'($event)'
:isFunctionExpression
?("("+(handler.value)+")($event)")
:handler.value;
return("function($event){"+code+handlerCode+"}")
}
}

functiongenKeyFilter(keys){
return("if(!('button'in$event)&&"+(keys.map(genFilterCode).join('&&'))+")returnnull;")
}

functiongenFilterCode(key){
varkeyVal=parseInt(key,10);
if(keyVal){
return("$event.keyCode!=="+keyVal)
}
varalias=keyCodes[key];
return("_k($event.keyCode,"+(JSON.stringify(key))+(alias?','+JSON.stringify(alias):'')+")")
}

/**/

functionon(el,dir){
if("development"!=='production'&&dir.modifiers){
warn("v-onwithoutargumentdoesnotsupportmodifiers.");
}
el.wrapListeners=function(code){return("_g("+code+","+(dir.value)+")");};
}

/**/

functionbind$1(el,dir){
el.wrapData=function(code){
return("_b("+code+",'"+(el.tag)+"',"+(dir.value)+","+(dir.modifiers&&dir.modifiers.prop?'true':'false')+(dir.modifiers&&dir.modifiers.sync?',true':'')+")")
};
}

/**/

varbaseDirectives={
on:on,
bind:bind$1,
cloak:noop
};

/**/

varCodegenState=functionCodegenState(options){
this.options=options;
this.warn=options.warn||baseWarn;
this.transforms=pluckModuleFunction(options.modules,'transformCode');
this.dataGenFns=pluckModuleFunction(options.modules,'genData');
this.directives=extend(extend({},baseDirectives),options.directives);
varisReservedTag=options.isReservedTag||no;
this.maybeComponent=function(el){return!isReservedTag(el.tag);};
this.onceId=0;
this.staticRenderFns=[];
};



functiongenerate(
ast,
options
){
varstate=newCodegenState(options);
varcode=ast?genElement(ast,state):'_c("div")';
return{
render:("with(this){return"+code+"}"),
staticRenderFns:state.staticRenderFns
}
}

functiongenElement(el,state){
if(el.staticRoot&&!el.staticProcessed){
returngenStatic(el,state)
}elseif(el.once&&!el.onceProcessed){
returngenOnce(el,state)
}elseif(el.for&&!el.forProcessed){
returngenFor(el,state)
}elseif(el.if&&!el.ifProcessed){
returngenIf(el,state)
}elseif(el.tag==='template'&&!el.slotTarget){
returngenChildren(el,state)||'void0'
}elseif(el.tag==='slot'){
returngenSlot(el,state)
}else{
componentorelement
varcode;
if(el.component){
code=genComponent(el.component,el,state);
}else{
vardata=el.plain?undefined:genData$2(el,state);

varchildren=el.inlineTemplate?null:genChildren(el,state,true);
code="_c('"+(el.tag)+"'"+(data?(","+data):'')+(children?(","+children):'')+")";
}
moduletransforms
for(vari=0;i<state.transforms.length;i++){
code=state.transforms[i](el,code);
}
returncode
}
}

hoiststaticsub-treesout
functiongenStatic(el,state){
el.staticProcessed=true;
state.staticRenderFns.push(("with(this){return"+(genElement(el,state))+"}"));
return("_m("+(state.staticRenderFns.length-1)+(el.staticInFor?',true':'')+")")
}

v-once
functiongenOnce(el,state){
el.onceProcessed=true;
if(el.if&&!el.ifProcessed){
returngenIf(el,state)
}elseif(el.staticInFor){
varkey='';
varparent=el.parent;
while(parent){
if(parent.for){
key=parent.key;
break
}
parent=parent.parent;
}
if(!key){
"development"!=='production'&&state.warn(
"v-oncecanonlybeusedinsidev-forthatiskeyed."
);
returngenElement(el,state)
}
return("_o("+(genElement(el,state))+","+(state.onceId++)+(key?(","+key):"")+")")
}else{
returngenStatic(el,state)
}
}

functiongenIf(
el,
state,
altGen,
altEmpty
){
el.ifProcessed=true;avoidrecursion
returngenIfConditions(el.ifConditions.slice(),state,altGen,altEmpty)
}

functiongenIfConditions(
conditions,
state,
altGen,
altEmpty
){
if(!conditions.length){
returnaltEmpty||'_e()'
}

varcondition=conditions.shift();
if(condition.exp){
return("("+(condition.exp)+")?"+(genTernaryExp(condition.block))+":"+(genIfConditions(conditions,state,altGen,altEmpty)))
}else{
return(""+(genTernaryExp(condition.block)))
}

v-ifwithv-onceshouldgeneratecodelike(a)?_m(0):_m(1)
functiongenTernaryExp(el){
returnaltGen
?altGen(el,state)
:el.once
?genOnce(el,state)
:genElement(el,state)
}
}

functiongenFor(
el,
state,
altGen,
altHelper
){
varexp=el.for;
varalias=el.alias;
variterator1=el.iterator1?(","+(el.iterator1)):'';
variterator2=el.iterator2?(","+(el.iterator2)):'';

if("development"!=='production'&&
state.maybeComponent(el)&&
el.tag!=='slot'&&
el.tag!=='template'&&
!el.key
){
state.warn(
"<"+(el.tag)+"v-for=\""+alias+"in"+exp+"\">:componentlistsrenderedwith"+
"v-forshouldhaveexplicitkeys."+
"Seehttps:vuejs.org/guide/list.html#keyformoreinfo.",
true/*tip*/
);
}

el.forProcessed=true;avoidrecursion
return(altHelper||'_l')+"(("+exp+"),"+
"function("+alias+iterator1+iterator2+"){"+
"return"+((altGen||genElement)(el,state))+
'})'
}

functiongenData$2(el,state){
vardata='{';

directivesfirst.
directivesmaymutatetheel'sotherpropertiesbeforetheyaregenerated.
vardirs=genDirectives(el,state);
if(dirs){data+=dirs+',';}

key
if(el.key){
data+="key:"+(el.key)+",";
}
ref
if(el.ref){
data+="ref:"+(el.ref)+",";
}
if(el.refInFor){
data+="refInFor:true,";
}
pre
if(el.pre){
data+="pre:true,";
}
recordoriginaltagnameforcomponentsusing"is"attribute
if(el.component){
data+="tag:\""+(el.tag)+"\",";
}
moduledatagenerationfunctions
for(vari=0;i<state.dataGenFns.length;i++){
data+=state.dataGenFns[i](el);
}
attributes
if(el.attrs){
data+="attrs:{"+(genProps(el.attrs))+"},";
}
DOMprops
if(el.props){
data+="domProps:{"+(genProps(el.props))+"},";
}
eventhandlers
if(el.events){
data+=(genHandlers(el.events,false,state.warn))+",";
}
if(el.nativeEvents){
data+=(genHandlers(el.nativeEvents,true,state.warn))+",";
}
slottarget
if(el.slotTarget){
data+="slot:"+(el.slotTarget)+",";
}
scopedslots
if(el.scopedSlots){
data+=(genScopedSlots(el.scopedSlots,state))+",";
}
componentv-model
if(el.model){
data+="model:{value:"+(el.model.value)+",callback:"+(el.model.callback)+",expression:"+(el.model.expression)+"},";
}
inline-template
if(el.inlineTemplate){
varinlineTemplate=genInlineTemplate(el,state);
if(inlineTemplate){
data+=inlineTemplate+",";
}
}
data=data.replace(/,$/,'')+'}';
v-binddatawrap
if(el.wrapData){
data=el.wrapData(data);
}
v-ondatawrap
if(el.wrapListeners){
data=el.wrapListeners(data);
}
returndata
}

functiongenDirectives(el,state){
vardirs=el.directives;
if(!dirs){return}
varres='directives:[';
varhasRuntime=false;
vari,l,dir,needRuntime;
for(i=0,l=dirs.length;i<l;i++){
dir=dirs[i];
needRuntime=true;
vargen=state.directives[dir.name];
if(gen){
compile-timedirectivethatmanipulatesAST.
returnstrueifitalsoneedsaruntimecounterpart.
needRuntime=!!gen(el,dir,state.warn);
}
if(needRuntime){
hasRuntime=true;
res+="{name:\""+(dir.name)+"\",rawName:\""+(dir.rawName)+"\""+(dir.value?(",value:("+(dir.value)+"),expression:"+(JSON.stringify(dir.value))):'')+(dir.arg?(",arg:\""+(dir.arg)+"\""):'')+(dir.modifiers?(",modifiers:"+(JSON.stringify(dir.modifiers))):'')+"},";
}
}
if(hasRuntime){
returnres.slice(0,-1)+']'
}
}

functiongenInlineTemplate(el,state){
varast=el.children[0];
if("development"!=='production'&&(
el.children.length>1||ast.type!==1
)){
state.warn('Inline-templatecomponentsmusthaveexactlyonechildelement.');
}
if(ast.type===1){
varinlineRenderFns=generate(ast,state.options);
return("inlineTemplate:{render:function(){"+(inlineRenderFns.render)+"},staticRenderFns:["+(inlineRenderFns.staticRenderFns.map(function(code){return("function(){"+code+"}");}).join(','))+"]}")
}
}

functiongenScopedSlots(
slots,
state
){
return("scopedSlots:_u(["+(Object.keys(slots).map(function(key){
returngenScopedSlot(key,slots[key],state)
}).join(','))+"])")
}

functiongenScopedSlot(
key,
el,
state
){
if(el.for&&!el.forProcessed){
returngenForScopedSlot(key,el,state)
}
return"{key:"+key+",fn:function("+(String(el.attrsMap.scope))+"){"+
"return"+(el.tag==='template'
?genChildren(el,state)||'void0'
:genElement(el,state))+"}}"
}

functiongenForScopedSlot(
key,
el,
state
){
varexp=el.for;
varalias=el.alias;
variterator1=el.iterator1?(","+(el.iterator1)):'';
variterator2=el.iterator2?(","+(el.iterator2)):'';
el.forProcessed=true;avoidrecursion
return"_l(("+exp+"),"+
"function("+alias+iterator1+iterator2+"){"+
"return"+(genScopedSlot(key,el,state))+
'})'
}

functiongenChildren(
el,
state,
checkSkip,
altGenElement,
altGenNode
){
varchildren=el.children;
if(children.length){
varel$1=children[0];
optimizesinglev-for
if(children.length===1&&
el$1.for&&
el$1.tag!=='template'&&
el$1.tag!=='slot'
){
return(altGenElement||genElement)(el$1,state)
}
varnormalizationType=checkSkip
?getNormalizationType(children,state.maybeComponent)
:0;
vargen=altGenNode||genNode;
return("["+(children.map(function(c){returngen(c,state);}).join(','))+"]"+(normalizationType?(","+normalizationType):''))
}
}

determinethenormalizationneededforthechildrenarray.
0:nonormalizationneeded
1:simplenormalizationneeded(possible1-leveldeepnestedarray)
2:fullnormalizationneeded
functiongetNormalizationType(
children,
maybeComponent
){
varres=0;
for(vari=0;i<children.length;i++){
varel=children[i];
if(el.type!==1){
continue
}
if(needsNormalization(el)||
(el.ifConditions&&el.ifConditions.some(function(c){returnneedsNormalization(c.block);}))){
res=2;
break
}
if(maybeComponent(el)||
(el.ifConditions&&el.ifConditions.some(function(c){returnmaybeComponent(c.block);}))){
res=1;
}
}
returnres
}

functionneedsNormalization(el){
returnel.for!==undefined||el.tag==='template'||el.tag==='slot'
}

functiongenNode(node,state){
if(node.type===1){
returngenElement(node,state)
}if(node.type===3&&node.isComment){
returngenComment(node)
}else{
returngenText(node)
}
}

functiongenText(text){
return("_v("+(text.type===2
?text.expressionnoneedfor()becausealreadywrappedin_s()
:transformSpecialNewlines(JSON.stringify(text.text)))+")")
}

functiongenComment(comment){
return("_e("+(JSON.stringify(comment.text))+")")
}

functiongenSlot(el,state){
varslotName=el.slotName||'"default"';
varchildren=genChildren(el,state);
varres="_t("+slotName+(children?(","+children):'');
varattrs=el.attrs&&("{"+(el.attrs.map(function(a){return((camelize(a.name))+":"+(a.value));}).join(','))+"}");
varbind$$1=el.attrsMap['v-bind'];
if((attrs||bind$$1)&&!children){
res+=",null";
}
if(attrs){
res+=","+attrs;
}
if(bind$$1){
res+=(attrs?'':',null')+","+bind$$1;
}
returnres+')'
}

componentNameisel.component,takeitasargumenttoshunflow'spessimisticrefinement
functiongenComponent(
componentName,
el,
state
){
varchildren=el.inlineTemplate?null:genChildren(el,state,true);
return("_c("+componentName+","+(genData$2(el,state))+(children?(","+children):'')+")")
}

functiongenProps(props){
varres='';
for(vari=0;i<props.length;i++){
varprop=props[i];
res+="\""+(prop.name)+"\":"+(transformSpecialNewlines(prop.value))+",";
}
returnres.slice(0,-1)
}

#3895,#4268
functiontransformSpecialNewlines(text){
returntext
.replace(/\u2028/g,'\\u2028')
.replace(/\u2029/g,'\\u2029')
}

/**/

thesekeywordsshouldnotappearinsideexpressions,butoperatorslike
typeof,instanceofandinareallowed
varprohibitedKeywordRE=newRegExp('\\b'+(
'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+
'super,throw,while,yield,delete,export,import,return,switch,default,'+
'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b')+'\\b');

theseunaryoperatorsshouldnotbeusedasproperty/methodnames
varunaryOperatorsRE=newRegExp('\\b'+(
'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b')+'\\s*\\([^\\)]*\\)');

checkvalididentifierforv-for
varidentRE=/[A-Za-z_$][\w$]*/;

stripstringsinexpressions
varstripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

detectproblematicexpressionsinatemplate
functiondetectErrors(ast){
varerrors=[];
if(ast){
checkNode(ast,errors);
}
returnerrors
}

functioncheckNode(node,errors){
if(node.type===1){
for(varnameinnode.attrsMap){
if(dirRE.test(name)){
varvalue=node.attrsMap[name];
if(value){
if(name==='v-for'){
checkFor(node,("v-for=\""+value+"\""),errors);
}elseif(onRE.test(name)){
checkEvent(value,(name+"=\""+value+"\""),errors);
}else{
checkExpression(value,(name+"=\""+value+"\""),errors);
}
}
}
}
if(node.children){
for(vari=0;i<node.children.length;i++){
checkNode(node.children[i],errors);
}
}
}elseif(node.type===2){
checkExpression(node.expression,node.text,errors);
}
}

functioncheckEvent(exp,text,errors){
varstipped=exp.replace(stripStringRE,'');
varkeywordMatch=stipped.match(unaryOperatorsRE);
if(keywordMatch&&stipped.charAt(keywordMatch.index-1)!=='$'){
errors.push(
"avoidusingJavaScriptunaryoperatoraspropertyname:"+
"\""+(keywordMatch[0])+"\"inexpression"+(text.trim())
);
}
checkExpression(exp,text,errors);
}

functioncheckFor(node,text,errors){
checkExpression(node.for||'',text,errors);
checkIdentifier(node.alias,'v-foralias',text,errors);
checkIdentifier(node.iterator1,'v-foriterator',text,errors);
checkIdentifier(node.iterator2,'v-foriterator',text,errors);
}

functioncheckIdentifier(ident,type,text,errors){
if(typeofident==='string'&&!identRE.test(ident)){
errors.push(("invalid"+type+"\""+ident+"\"inexpression:"+(text.trim())));
}
}

functioncheckExpression(exp,text,errors){
try{
newFunction(("return"+exp));
}catch(e){
varkeywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);
if(keywordMatch){
errors.push(
"avoidusingJavaScriptkeywordaspropertyname:"+
"\""+(keywordMatch[0])+"\"inexpression"+(text.trim())
);
}else{
errors.push(("invalidexpression:"+(text.trim())));
}
}
}

/**/

functioncreateFunction(code,errors){
try{
returnnewFunction(code)
}catch(err){
errors.push({err:err,code:code});
returnnoop
}
}

functioncreateCompileToFunctionFn(compile){
varcache=Object.create(null);

returnfunctioncompileToFunctions(
template,
options,
vm
){
options=options||{};

/*istanbulignoreif*/
{
detectpossibleCSPrestriction
try{
newFunction('return1');
}catch(e){
if(e.toString().match(/unsafe-eval|CSP/)){
warn(
'ItseemsyouareusingthestandalonebuildofVue.jsinan'+
'environmentwithContentSecurityPolicythatprohibitsunsafe-eval.'+
'Thetemplatecompilercannotworkinthisenvironment.Consider'+
'relaxingthepolicytoallowunsafe-evalorpre-compilingyour'+
'templatesintorenderfunctions.'
);
}
}
}

checkcache
varkey=options.delimiters
?String(options.delimiters)+template
:template;
if(cache[key]){
returncache[key]
}

compile
varcompiled=compile(template,options);

checkcompilationerrors/tips
{
if(compiled.errors&&compiled.errors.length){
warn(
"Errorcompilingtemplate:\n\n"+template+"\n\n"+
compiled.errors.map(function(e){return("-"+e);}).join('\n')+'\n',
vm
);
}
if(compiled.tips&&compiled.tips.length){
compiled.tips.forEach(function(msg){returntip(msg,vm);});
}
}

turncodeintofunctions
varres={};
varfnGenErrors=[];
res.render=createFunction(compiled.render,fnGenErrors);
res.staticRenderFns=compiled.staticRenderFns.map(function(code){
returncreateFunction(code,fnGenErrors)
});

checkfunctiongenerationerrors.
thisshouldonlyhappenifthereisabuginthecompileritself.
mostlyforcodegendevelopmentuse
/*istanbulignoreif*/
{
if((!compiled.errors||!compiled.errors.length)&&fnGenErrors.length){
warn(
"Failedtogeneraterenderfunction:\n\n"+
fnGenErrors.map(function(ref){
varerr=ref.err;
varcode=ref.code;

return((err.toString())+"in\n\n"+code+"\n");
}).join('\n'),
vm
);
}
}

return(cache[key]=res)
}
}

/**/

functioncreateCompilerCreator(baseCompile){
returnfunctioncreateCompiler(baseOptions){
functioncompile(
template,
options
){
varfinalOptions=Object.create(baseOptions);
varerrors=[];
vartips=[];
finalOptions.warn=function(msg,tip){
(tip?tips:errors).push(msg);
};

if(options){
mergecustommodules
if(options.modules){
finalOptions.modules=
(baseOptions.modules||[]).concat(options.modules);
}
mergecustomdirectives
if(options.directives){
finalOptions.directives=extend(
Object.create(baseOptions.directives),
options.directives
);
}
copyotheroptions
for(varkeyinoptions){
if(key!=='modules'&&key!=='directives'){
finalOptions[key]=options[key];
}
}
}

varcompiled=baseCompile(template,finalOptions);
{
errors.push.apply(errors,detectErrors(compiled.ast));
}
compiled.errors=errors;
compiled.tips=tips;
returncompiled
}

return{
compile:compile,
compileToFunctions:createCompileToFunctionFn(compile)
}
}
}

/**/

`createCompilerCreator`allowscreatingcompilersthatusealternative
parser/optimizer/codegen,e.gtheSSRoptimizingcompiler.
Herewejustexportadefaultcompilerusingthedefaultparts.
varcreateCompiler=createCompilerCreator(functionbaseCompile(
template,
options
){
varast=parse(template.trim(),options);
optimize(ast,options);
varcode=generate(ast,options);
return{
ast:ast,
render:code.render,
staticRenderFns:code.staticRenderFns
}
});

/**/

varref$1=createCompiler(baseOptions);
varcompileToFunctions=ref$1.compileToFunctions;

/**/

varidToTemplate=cached(function(id){
varel=query(id);
returnel&&el.innerHTML
});

varmount=Vue$3.prototype.$mount;
Vue$3.prototype.$mount=function(
el,
hydrating
){
el=el&&query(el);

/*istanbulignoreif*/
if(el===document.body||el===document.documentElement){
"development"!=='production'&&warn(
"DonotmountVueto<html>or<body>-mounttonormalelementsinstead."
);
returnthis
}

varoptions=this.$options;
resolvetemplate/elandconverttorenderfunction
if(!options.render){
vartemplate=options.template;
if(template){
if(typeoftemplate==='string'){
if(template.charAt(0)==='#'){
template=idToTemplate(template);
/*istanbulignoreif*/
if("development"!=='production'&&!template){
warn(
("Templateelementnotfoundorisempty:"+(options.template)),
this
);
}
}
}elseif(template.nodeType){
template=template.innerHTML;
}else{
{
warn('invalidtemplateoption:'+template,this);
}
returnthis
}
}elseif(el){
template=getOuterHTML(el);
}
if(template){
/*istanbulignoreif*/
if("development"!=='production'&&config.performance&&mark){
mark('compile');
}

varref=compileToFunctions(template,{
shouldDecodeNewlines:shouldDecodeNewlines,
delimiters:options.delimiters,
comments:options.comments
},this);
varrender=ref.render;
varstaticRenderFns=ref.staticRenderFns;
options.render=render;
options.staticRenderFns=staticRenderFns;

/*istanbulignoreif*/
if("development"!=='production'&&config.performance&&mark){
mark('compileend');
measure(((this._name)+"compile"),'compile','compileend');
}
}
}
returnmount.call(this,el,hydrating)
};

/**
*GetouterHTMLofelements,takingcare
*ofSVGelementsinIEaswell.
*/
functiongetOuterHTML(el){
if(el.outerHTML){
returnel.outerHTML
}else{
varcontainer=document.createElement('div');
container.appendChild(el.cloneNode(true));
returncontainer.innerHTML
}
}

Vue$3.compile=compileToFunctions;

returnVue$3;

})));

