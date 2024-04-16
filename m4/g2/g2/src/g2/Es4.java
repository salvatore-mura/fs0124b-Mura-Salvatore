package g2;

import java.util.Scanner;

public class Es4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Inserisci un numero: ");
        int numero = scanner.nextInt();
        
        stampaConVirgole(numero);
        
        scanner.close();
    }
    
    public static void stampaConVirgole(int num) {
        for (int i = num; i > 0; i--) {
            System.out.print(i);
            if (i != 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}
