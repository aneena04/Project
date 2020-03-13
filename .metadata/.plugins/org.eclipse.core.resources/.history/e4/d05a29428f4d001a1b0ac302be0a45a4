<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
<h2>IPO DETAILS</h2>
<%@include file="header.jsp" %>
<hr>
<%-- <ol>
<c:forEach var="name" items="${list}"> 
<li> <h3>${name}</h3></li>
</c:forEach>
</ol> --%>

 <table border="1">
 <tr>
<th>ID</th>
<th>COMPANY NAME</th>
<th>OPENDATETIME</th>
<th>PRICE PER SHARE</th>
<th>REMARKS</th>
<th>STOCK EXCHANGE</th>
<th>TOTAL STOCKS</th>
</tr>
<c:forEach var="ipo" items="${list}"> 
<tr>
<td>${ipo.id }</th>
<td>${ipo.companyName }</td>
<td>${ipo.stockExchange}</td>
<td>${ipo.pricePerShare }</td>
<td>${ipo.totalStocks }</td>
<td>${ipo.openDateTime }</th>
<td>${ipo.remarks }</th>

</tr>
</c:forEach>
</table>
 
 
<hr>
${message}

</body>
</html>
 