package G4;
public class Dipendente {
	private String matricola;
	private double stipendio;
	//ENUM
	private Dipartimento dipartimento;
	
	public Dipendente(String matricola, Dipartimento dipartimento, double stipendio) {
		this.matricola = matricola;
		this.dipartimento = dipartimento;
		this.stipendio = stipendio;
	}
	
	public String getMatricola() {
		return matricola;
	}

	public double getStipendio() {
		return stipendio;
	}
	
	public Dipartimento getDipartimento() {
		return dipartimento;
	}

	public void setDipartimento(Dipartimento dipartimento) {
		this.dipartimento = dipartimento;
	}

}
