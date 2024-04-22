package ElementiMultimediali;

import ElementoMultimedialeGenerico.ElementoMultimediale;

public class Immagine extends ElementoMultimediale {
	public Immagine( int luminosita, String titolo) {
        super(luminosita, 0, titolo, 0);
    }

    @Override
    public void show() {
    	System.out.println("Immagine: " + getTitolo() + ", luminosita: " + getLuminosita());
    }
    @Override
    public void riproduci() {
    }
}
