package ES2;

public class SIM {
	//Dichiarazione attributi della sim
	public int numero;
	private double credito;
	private Chiamata[] chiamateSim;
	//Costruttore
	public SIM(int numero) {
		this.numero = numero;
		this.credito = 0;
		this.chiamateSim = new Chiamata[5];
	}
	//Metodo aggiungi credito
	public void aggiungiCredito(double nuovoCredito) {
		this.credito += nuovoCredito;
	}
	//Metodo aggiugni chiamate
	public void setChiamateSim(Chiamata[] chiamateSim) {
		this.chiamateSim = chiamateSim;
	}
	//stampa dati sim
	public void stampaDati() {
		System.out.println("Sim: " + this.numero);
		System.out.println("Credito disponibile: " + this.credito);
		for (int i = 0; i < chiamateSim.length; i++) {
	            System.out.println("Chiamata " + (i + 1) + ": " + chiamateSim[i].getNumeroChiamato() + "Durata minuti: "
	                    + chiamateSim[i].getDurata());
	    }
	}
}
