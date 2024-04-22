package ES1;

public class Main {
	public static void main(String[] args) {
		System.out.println("Stampa rettangolo: ");
		Rettangolo ret1 = new Rettangolo(10, 13);
		stampaRettangolo(ret1);
		System.out.println("Stampa due rettrangoli: ");
		Rettangolo ret2 = new Rettangolo(22, 20);
		Rettangolo ret3 = new Rettangolo(26, 22);
		stampaDueRettangoli(ret2, ret3);
	}
	
	public static void stampaRettangolo(Rettangolo rettangolo) {
		System.out.println("Perimetro: " + rettangolo.calcolaPerimetro());
		System.out.println("Area: " + rettangolo.calcolaArea());
	}

	public static void stampaDueRettangoli(Rettangolo ret1, Rettangolo ret2) {
		System.out.println("Rettangolo 1: ");
		stampaRettangolo(ret1);
		System.out.println("Rettangolo 2: ");
		stampaRettangolo(ret2);
		double sommaAree = ret1.calcolaArea() + ret2.calcolaArea();
		double sommaPerimetri = ret1.calcolaPerimetro() + ret2.calcolaPerimetro();
		System.out.println("Somma aree: ");
		System.out.println(sommaAree);
		System.out.println("Somma perimetri: ");
		System.out.println(sommaPerimetri);
	
	}
}
