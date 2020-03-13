<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<body>
	<h1>Name:${name}</h1>
	<h1>Description:${description}</h1>

		<c:if test="${pageContext.request.userPrincipal.name!=null }">
			<h2>You are not authorized to access this</h2>
		<h2>
			Welcome:${username }<a
				href="<c:url value="/j_spring_security_logout"/>"> Logout</a>
		</h2>
				</c:if>
		
</body>
</html>