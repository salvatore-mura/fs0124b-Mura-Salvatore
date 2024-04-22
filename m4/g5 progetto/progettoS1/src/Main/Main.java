package Main;
import java.util.Scanner;
import ElementiMultimediali.Audio;
import ElementiMultimediali.Immagine;
import ElementiMultimediali.Video;
import ElementoMultimedialeGenerico.ElementoMultimediale;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ElementoMultimediale[] playlist = new ElementoMultimediale[5];

        for (int i = 0; i < playlist.length; i++) {
            System.out.print("Inserisci il tipo di elemento multimediale (1-video/2-audio/3-immagine), oppure digita 'q' per terminare: ");
            String tipo = scanner.nextLine();
            if (tipo.equals("q")) {
                break;
            }
            switch (tipo) {
                case "1":
                    playlist = aggiungiElemento(playlist, creaVideoDaInputUtente(scanner));
                    break;
                case "2":
                    playlist = aggiungiElemento(playlist, creaAudioDaInputUtente(scanner));
                    break;
                case "3":
                    playlist = aggiungiElemento(playlist, creaImmagineDaInputUtente(scanner));
                    break;
                default:
                    System.out.println("Tipo inserito incorretto.");
                    i--;
                    // Ripete il ciclo se il comando non è corretto
                    break;
            }
        }

        // Stampa la lista degli elementi una volta definiti
        System.out.println("Elenco degli elementi:");
        for (int i = 0; i < playlist.length; i++) {
            if (playlist[i] != null) {
                System.out.println((i + 1) + ". " + playlist[i].getTitolo());
            }
        }

        while (true) {
            System.out.println("Seleziona l'elemento da riprodurre (1 di " + playlist.length + "), 0 per uscire: ");
            int scelta = Integer.parseInt(scanner.nextLine());

            if (scelta == 0) {
                break;
            }

            if (scelta >= 1 && scelta <= playlist.length && playlist[scelta - 1] != null) {
                playlist[scelta - 1].riproduci();
            } else {
                System.out.println("Scelta non valida.");
            }
        }
        scanner.close();
    }

    // Metodo per aggiungere un elemento a un array
    private static ElementoMultimediale[] aggiungiElemento(ElementoMultimediale[] array, ElementoMultimediale elemento) {
        boolean inserito = false;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == null) {
                array[i] = elemento;
                inserito = true;
                break;
            }
        }
        if (!inserito) {
            // Se l'array è pieno, ne crea uno nuovo con dimensione doppia
            ElementoMultimediale[] newArray = new ElementoMultimediale[array.length * 2];
            System.arraycopy(array, 0, newArray, 0, array.length);
            newArray[array.length] = elemento;
            array = newArray;
        }
        return array;
    }

    // Creazione del video da input utente
    private static Video creaVideoDaInputUtente(Scanner scanner) {
        System.out.print("Inserisci il titolo del video: ");
        String titolo = scanner.nextLine();
        System.out.print("Inserisci la durata: ");
        int durata = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci il volume: ");
        int volume = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci la luminosita: ");
        int luminosita = Integer.parseInt(scanner.nextLine());
        return new Video(titolo, durata, volume, luminosita);
    }

    // Creazione dell'audio da input utente
    private static Audio creaAudioDaInputUtente(Scanner scanner) {
        System.out.print("Inserisci il titolo dell'audio: ");
        String titolo = scanner.nextLine();
        System.out.print("Inserisci la durata dell'audio (in secondi): ");
        int durata = Integer.parseInt(scanner.nextLine());
        System.out.print("Inserisci il volume dell'audio: ");
        int volume = Integer.parseInt(scanner.nextLine());
        return new Audio( titolo, durata, volume);
    }

    // Creazione dell'immagine da input utente
    private static Immagine creaImmagineDaInputUtente(Scanner scanner) {
        System.out.print("Inserisci il titolo dell'immagine: ");
        String titolo = scanner.nextLine();
        System.out.print("Inserisci la luminosita dell'immagine: ");
        int luminosita = Integer.parseInt(scanner.nextLine());
        return new Immagine(luminosita, titolo); 
    }
}
