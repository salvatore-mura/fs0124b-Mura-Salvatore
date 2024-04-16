package g1;
import java.util.Arrays;

public class Main {
public static void main(String[] args) {
	int a = 20;
	int b = 50;
	int risultato = moltiplica(a, b);
	System.out.println(risultato);
	String c = "hey";
	int d = 3;
	System.out.println(concat(c, d));
	String[] arr = inserisciInArray(new String[]{"ccx", "csd", "adad", "adada", "zczc"}, "aaaaa");
	System.out.println(Arrays.toString(arr));}

public static int moltiplica(int a, int b) {
	return a * b;
}

public static String concat(String str, int num) {
	return str + num;
}

public static String[] inserisciInArray(String[] stringArray, String str) {
	String[] array = new String[6];
	for (int i = 0; i < stringArray.length +1 ; i++) {
		if(i < 2) {
			array[i] = stringArray[i];
		} else if(i == 2) {
			array[i] = str;
		} else {
			array[i] = stringArray[i - 1];
		}
	}
	
	return array;
}

}
