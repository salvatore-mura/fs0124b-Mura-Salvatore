package ES2;

public class Main {

	public static void main(String[] args) {
		SIM sim1 = new SIM(239482349);
		sim1.aggiungiCredito(20);
		Chiamata[] listaChiamate = new Chiamata[5];
		listaChiamate[0] = new Chiamata("13131131", 13);
		listaChiamate[1] = new Chiamata("13131313", 12);
		listaChiamate[2] = new Chiamata("1313131313", 5);
		listaChiamate[3] = new Chiamata("131313131", 3);
		listaChiamate[4] = new Chiamata("1313131313", 10);
		sim1.setChiamateSim(listaChiamate);
		sim1.stampaDati();
	}
}
