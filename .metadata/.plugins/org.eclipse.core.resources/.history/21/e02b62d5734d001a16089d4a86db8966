<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
<h2>STOCK DETAILS</h2>
<%@include file="header.jsp" %>

<hr>
<%-- <ol>
<c:forEach var="name" items="${list}"> 
<li> <h3>${name}</h3></li>
</c:forEach>
</ol>
 --%>
 <table border="1">
 <tr>
<th>Id</th>
<th>ExchangeName</th>
<th>ContractAddress</th>
<th>brief</th>
<th>remarks</th>

</tr>
<c:forEach var="stock" items="${list}"> 
<tr>
<td>${stock.id }</th>
<td>${stock.exchangeName }</td>
<td>${stock.contractAddress }</td>
<td>${stock.brief }</td>
<td>${stock.remarks }</td>
</tr>
</c:forEach>
</table>
 
 
<hr>
<%-- ${message} --%>

</body>
</html>
