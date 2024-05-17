<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="javax.servlet.descriptor.TaglibDescriptor"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Información Cliente</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<div class="container py-4">
		<div class="card bg-light">
			<div class="card-header">
				<h3 class="text-secondary">Información del Cliente: ${requestScope.cliente.nombreCompleto}</h3>
			</div>
			<div class="card-body">
				<h4 class="card-title text-right"></h4>
				<ul class="list-group">

					<c:choose>
						<c:when test="${requestScope.cliente.tipoIdentificacion==1}">
							<c:set var="tpi" value="Cédula"></c:set>
						</c:when>
						<c:when test="${requestScope.cliente.tipoIdentificacion==2}">
							<c:set var="tpi" value="NIT"></c:set>
						</c:when>
						<c:when test="${requestScope.cliente.tipoIdentificacion==3}">
							<c:set var="tpi" value="Cédula Extranjeria"></c:set>
						</c:when>
						<c:when test="${requestScope.cliente.tipoIdentificacion==4}">
							<c:set var="tpi" value="Pasaporte"></c:set>
						</c:when>

					</c:choose>

					<c:choose>
						<c:when test="${requestScope.cliente.clienteActivo=='true'}">
							<c:set var="actc" value="Si"></c:set>
						</c:when>

						<c:when test="${requestScope.cliente.clienteActivo=='false'}">
							<c:set var="actc" value="No"></c:set>
						</c:when>
					</c:choose>


					<li class="list-group-item"><b>Tipo de Identidad: </b><span>${tpi}</span></li>
					<li class="list-group-item"><b>Identificación: </b><span>${requestScope.cliente.identificacion}</span></li>
					<li class="list-group-item"><b>Nombre Completo: </b><span>${requestScope.cliente.nombreCompleto}</span></li>
					<li class="list-group-item"><b>Dirección: </b><span>${requestScope.cliente.direccion}</span></li>
					<li class="list-group-item"><b>Telefono: </b><span>${requestScope.cliente.telefono}</span></li>
					<li class="list-group-item"><b>Correo Electronico: </b><span>${requestScope.cliente.correoElectronico}</span></li>
					<li class="list-group-item"><b>Fecha Ingreso: </b><span><fmt:formatDate value="${requestScope.cliente.fechaIngreso}" pattern="dd/MM/yyyy"/></span></li>
					<li class="list-group-item"><b>Cliente Activo: </b><span>${actc}</span></li>
					<li class="list-group-item"><b>Capacidad de Credito:
							&dollar; </b><span>${requestScope.cliente.capacidadCredito}</span></li>
					<li class="list-group-item"><b>Categoría: </b><span>${requestScope.cliente.categoria}</span></li>

				</ul>
			</div>
			<div class="card-footer text-end">
			
				<a  href="index.html"><b>&lt;&lt;Regresar</b></a>
			</div>
		</div>
	</div>

</body>
</html>