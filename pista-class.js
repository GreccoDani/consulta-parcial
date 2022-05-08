
 class Pista{

    #pista = [];
    #nombPista;
    #duracion;
    static contPist = 0;

    constructor(){
        console.log('La pista fue creada');
    }

    establecNombPista(){

        let nombPista;
        
       do{

           nombPista = prompt('Ingrese el nombre de la Pista');

       }while(!isNaN(nombPista))

       this.#nombPista = nombPista;
       
       this.#pista.push(this.#nombPista);


    }

    establecDurac(){

      let duracion;

        do {

                duracion = parseInt(prompt('Ingrese la duración de la pista'));

           } while (!(duracion >= 0 && duracion <= 7200));

            this.#duracion = duracion;
            this.#pista.push(this.#duracion);

    }

    obtenerPistas(){
        return this.#nombPista;

    }

    obtenerDuracion(){
        return this.#duracion;
    }

   
}

