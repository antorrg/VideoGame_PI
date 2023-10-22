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
  ORDER_GENRE
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
    return (dispatch)=>{
     dispatch({
      type: GET_BY_NAME,
      payload: name,
    })
    }
  };
  //export const getByName =(name)=> async (dispatch)=>{
  //   try {
  //     const response = await axios(`http://localhost:3001/games?name=${name}`);
  //       return dispatch({
  //         type:GET_BY_NAME,
  //         payload: response.data,
  //       });
      
  //   } catch (error) {
  //     alert("Could not found the games selected");
  //   }  
  
    
  // }
   
  export const createVideogame = (payload) => {
    return async (dispatch) => {
      try {
        const data = await axios.post("http://localhost:3001/post", payload); 
        dispatch({
          type: CREATE_VIDEOGAME,
          payload: data.data, 
        });
        
      } catch (error) {
        
        console.error("Error creating the video game:", error);
        
      }
    };
  };

  //?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //Sortings functions:
  export const orderAlphabet = (payload) => {
    return{
        type: ORDER_ALPHABET,
        payload,
    }
};

//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//? Filters:
// export const getGamesForGenre = (nameGenre) => {
//   return (dispatch)=>{({
//     type: ORDER_GENRE,
//     payload: nameGenre,
//   });
//  }
// };
export function getGamesForGenre(name) {
  return (dispatch)=>{({
    type: ORDER_GENRE,
    payload:name
  })
  };
}

  