
let discografia = [];
 

class Disco{
    #nombre;
    #autor;
    #codigo;
    #pistas = [];
    static contDisc = 0;


    constructor(){
        console.log('El disco fue creado')
    }

    establecNombre(){
        let nombre;

            do{

                nombre = prompt('Ingrese el nombre del Disco');

            }while(!isNaN(nombre))
            this.#nombre = nombre;

    }

    establecAutor(){
       let autor;
       do{

            autor = prompt('Ingrese el autor o banda del Disco');

       }while(!isNaN(autor))
       this.#autor = autor;
    }

    establecCodigo(){
       let codigo;
       do{

            codigo = parseInt(prompt('Ingrese el nombre del Disco'));

       }while(!(codigo >= 1 && codigo <= 999))
       this.#codigo = codigo;

    }

    estPista(pistas){

        this.#pistas.push(pistas);
 
     }

    obtenerNombr(){
       return this.#nombre;
   }

   obtenerAutor(){
       return this.#autor;
   }
    obtenerCodig() {
        return this.#codigo;

    }

    obtenerPistas(){
        return this.#pistas;
    }

    

}

