let User = /** @class */ (function () {
    function User(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoChiamata = 0.20;
        this.nome = nome;
        this.cognome = cognome;
    }
    User.prototype.ricarica = function (valoreRicarica) {
        this.credito += valoreRicarica;
        console.log("Ricarica effettuata. Nuovo credito: ".concat(this.credito, " euro"));
    };
    User.prototype.chiamata = function (minuti) {
        let costoTotale = this.costoChiamata * minuti;
        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate++;
            console.log("Chiamata effettuata. Credito rimanente: ".concat(this.credito, " euro"));
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Il numero di chiamate è stato azzerato.");
    };
    return User;
}());
let utente1 = new User("Tore", "Mura");
utente1.ricarica(10);
utente1.chiamata(5);
console.log("Credito residuo: ".concat(utente1.chiama404(), " euro"));
console.log("Numero di chiamate effettuate: ".concat(utente1.getNumeroChiamate()));
utente1.azzeraChiamate();
