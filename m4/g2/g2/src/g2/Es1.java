package g2;

public class Es1 {
    public static void main(String args[]) {
    	//Ritorna false perche ha 5 caratteri ed è dispari
        pariEDispari("Heyyy");
      //Ritorna false perche ha 6 caratteri ed è pari
        pariEDispari("ttok??");
        //Calcolo anno bisestile
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