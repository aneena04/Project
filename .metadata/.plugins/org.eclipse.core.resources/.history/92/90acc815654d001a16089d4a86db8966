<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
<h2>USER DETAILS</h2>
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
<th>Email</th>
<th>Name</th>
<th>Password</th>
<th>Phone</th>
<th>User Name</th>
</tr>
<c:forEach var="register" items="${list}"> 
<tr>
<td>${register.id }</th>
<td>${register.email }</td>
<td>${register.name }</td>
<td>${register.password }</td>
<td>${register.phone }</td>
<td>${register.username }</td>
</tr>
</c:forEach>
</table>
 
 
<hr>
<%-- ${message} --%>

</body>
</html>
