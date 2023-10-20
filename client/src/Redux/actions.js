//Componentes:
import {GET_ALL_GAMES, GET_ALL_GENRES, CREATE_VIDEOGAME, GET_BY_NAME, GET_BY_ID, ORDER_ALPHABET}from './actions-types';
//Dependencias:
import axios from 'axios';

export const getAllGames =()=> async (dispatch)=>{
    try {
      const response = await axios(`http://localhost:3001/games`);
        return dispatch({
          type:GET_ALL_GAMES,
          payload: response.data,
        });
      
    } catch (error) {
      alert("Could not found the games selected");
    }  
  
    
  }

  export const getAllGenres = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/genres');
      return dispatch({
        type: GET_ALL_GENRES,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };
  
  export const getById = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/${id}`);
      return dispatch({
        type: GET_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };

  export const getByName = (name) => {
    return {
      type: GET_BY_NAME,
      payload: name,
    };
  };
  // export const getByName = (name) => async{
  //   return (dispatch, getState) => {
  //       axios
  //         .get(`http://localhost:3001/game/${name}`)
  //         .then((response) => {
  //           // Despacha una acción para actualizar gamesByName con los datos obtenidos
  //           dispatch({
  //             type: GET_BY_NAME,
  //             payload: {
  //               name: name, // Agrega el nombre buscado
  //               games: response.data, // Agrega el arreglo de juegos de la API
  //             },
  //           });
            
  //         })
  //         .catch((error) => {
  //           console.error('Error fetching game:', error);
  //           // Maneja el error, por ejemplo, mostrando una alerta
  //           alert('Error fetching game');
  //         });
  //     }
  //   };
  // };
   
  export const createVideogame = (payload) => {
    return async (dispatch) => {
      try {
        const data = await axios.post("http://localhost:3001/post", payload); 
        dispatch({
          type: CREATE_VIDEOGAME,
          payload: data.data, 
        });
        
      } catch (error) {
        
        console.error("Error al crear el videojuego:", error);
        
      }
    };
  };

  //?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //Funciones de ordenamiento:
  export const orderAlphabet = (payload) => {
    return{
        type: ORDER_ALPHABET,
        payload,
    }
}


//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Renderizado paginado:

  