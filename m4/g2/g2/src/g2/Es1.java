package g2;

public class Es1 {
    public static void main(String args[]) {
        pariEDispari("Heyyy");
        pariEDispari("ttok??");
        Bisestile(1234);
        Bisestile(2008);
        Bisestile(2200);
    }
    
    public static void pariEDispari(String valore) {
        if (valore.length() % 2 == 0) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }
    public static void Bisestile(int anno) {
    	if(anno % 4 == 0) {
    		System.out.println(true);
    	}
    	else if(anno % 100 == 0 && anno % 400 == 0) {
    		System.out.println(true);
    	}
    	else {
    		System.out.println(false);
    	}
    }
}