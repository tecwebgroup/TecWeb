<%@ taglib prefix="html" uri="/struts-tags" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
		<meta charset="UTF-8">
		
		<title>Login</title>
		
		<!-- Importo script -->
		<script src="js/jquery.min.js"></script>
		<script src="js/login_js.js"></script>
		<script src="js/bootstrap.min.js"></script>	

		<!-- Importo CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/login_css.css" rel="stylesheet">
	</head>
	
	
	
	<body>
		<!-- Creazione navbar con classi CSS di Bootstrap per rendere la pagina responsive -->
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
			<div class="navbar-header">
			  <a class="navbar-brand" href="homepage.html">
					<span><img src="icons/pollution.png" width="32" height="32"/></span>
					Controllo inquinanti
			  </a>
			</div>
			<ul class="nav navbar-nav navbar-right">
			  <li><a href="singup.html"><span class="glyphicon glyphicon-user"></span> Registrati</a></li>
			</ul>
		  </div>
		</nav>

		<div class="container">
			<div class="tg-wrap" id="div_form">
				<h1>ACCEDI</h1>
				<html:form action="login" method="post" id="login_form">
					<table>
						<tr>
							<td>
								<span class="glyphicon glyphicon-user" id="icon_user"></span>
							</td>
							<td>
								<div class="form-group">
									<input type="text" name="username" class="form-control" id="user" maxlength="20"/>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<span class="glyphicon glyphicon-lock" id="icon_user"></span>  
							</td>
							<td>
								<div class="form-group">
									<input type="password" name="password" class="form-control" id="pass" maxlength="20"/>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<button type="submit" name="login" class="btn btn-default btn-block">Login</button> 
							</td>
						</tr>
					</table>
				</html:form>
				<br/>Non hai ancora un account? <a href="singup.html">Registrati</a>
			</div>
		</div>
	</body>
</html>