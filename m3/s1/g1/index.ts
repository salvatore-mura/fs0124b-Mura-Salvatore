interface telefonoCellulare {
    credito: number
    numeroChiamate: number
    }


class User implements telefonoCellulare {
    nome: string
    cognome: string
    credito: number = 0
    numeroChiamate: number = 0
    costoChiamata: number = 0.20
    
    constructor(nome: string, cognome: string) {
        this.nome = nome
        this.cognome = cognome
    }
    
    ricarica(valoreRicarica: number): void {
        this.credito += valoreRicarica
        console.log('Ricarica effettuata.');
    }
    
    chiamata(minuti: number): void {
        const totaleMinuti = this.costoChiamata * minuti;
        if (this.credito >= totaleMinuti) {
            this.credito -= totaleMinuti
            this.numeroChiamate++
            console.log('Chiamata effettuata.')
        } else {
            console.log('Credito insufficiente.')
        }
    }
    
    chiama404(): number {
        return this.credito
    }
    
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    
    azzeraChiamate(): void {
        this.numeroChiamate = 0
        console.log("Numero chiamate azzerato.")
    }
}

let utente1 = new User("Salvatore", "Mura")
utente1.ricarica(10)
utente1.chiamata(5)
console.log(`Credito residuo: ${utente1.chiama404()} euro`)
console.log(`Numero di chiamate effettuate: ${utente1.getNumeroChiamate()}`)
utente1.azzeraChiamate()