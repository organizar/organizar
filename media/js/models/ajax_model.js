var AJAX = (function(_this, $) {
	var href = null;

	_this.get = function(url, params, callback, divClassOrID) {
		console.log("~~~~~~~~~~ REQUEST GET ~~~~~~~~~~~~");
		var result = "";
		var param_string = "";
		var i = 0;
		var org_result = null;

		if (params != null) {
			$.each(params, function(key, param) {
				if (i == 0) {
					param_string = param_string + "?" + key + "=" + param;
				}
				else {
					param_string = param_string + "&" + key + "=" + param;
				}
				i++;
			});

			url = url + param_string;
		}

		$.ajax({
			url: url,
			type: "GET",
		}).done(function( data ) {
			result = data;
			handleResult(result, callback, divClassOrID);
		}).fail(function(e) {
			console.log( "~~~ AJAX MODEL: AJAX MODEL: error", e);
			Infobox.showError("Fehler: Konnte URl nicht erreichen! " + url);
		}).always(function() {
			console.log( "~~~ AJAX MODEL: AJAX MODEL: complete" );
		});
	};
	
//	_this.post = function(url, data, callback) {
//		_this.post(url, data, callback, null);
//	};

	_this.post = function(url, data, callback, divClassOrID) {
		var result = "";
		_data = {'form_type' : 'member_registration', "csrfmiddlewaretoken":csrf_token};
		data["csrfmiddlewaretoken"] = $(csrf_token).attr("value");
		console.log("~~~~~~~~~~ REQUEST POST ~~~~~~~~~~~~");

		$.ajax({
			url: url,
			type: "POST",
			data: data,
		}).done(function( data ) {
			result = data;
			handleResult(result, callback, divClassOrID);
		}).fail(function(e) {
			console.log( "~~~ AJAX MODEL: error", e);
			Infobox.showError("Fehler: Konnte URl nicht erreichen! " + url);
		}).always(function() {
			console.log( "~~~ AJAX MODEL: complete" ); 
		});
	};

	var handleResult = function(result, callback, divClassOrID) {

		if (typeof callback != "undefined" && callback != null) {

			if (typeof divClassOrID == "undefined" || divClassOrID == null) {
				console.log("~~~ AJAX MODEL: POST: DID NOT FILTER");
			}
			else {
				result = $(result);
				var org_result = result;
				result = result.filter(divClassOrID);
				//result = $(divClassOrID, result);
				console.log("result", result);
				if ($.isPlainObject(result) || result.length == 0) {
					result = org_result.find(divClassOrID);
					console.log("searching emtpty result", result);
				}
				console.log("~~~ AJAX MODEL:POST: \"" + divClassOrID + "\" FILTERED RESULT: ", result);
			}

			callback(result);
		}
		else {
			console.log("~~~ AJAX MODEL: callback is null");
		}

		_this.resetListener();
	};

	_this.resetListener = function(){

		console.log("~~~ AJAX MODEL: ReSETED LISTenER");

		Search_Model.init();
		$(".search").autocomplete();
		init_globals();

		var links = $("a.ajax");
		links.unbind( "click" );
		if (links != null && links.length > 0) {
			links.click(function(e) {
				e.preventDefault();
				_this.handleClickedElem(this);
			});
		}
	};

	_this.handleClickedElem = function(elem) {
		var clickedLink = $(elem);
		var divClassOrID = clickedLink.data("divclassorid");
		href= clickedLink.attr("href");

		if (typeof href != "undefined") {
			
			if (clickedLink.hasClass("delete") && ! clickedLink.hasClass("checked")) {
				_this.confirm_delete(clickedLink);
			}
			else if (clickedLink.hasClass("ajax")) {
				if (typeof divClassOrID != "undefined") {
					AJAX.get(href, null, Overlay.showData, divClassOrID);
				}
				else if (typeof href != "undefined") {
					AJAX.get(href, null, null, null);
				}
				else {
					console.log("~~~ AJAX MODEL: ERROR: wrong href " , href);
				}
			}
			else {
				window.location = href;
			}
		}
		else {
			console.log("~~~ AJAX MODEL: ERROR could not get href from ", clickedLink);
		}
	}

	_this.confirm_delete = function(clickedLink) {
		var confirmation = confirm("Möchten Sie das wirklich löschen?");

		if (confirmation == true) {
			var clickedButton = $(clickedLink);
			var parent = clickedButton;
			var i = 0;
			var searchingParent = true;

			clickedButton.addClass("checked");
			console.log("$(clickedButton).parent().parent().parent() ", $(clickedButton).parent().parent().parent());

			if ($(clickedButton).hasClass("event-group")) {
				$(clickedButton).parent().remove();
				console.log("deleteing", $(clickedButton).parent());
			}
			else {
				while(searchingParent) {
					parent = parent.parent();

					if (i == 100) {
						searchingParent = false;
					}
					else if (parent.hasClass("event") || parent.hasClass("deletable")) {
						searchingParent = false;
					} 

					i++;
				}

				parent.remove();
			}
			AJAX.handleClickedElem(clickedLink);

		} else {
			//e.preventDefault();
		}
	};
	
	return _this;

}({}, jQuery));
