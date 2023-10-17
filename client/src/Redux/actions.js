//Componentes:
import {GET_ALL_GAMES, GET_ALL_GENRES, CREATE_VIDEOGAME, GET_BY_NAME }from './actions-types';
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
  
  export const getByName = (name) => {
    return {
      type: GET_BY_NAME,
      payload: name,
    };
  };

  export const createVideogame = (payload) => {
    return async (dispatch) => {
      try {
        const data = await axios.post("http://localhost:3001/", payload); 
        dispatch({
          type: CREATE_VIDEOGAME,
          payload: data.data, 
        });
        
      } catch (error) {
        
        console.error("Error al crear el videojuego:", error);
        
      }
    };
  };
  