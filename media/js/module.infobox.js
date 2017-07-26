/******************************************
 * 
 * 
 * MODULE Infobox
 * 
 * 
 * *****************************************/
var Infobox = (function($, _this) {

	var infobox = null;
	var infoboxContent = null;
	var infoboxBg = null;

	$(window).load(function() {
		infobox = $(".status-info-wrapper");
		infoboxContent = infobox.find(".status-info");
		infoboxClose = infobox.find(".close");

		infoboxClose.click(function() {
			_this.hide();
		});
	});

	_this.showError = function(theMessage) {
		if (infobox != null) {
			infobox.fadeIn(200);
			infobox.css("background","#9f5730");
			infoboxContent.html(theMessage);
		}
	};
	_this.showInfo = function(message) {
		_this.showMessage(message);
	}
	_this.showMessage = function(message) {
		if (infobox != null) {
			infobox.fadeIn(200).delay(1000).fadeOut(200);
			infobox.css("background","");
			infoboxContent.html(message);
		}
	};
	
	_this.hide = function() {
		if (infobox != null) {
			infobox.fadeOut(200);	
		}
	};
	
	return _this;
}(jQuery, {}));
