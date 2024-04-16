package g2;

public class Es2 {
	public static void main(String args[]) {
		numToString(2);
		
	}
	public static void numToString(int num) {
		
		switch(num) {
        case 0:
            System.out.println("Zero");
            break;
        case 1:
            System.out.println("Uno");
            break;
        case 2:
            System.out.println("Due");
            break;
        case 3:
            System.out.println("Tre");
            break;
        default:
            System.out.println("Numero non valido.");
            break;
    }
	}
}
