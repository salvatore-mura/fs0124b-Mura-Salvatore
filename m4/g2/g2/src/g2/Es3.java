package g2;

import java.util.Scanner;

public class Es3 {
    	public static void main(String[] args) {
    		//vairabile stringa vuota
    		String input = "";
    		//dichiarazione scanner
    		Scanner scanner = new Scanner(System.in);
    		do {
    			System.out.println("Inserire una stringa(o premere 'q' per uscire):");
    			input = scanner.nextLine();
    			//suddivisione stringa in array di stringhe
    			String[] caratteri = input.split("");
    			//congiungere le strignhe con la virgola
    			System.out.println(String.join(",", caratteri));
    		} while (input.equals("q"));
    		scanner.close();    	
    	}
}