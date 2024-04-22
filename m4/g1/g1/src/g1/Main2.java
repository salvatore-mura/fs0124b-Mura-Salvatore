package g1;

import java.util.Scanner;

public class Main2 {
	public static void main(String[] args) {
		//Dichiarazione metodo scanner
		Scanner scan = new Scanner(System.in);
		//Creazione array di 3 elemtni
		String[] inputStrings = new String[3];
		//Richiesta delle stringhe da inserire
		System.out.println("Inserisci la prima stringa");
		inputStrings[0] = scan.nextLine();
		System.out.println("inserisci la seconda stringa");
		inputStrings[1] = scan.nextLine();
		System.out.println("inserisci la terza stringa");
		inputStrings[2] = scan.nextLine();
		//Concatenamento stringhe in ordine di inseriemnto e al contrario
		System.out.println("Stringhe concatenate" + inputStrings[0] + inputStrings[1] + inputStrings[2]);
		System.out.println("Stringhe concatenate in ordine inverso" + inputStrings[2] + inputStrings[1] + inputStrings[0]);
		scan.close();
	}
}
