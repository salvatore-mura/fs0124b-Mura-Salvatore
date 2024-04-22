package ElementiMultimediali;

import ElementoMultimedialeGenerico.ElementoMultimediale;

public class Video extends ElementoMultimediale {

    public Video(String titolo, int durata, int volume, int luminosita) {
        super(luminosita, volume, titolo, luminosita);
        this.tempo = durata;
    }

    @Override
    public void riproduci() {
    	// Ciclo che si basa sui secondi inseriti e si ripete per ogni secondo
        for (int i = 0; i < getTempo(); i++) {
            // Stampa il un ! per ogni valore di tempo
            for (int j = 0; j < getVolume(); j++) {
                System.out.print("!");
            }
            // Stampa la * per ogni valore di luminosità
            for (int j = 0; j < getLuminosita(); j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    @Override
    public void show() {
        // Implementazione del metodo show
    }
}
