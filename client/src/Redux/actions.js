//Dependencies:
import axios from 'axios';

//Components:
import {
  GET_ALL_GAMES, 
  GET_ALL_GENRES, 
  CREATE_VIDEOGAME, 
  GET_BY_NAME, 
  GET_BY_ID, 
  ORDER_ALPHABET,
  ORDER_GENRE,
  ORDER_RATING,
  IS_CREATED,
  CLEAN_STATE,
  GET_BY_NAME_FROM_API,
  RETURN_HOME
}from './actions-types';

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
      console.error('Error fetching game', error);
    }
  };



  export const getByName = (name) => {
    return async (dispatch) => {
      try {
        // Realiza una petición a la API local usando Axios
        const response = await axios.get(`http://localhost:3001/games?name=${name}`);
        const gamesFromApi = response.data; // Suponiendo que la respuesta contiene los juegos filtrados.
  
        // Realiza el primer dispatch con el resultado de la búsqueda en la API.
        dispatch({
          type: GET_BY_NAME_FROM_API,
          payload: gamesFromApi,
        });
  
        // Realiza el segundo dispatch con el nombre.
        dispatch({
          type: GET_BY_NAME,
          payload: name,
        });
      } catch (error) {
        // Maneja los errores aquí si es necesario
        alert('Error al obtener datos desde la API:', error);
      }
    };
  };
  
  
  export const createVideogame = (payload) => {
    return async (dispatch) => {
      try {
        const data = await axios.post("http://localhost:3001/post", payload);
        return dispatch({
          type: CREATE_VIDEOGAME,
          payload: data,
        });
      } catch (error) {
        alert("Could not create the game");
      }
    };
  };

export const orderAlphabet = (payload) => {
  return{
      type: ORDER_ALPHABET,
      payload,
  }
};

// export const getGamesForGenre = (name) => {
//   return async (dispatch) => {
//     // Simula una espera de 3 segundos antes de verificar si se encontraron juegos.
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Supongamos que tienes una función o un selector para obtener los juegos del género.
//     const games = getGamesForGenre(name);

//     if (games.length === 0) {
//       // No se encontraron juegos para el género después de 3 segundos.
//       alert("No se encontraron juegos para este género");
//     } else {
//       // Actualiza el estado de Redux con los juegos encontrados.
//       dispatch({
//         type: ORDER_GENRE,
//         payload: name,
//       });
//     }
//   };
// };


export const getGamesForGenre = (name) =>{
  return {
    type: ORDER_GENRE,
    payload:name
  }
  
}

export const orderbyRating = (rating)=>{
  return{
    type: ORDER_RATING,
    payload:rating
  }
}
 export const isCreated = (payload)=>{
  return{
    type:IS_CREATED,
    payload,
  }
 }
 export const cleanState =(payload)=>{
  return{
    type: CLEAN_STATE,
    payload,
  }
 }

 export const returnHome =(payload)=>{
  return{
    type: RETURN_HOME,
    payload,
  }
 }
