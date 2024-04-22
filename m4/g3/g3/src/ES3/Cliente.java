package ES3;

import java.util.Date;

public class Cliente {
	private String codice;
	private String nome;
	private String cognome;
	private String email;
	private Date dataIscrizione;

	public Cliente(String codice, String nome, String cognome, String email, Date dataIscrizione) {
		this.codice = codice;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.dataIscrizione = dataIscrizione;
	}



}
