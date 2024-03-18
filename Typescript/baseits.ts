// DATA TYPES
let nome:string = "Tore"
let età:number = 27
let isMalee:boolean = true

// UNION
let compleanno:(string | number)
compleanno = 96
compleanno = "ventinove"
compleanno = "unidici"

// never, unkown e any
let throwErrow = ():never => {
    throw "this is an error"
}

// unknow non riconosce i metodi, any è sconsigliatyo pichè non da tipizzazione

