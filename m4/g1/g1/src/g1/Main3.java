package g1;

public class Main3 {
	public static void main(String[] args) {
		System.out.println(perimetro(10, 12.5));
		System.out.println(pariDispari(4));
		System.out.println(area(2.5, 4.2, 5.6));
	}
//Metodo calcolo perimetro rettangolo
	public static double perimetro(double lato1, double lato2) {
		return 2 * (lato1 + lato2);
	}
//Metodo pari e dispari che restituisce 0 se è pari e 1 se è dispari
	public static int pariDispari(int input) {
		return input % 2 == 0 ? 0 : 1;
	}
//Metodo Calcolo area triangolo da 3 lati
	public static double area(double l1, double l2, double l3) {
		double semiPerimeter = (l1 + l2 + l3) / 2;
		return Math.sqrt(semiPerimeter * (semiPerimeter - l1) * (semiPerimeter - l2) * (semiPerimeter - l3));
	}
}
