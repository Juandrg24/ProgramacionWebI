package servlets;

import java.util.Date;

public class Cliente {

	private int tipoIdentificacion;
	private String identificacion;
	private String nombreCompleto;
	private String direccion;
	private String telefono;
	private String correoElectronico;
	private Date fechaIngreso;
	private boolean clienteActivo;
	private double capacidadCredito;
	private String categoria;

	public Cliente() {

	}

	public Cliente(int tipoIdentificacion, String identificacion, String nombreCompleto, String direccion,
			String telefono, String correoElectronico, Date fechaIngreso, boolean clienteActivo,
			double capacidadCredito, String categoria) {

		this.tipoIdentificacion = tipoIdentificacion;
		this.identificacion = identificacion;
		this.nombreCompleto = nombreCompleto;
		this.direccion = direccion;
		this.telefono = telefono;
		this.correoElectronico = correoElectronico;
		this.fechaIngreso = fechaIngreso;
		this.clienteActivo = clienteActivo;
		this.capacidadCredito = capacidadCredito;
		this.categoria = categoria;
	}

	public int getTipoIdentificacion() {
		return tipoIdentificacion;
	}

	public void setTipoIdentificacion(int tipoIdentificacion) {
		this.tipoIdentificacion = tipoIdentificacion;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreoElectronico() {
		return correoElectronico;
	}

	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}

	public Date getFechaIngreso() {
		return fechaIngreso;
	}

	public void setFechaIngreso(Date fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}

	public boolean isClienteActivo() {
		return clienteActivo;
	}

	public void setClienteActivo(boolean clienteActivo) {
		this.clienteActivo = clienteActivo;
	}

	public double getCapacidadCredito() {
		return capacidadCredito;
	}

	public void setCapacidadCredito(double capacidadCredito) {
		this.capacidadCredito = capacidadCredito;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	@Override
	public String toString() {
		return "Cliente [tipoIdentificacion=" + tipoIdentificacion + ", identificacion=" + identificacion
				+ ", nombreCompleto=" + nombreCompleto + ", direccion=" + direccion + ", telefono=" + telefono
				+ ", correoElectronico=" + correoElectronico + ", fechaIngreso=" + fechaIngreso + ", clienteActivo="
				+ clienteActivo + ", capacidadCredito=" + capacidadCredito + ", categoria=" + categoria + "]";
	}

}
