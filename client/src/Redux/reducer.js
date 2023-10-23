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
} from "./actions-types";

const initialState = {
  allGames: [],
  sortGames: [],
  allGenres: [],
  gamesByName: [],
  gamesById: [],
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: payload,
        sortGames: payload,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        allGenres: payload,
      };

    case CREATE_VIDEOGAME:
      return {
        ...state,
        //allGames: payload,
        //sortGames: payload,
      };
//--------------------------------------------------------------------
    case GET_BY_NAME:
      const gamesByNames = state.sortGames.filter((game) => {
        return game.name.toLowerCase().includes(payload.toLowerCase());
      });
      return {
        ...state,
        gamesByName: gamesByNames,
      };
//----------------------------------------------------------------------------
    case GET_BY_ID:
      return {
        ...state,
        gamesById: payload,
      };
//------------------------------------------------------------------------------------
      case ORDER_ALPHABET:
   let sortedGames = null;
   if (payload === "All") {
     sortedGames = [...state.allGames];
   } else if (payload === "A-Z") {
     sortedGames = [...state.sortGames]; 
     sortedGames.sort(function (a, b) {
       if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
       if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
       return 0;
     });
   } else {
     sortedGames = [...state.allGames];
     sortedGames.sort(function (a, b) {
       if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
       if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
       return 0;
     });
   }
   return {
     ...state,
     sortGames: sortedGames,
   };

//------------------------------------------------------------------------
    case ORDER_GENRE:
      let filteredGames = [...state.sortGames];
      if (payload === "All") {
        filteredGames = [...state.allGames];
      } else {
        filteredGames = state.allGames.filter((game) =>
          game.genres.includes(payload)
        );
      }
      return {
        ...state,
        sortGames: filteredGames,
      };
//--------------------------------------------------------------------------
case ORDER_RATING:
  let ratinGames = null;
   if (payload === "All") {
     ratinGames = [...state.allGames];
    
   }if (payload === "ASC") {
    ratinGames = [...state.sortGames];
    ratinGames.sort((a, b) => a.rating - b.rating);
  } if (payload === "DES") {
    ratinGames = [...state.sortGames];
    ratinGames.sort((a, b) => b.rating - a.rating);
  }
  return {
    ...state,
    sortGames: ratinGames,
  };
//----------------------------------------------------------
 case IS_CREATED:
  const createdInDb = payload === "true" ? true : payload === "false" ? false : null;

  if (createdInDb === null) {
    // Si payload es "All," muestra todos los juegos sin filtrar
    return {
      ...state,
      sortGames: state.allGames,
    };
  }

  const filCreatGames = state.allGames.filter((game) => game.createdInDb === createdInDb);
  return {
    ...state,
    sortGames: filCreatGames,
  };


//!#########################################################
    default:
      return { ...state };
  }
};

export default reducer;
