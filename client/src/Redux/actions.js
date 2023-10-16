//Componentes:
import {GET_ALL_GAMES, GET_ALL_GENRES }from './actions-types';
//Dependencias:
import axios from 'axios';

export const getAllGames =()=> async (dispatch)=>{
    try {
      const allGames = [];
      for (let i = 1; i <= 5; i++) {
      const response = await axios(`http://localhost:3001/games`);
      allGames.push(...response.data);
    }
        return dispatch({
          type:GET_ALL_GAMES,
          payload: allGames,
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
