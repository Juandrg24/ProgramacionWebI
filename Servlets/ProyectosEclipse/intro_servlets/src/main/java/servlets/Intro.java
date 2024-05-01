package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//shif+control+o importaciones

@WebServlet("/inicio") //@WebServlet(urlPatterns = "/inicio")
public class Intro extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		String producto=request.getParameter("producto");
		int precio=Integer.parseInt(request.getParameter("precio"));
		final double IVA = 0.19;//Final es un Const
		
		
		out.print("<h2> Mostrando Pagina Web desde un Servlet</h2>");
		out.print("<p> Ejecutando desde el contexto: "+request.getContextPath()+"</p>");
		//Cuando se va agregar mas de un parametro va separado con & 
		out.print("<p> Parametro (producto): "+request.getParameter("producto")+"\n (precio): "+request.getParameter("precio")+"\n Valor IVA: "+precio*IVA + "</p>");
		
		
	}
}


