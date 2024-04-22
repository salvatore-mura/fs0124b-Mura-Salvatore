package ElementoMultimedialeGenerico;

public abstract class ElementoMultimediale {
    protected int luminosita;
    protected int volume;
    protected int tempo;
    protected String titolo;

    // Costruttore
    public ElementoMultimediale(int luminosita, int volume, String titolo, int tempo) {
        this.luminosita = luminosita;
        this.volume = volume;
        this.titolo = titolo;
        this.tempo = tempo;
    }

    // Metodi set e get per luminosità
    public int getLuminosita() {
        return this.luminosita;
    }

    public void setLuminosita(int luminosita) {
        this.luminosita = luminosita;
    }

    // Metodi set e get per volume
    public int getVolume() {
        return this.volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    // Metodo per aumentare la luminosità
    public void aumentaLuminosita() {
        this.luminosita++;
    }

    // Metodo per diminuire la luminosità
    public void diminuisciLuminosita() {
        this.luminosita--;
    }

    // Metodo per aumentare il volume
    public void aumentaVolume() {
        this.volume++;
    }

    // Metodo per diminuire il volume
    public void diminuisciVolume() {
        this.volume--;
    }

    // Metodi set e get per il tempo
    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }

    // Metodi get e set per titolo
    public String getTitolo() {
        return this.titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    // Metodo per riprodurre l'elemento multimediale
    public abstract void riproduci();

    // Metodo per visualizzare l'elemento multimediale
    public abstract void show();
}

