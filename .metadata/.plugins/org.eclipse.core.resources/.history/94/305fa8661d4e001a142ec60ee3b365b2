<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
	integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
	crossorigin="anonymous">
</head>
<body>
	<%@include file="header.jsp"%>
	<hr>
	<c:url var="companyUrl" value="/company/save"></c:url>
	<form:form action="${companyUrl }" modelAttribute="company">
		<table>
			<tr>
				<div class="form-group">
					<td><form:label path="name">Company name</form:label></td>
					<td><form:input class="form-control" path="name"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="sector">sector</form:label></td>
					<td><form:input class="form-control" path="sector"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="ceoName">CEO Name</form:label></td>
					<td><form:input class="form-control" path="ceoName"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="turnOver">turnOver</form:label></td>
					<td><form:input class="form-control" path="turnOver"></form:input></td>
				</div>
			</tr>
			<tr>
				<td><button type="submit">submit</button></td>
			</tr>
		</table>
	</form:form>
	<br />
	<hr />
	<table border="1">
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Sector</th>
			<th>Ceo Name</th>
			<th>turnover</th>
			<th>Actions</th>
		</tr>
		<c:forEach var="ipo" items="${list}">
			<tr>
				<td>${company.id }</td>
				<td>${company.name }</td>
				<td>${company.sector }</td>
				<td>${company.ceoName }</td>
				<td>${company.turnOver }</td>
				<td><a href="<c:url value='/ipo/remove/${ipo.id }'/>">Delete</a></td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>