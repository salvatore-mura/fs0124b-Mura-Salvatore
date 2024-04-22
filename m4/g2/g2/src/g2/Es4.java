package g2;

import java.util.Scanner;

public class Es4 {
    public static void main(String[] args) {
    	//SCANNER
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Inserisci un numero: ");
        int numero = scanner.nextInt();
        
        stampa(numero);
        
        scanner.close();
    }
    
    public static void stampa(int num) {
        for (int i = num; i > 0; i--) {
        System.out.println(i);
    }
    }
}
