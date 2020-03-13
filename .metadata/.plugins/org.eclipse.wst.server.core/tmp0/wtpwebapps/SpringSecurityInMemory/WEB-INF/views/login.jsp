<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body onload='document.loginForm.j_username.focus();'>
	<h3>Custom Login Page</h3>
	<%
		String errorString = (String) request.getAttribute("error");
		if (errorString != null && errorString.trim().equals("true")) {
			out.println("<span class=\"errorblock\">Incorrect login name or passord..please try again");

		}
	%>
	<form name='loginForm' action="<c:url value='login'/>" method='POST'>
		<table>
			<tr>
				<td>User:</td>
				<td><input type='text' name='username' value=''></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type='password' name='password' value='' /></td>

			</tr>
			<tr>
				<td><input type='submit' name='submit' value='submit' /></td>
				<td><input type='reset' name='reset' /></td>

			</tr>
		</table>
	</form>

</body>
</html>