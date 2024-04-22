package G4;

public class Main {

	public static void main(String[] args) {
		Dipendente dipendente1 = new Dipendente("vvvvvaaaaa", Dipartimento.AMMINISTRAZIONE, 1000);
		Dipendente dipendente2 = new Dipendente("yyyyybbbbb", Dipartimento.VENDITE, 1300);
		Dipendente dipendente3 = new Dipendente("nnnnneeeee", Dipartimento.PRODUZIONE, 1500);
		System.out.println(dipendente1.getMatricola());
		System.out.println(dipendente2.getMatricola());
		System.out.println(dipendente3.getMatricola());
	}

}
