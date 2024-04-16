package g1;

import java.util.Scanner;

public class Main2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String[] inputStrings = new String[3];
		System.out.println("Inserisci la prima stringa");
		inputStrings[0] = scan.nextLine();
		System.out.println("inserisci la seconda stringa");
		inputStrings[1] = scan.nextLine();
		System.out.println("inserisci la terza stringa");
		inputStrings[2] = scan.nextLine();
		System.out.println("Stringhe concatenate" + inputStrings[0] + inputStrings[1] + inputStrings[2]);
		System.out.println("Stringhe concatenate in ordine inverso" + inputStrings[2] + inputStrings[1] + inputStrings[0]);
		scan.close();
	}
}
