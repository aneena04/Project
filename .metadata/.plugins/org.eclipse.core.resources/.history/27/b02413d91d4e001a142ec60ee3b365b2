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
	<c:url var="exchangeUrl" value="/exchange/save"></c:url>
	<form:form action="${exchangeUrl }" modelAttribute="exchange">
		<table>
			<tr>
				<div class="form-group">
					<td><form:label path="exchangeName">exchangeName</form:label></td>
					<td><form:input class="form-control" path="exchangeName"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="contractAddress">contactAddress</form:label></td>
					<td><form:input class="form-control" path="contactAddress"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="brief">brief</form:label></td>
					<td><form:input class="form-control" path="brief"></form:input></td>
				</div>
			</tr>
			<tr>
				<div class="form-group">
					<td><form:label path="remarks">remarks</form:label></td>
					<td><form:input class="form-control" path="remarks"></form:input></td>
				</div>

			</tr>

			<tr>
				<td><button type="submit">submit</button></td>


			</tr>
		</table>
	</form:form>

	<br />
	<br />
	<table border="1">
		<tr>
			<th>Id</th>
			<th>ExchangeName</th>
			<th>ContactAddress</th>
			<th>brief</th>
			<th>remarks</th>
			<th>Actions</th>

		</tr>
		<c:forEach var="stock" items="${list}">
			<tr>
				<td>${stock.id }</td>
				<td>${stock.exchangeName }</td>
				<td>${stock.contactAddress }</td>
				<td>${stock.brief }</td>
				<td>${stock.remarks }</td>
				<td><a href="<c:url value='/exchange/remove/${stock.id }'/>">Delete</a></td>

			</tr>
		</c:forEach>
	</table>

</body>
</html>