package ES1;
public class Rettangolo {
	//Dichiarazione attributi
	private double larghezza;
	private double altezza;
	//Dichiarazione Costrutto Rettangolo che accetta due parametri (altezza e larghezza)
	public Rettangolo(double Altezza, double Larghezza) {
		this.altezza = Altezza;
		this.larghezza = Larghezza;		
	}	
	//Dichiarazione Metodo calcola perimetro
	public double calcolaPerimetro() {
		return (altezza + larghezza) * 2;
	}
	//Dichiarazione Metodo calcola area
	public double calcolaArea() {
			return altezza * larghezza;
		}
}
