const axios = require('axios').default;

/*
 * Funcion que hace peticiones para obtener un total
 * de numberOfItem   
 * 
 * @author andres107 https://github.com/andres107
 * */
export async function getCharacters( numberOfItems ) {
    var characters = [];
    const url = 'https://rickandmortyapi.com/api/character/';
    for (let i = 1; i <= numberOfItems; i++) {
        characters.push(
            await axios.get( 'https://cors-anywhere.herokuapp.com/' + url + i,
            {
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'mode': 'no-cors'
                }
            } ).then((response) => {
                return response.data;
            }).catch( (error) => {
                return error;
            })
        );        
    }
    return characters;
}

