package g2;

import java.util.Scanner;

public class Es3 {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Inserisci una stringa o digita ':q' per uscire:");
            String inputStringa = scanner.nextLine();
            if (inputStringa.equals(":q")) {
                break;
            }
            
            stampaConVirgole(inputStringa);
        }
        
        scanner.close();
    }
    public static void stampaConVirgole(String stringa) {
        StringBuilder result = new StringBuilder();
        result.append(stringa.charAt(0));
        for (int i = 1; i < stringa.length(); i++) {
            result.append(",").append(stringa.charAt(i));
        }
        System.out.println(result.toString());
    }
}
