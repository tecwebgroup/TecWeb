function isLogged(name) {
	if(name.toString()!="null")
		return true;
	else
		return false;
}

function menu(name) {
	if(isLogged(name)) {
			document.write("<ul class='nav navbar-nav navbar-right'><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>");
			document.write(name.toString() + " <span class='glyphicon glyphicon-menu-hamburger' id='icon_menu'></span></a><ul class='dropdown-menu'><li><a href='#'>");
			document.write("<span class='glyphicon glyphicon-globe'></span> Località preferite</a></li><li class='divider'></li><li><a href='logOut'>");
			document.write("<span class='glyphicon glyphicon-log-out'></span> Logout</a></li></ul></li></ul>");
			
	}else{
			document.write("<ul class='nav navbar-nav navbar-right'><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'");
			document.write("role='button' aria-haspopup='true' aria-expanded='false'>Menu <span class='glyphicon glyphicon-menu-hamburger' id='icon_menu'>");
			document.write("</span></a><ul class='dropdown-menu'><li><a href='login.jsp'><span class='glyphicon glyphicon-log-in'></span> Accedi</a></li>");
			document.write("<li><a href='singup.html'><span class='glyphicon glyphicon-user'></span> Registrati</a></li></ul></ul>");
	}
}

function select_bar(name) {
	if(isLogged(name)){
		document.write("<label class='radio-inline'><input type='radio' name='optradio'>Località preferite</label>");
		document.write("<label class='radio-inline'><input type='radio' name='optradio'>Ricerca globale</label>");
	}
}

function end_of_page(name) {
	if(isLogged(name)) {
		document.write("<div align='right'><form action='login.html'><button type='submit' class='btn btn-default'");
		document.write("<span class='glyphicon glyphicon-globe'></span> Gestisci località preferite</button></form></div>");
	}
	else
		document.write("<p align='center'>Vuoi gestire le tue località  preferite? <a href='login.html'>Accedi</a> <a href='singup.html'>Registratii</a></p>");
}