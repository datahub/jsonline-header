(function () {
	// files
	var pathRoot = '/shared/header/v4/';
	var cssFile =  pathRoot + 'header.css';
	var htmlFile = pathRoot + 'header.html';
	// create header element inline where script is called from
	document.write('<header id="jsonline-header"></header>');
	// inject stylesheet, assumes page already has fonts
    var stylesheet = document.createElement('link');
	stylesheet.href = cssFile;
	stylesheet.type = 'text/css';
	stylesheet.rel = 'stylesheet';
	document.getElementsByTagName('head')[0].appendChild(stylesheet);
	// inject navigation html
	var xhr = new XMLHttpRequest();
	xhr.open('GET', htmlFile, true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return;
	    document.getElementById('jsonline-header').innerHTML= this.responseText;
	    document.querySelector('.site-nav-link-fb').href = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(window.location.href);
	    document.querySelector('.site-nav-link-tw').href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
	};
	xhr.send();
})();