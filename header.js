(function () {
	// files
	var pathRoot = '/shared/header/v1/';
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
	};
	xhr.send();
})();