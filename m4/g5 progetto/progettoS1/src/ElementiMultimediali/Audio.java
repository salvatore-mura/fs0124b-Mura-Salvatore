package ElementiMultimediali;

import ElementoMultimedialeGenerico.ElementoMultimediale;
import Interfacce.Riproduci;

public class Audio extends ElementoMultimediale implements Riproduci {

	public Audio( String titolo, int tempo, int volume) {
	    super(0, volume, titolo, tempo);
	    this.volume = volume;
	}
    @Override
    public void riproduci() {
        // Ciclo che si basa sui secondi inseriti e si ripete per ogni secondo
        for (int i = 0; i < getTempo(); i++) {
        	// Stampa il un ! per ogni valore di tempo
            for (int j = 0; j < getVolume(); j++) {
                System.out.print("!");
            }
            System.out.println();
        }
    }

    @Override
    public void play() {
    }

	@Override
	public void show() {		
	}
}
