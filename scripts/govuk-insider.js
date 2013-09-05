
// Script in bookmarklet
// javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.github.com/rjc123/govuk-insider/master/scripts/govuk-insider.js';})();

(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			
			// Insert Bookmarklet Code Here
			{
				var feedback=prompt("What's wrong with this page?","Enter specific feedback here");
				if (feedback != null)
  					{
  			  		$('#what_doing').val("GOVUK INSIDER - Just browsing");
  			  		$('#what_wrong').val(feedback);
					$('.report-a-problem-container form').submit();
  					}
		}
			
		})();
	}

})();