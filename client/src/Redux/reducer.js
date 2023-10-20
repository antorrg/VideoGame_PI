import {
  GET_ALL_GAMES, 
  GET_ALL_GENRES, 
  CREATE_VIDEOGAME, 
  GET_BY_NAME, 
  GET_BY_ID, 
  ORDER_ALPHABET
} from './actions-types'


const initialState= {
    allGames:[],
    sortGames:[],
    allGenres: [],
    gamesByName: [],
    gamesById:[],
    isLoading: true,
    
}

const reducer= (state= initialState, {type, payload})=>{
    switch(type){
      case GET_ALL_GAMES:
            return {
                ...state,
                allGames: payload,
                sortGames: payload,
                isLoading: payload,
            }

      case GET_ALL_GENRES:
            return {
                ...state,
                allGenres:payload,
            }

      case CREATE_VIDEOGAME:
            return {
                ...state,
                allGames: payload,
        
            }
            
      case GET_BY_NAME:
            // Filtra los juegos para que coincidan con el nombre buscado
      const gamesByName = state.allGames.filter((game) => {
        return game.name.toLowerCase().includes(payload.toLowerCase());
      });
      return {
        ...state,
         sortGames:gamesByName,
      };
      case GET_BY_ID:
        return {
            ...state,
            gamesById: payload,
        }
      // case GET_BY_NAME:
      //   const gamesByName = state.allGames.filter((game) => {
      //     return game.name.toLowerCase().includes(payload.name.toLowerCase());
      //   });
      //   return {
      //     ...state,
      //     gamesByName: gamesByName, // Actualiza gamesByName
      //     sortGames: gamesByName, // Actualiza sortGames
      //   };
      
      // case ORDER_ALPHABET:     
      // const videogamesOrdered =
      //   payload === "ASC"
      //   ? [...state.sortGames].sort(function (a, b) {
      //       if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      //       if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
      //       return 0;
      //     })
      //   : state.allGames.sort(function (a, b) {
      //       if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      //       if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
      //       return 0;
      //     });
      case ORDER_ALPHABET:     
      const videogamesOrdered =(payload)=>{
      if(payload === "A-Z"){
        return{...state.sortGames.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
          return 0;
        })}
        }
        if(payload === "Z-A"){
          return{...state.sortGames.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
            return 0;
          })}
        }
      }   
    return {
      ...state,
      sortGames: videogamesOrdered,
    }
    
       

      default: 
      return {...state};

  }
 
};

export default reducer;

/* case ORDER_ALPHABET:     //If it's an ascendant value, sort compares them
const videogamesOrdered =
    payload === "ASC" //and places them to the rigth or left depending on whether they're larger or shorter
    ? state.allGames.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
        return 0; //if they're equals it doesn't change
      })
    : state.allGames.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        return 0;
      });
return {
  ...state,
  sortGames: videogamesOrdered,

  

  /*case ORDER_ALPHABET:
        let gamesOrdered = state.sortGames.sort((a, b) => {
            return payload === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
          });
         return{
            ...state,
            sortGames: gamesOrdered
             }*/