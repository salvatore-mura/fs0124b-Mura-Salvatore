package g1;
import java.util.Arrays;

public class Main {
public static void main(String[] args) {
	//Dichiarazione variabili e metodo per moltiplicare
	int a = 20;
	int b = 50;
	int risultato = moltiplica(a, b);
	System.out.println(risultato);
	//Dichiarazione variabili e metodo per concatenare
	String c = "hey";
	int d = 3;
	System.out.println(concat(c, d));
	//Dichiarazione Array e stringa singola e concatenamento 
	
	String[] arrayStringhe = {"hey", "hey2", "hey3", "hey4", "hey5"};
	String stringaSingola = "heySingolo";
	String[] arr = inserisciInArray(arrayStringhe, stringaSingola);
	
	System.out.println(Arrays.toString(arr));
}

public static int moltiplica(int a, int b) {
	return a * b;
}

public static String concat(String str, int num) {
	return str + num;
}

public static String[] inserisciInArray(String[] stringArray, String stringaSingola) {
	String[] array = new String[6];	
	System.arraycopy(stringArray, 0, array, 0, 4); 
    array[3] = stringaSingola;  
    System.arraycopy(stringArray, 3, array, 4, stringArray.length - 3);  
    return array;
}

}
