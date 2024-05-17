package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/formCliente")
public class FormServletCliente extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");

		PrintWriter out = response.getWriter();
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		int tpidentidad = Integer.parseInt(request.getParameter("tpidentidad"));
		String identificacion = request.getParameter("identificacion");
		String nombre = request.getParameter("nombre");
		String direccion = request.getParameter("direccion");
		String telefono = request.getParameter("telefono");
		String correo = request.getParameter("correo");
		
		String txtfechaingreso = request.getParameter("fechaingreso");
		Date fecha = null;
		try {
			fecha = sdf.parse(txtfechaingreso);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		 
		boolean chkcactivo = request.getParameter("chkcactivo") != null;
		double capacredito = Double.parseDouble(request.getParameter("capacredito"));
		String categoria = request.getParameter("categoria");

		
		Cliente cliente = new Cliente(tpidentidad, identificacion, nombre, direccion, telefono, correo, fecha,
				chkcactivo, capacredito, categoria);
		request.setAttribute("cliente", cliente);
		request.getRequestDispatcher("informacion.jsp").forward(request, response);

	}
}
