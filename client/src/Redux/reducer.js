import {
  GET_ALL_GAMES, 
  GET_ALL_GENRES, 
  CREATE_VIDEOGAME, 
  GET_BY_NAME, 
  GET_BY_ID, 
  ORDER_ALPHABET,
  ORDER_GENRE,
  
} from './actions-types'


const initialState= {
    allGames:[],
    sortGames:[],
    allGenres: [],
    gamesByName: [],
    gamesById:[],
    loading: false,
    
}

const reducer= (state= initialState, {type, payload})=>{
    switch(type){
      case GET_ALL_GAMES:
            return {
                ...state,
                allGames: payload,
                sortGames: payload,
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
                sortGames: payload,
            }
            
      case GET_BY_NAME:
            // Filtra los juegos para que coincidan con el nombre buscado
      const gamesByNames = state.allGames.filter((game) => {
        return game.name.toLowerCase().includes(payload.toLowerCase());
      });
      return {
        ...state,
        gamesByName:gamesByNames,
      };
      case GET_BY_ID:
        return {
            ...state,
            gamesById: payload,
        }
    
    
      case ORDER_ALPHABET:     
      const videogamesOrdered = (payload) => {
        console.log(payload)
        if (payload === A-Z) {
          return {
            ...state,
            sortGames: [...state.sortGames.sort((a, b) => a.name.localeCompare(b.name))],
          };
        } else if (payload === Z-A) {
          return {
            ...state,
            sortGames: [...state.sortGames.sort((a, b) => b.name.localeCompare(a.name))],
          };
        }
      }
      console.log(videogamesOrdered)
    return {
      ...state,
      sortGames: videogamesOrdered,
      
    }
    
    case ORDER_GENRE:
      //console.log(payload)
      // let filteredGames=[...state.sortGames];
      // console.log(filteredGames)
      // if(payload === "All"){
      //  filteredGames=[...state.allGames]
      // }else{
      //   filteredGames= filteredGames.filter((game)=>game.genres && game.genres.includes(payload))
      //   console.log(filteredGames)
      // }
      // return {
      //   ...state,
      //   sortGames: filteredGames,
      // };
      case ORDER_GENRE:
  const gamesWithGenre = state.allGames.filter((game) => game.genres.includes(payload));

  return {
    ...state,
    sortGames: gamesWithGenre,
  };
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