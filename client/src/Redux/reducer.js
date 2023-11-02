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
  
} from "./actions-types";

const initialState = {
  allGames: [],
  sortGames: [],
  allGenres: [],
  gamesByName: [],
  gamesById: [],
  stateSwitched:false,
  previousState:[],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: payload,
        sortGames: payload,
        stateSwitched:false,
        previousState: payload,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        allGenres: payload,
      };

    case CREATE_VIDEOGAME:
      return {
        ...state,
        
      };
      
    // case GET_BY_NAME:
    //   const gamesByNames = state.allGames.filter((game) => {
    //     return game.name.toLowerCase().includes(payload.toLowerCase());
    //   });
    //   if (gamesByName.length === 0) {
    //     alert("No games were found for this name. To restart the State, press Enter or click on search.");
    //   }
    //   return {
    //     ...state,
    //     gamesByName: gamesByNames,
    //     sortGames: gamesByNames,
    //     stateSwitched:true,
    //     previousState: gamesByNames,
    //   };
      
    // 
    case GET_BY_NAME:
  // Aquí puedes implementar la lógica para filtrar los juegos locales basados en el nombre.
  const nameToSearch = payload;
  const findedGames = state.allGames.filter((game) =>
    game.name.toLowerCase().includes(nameToSearch.toLowerCase())
  );

  return {
    ...state,
    gamesByName: findedGames,
    sortGames: findedGames,
    stateSwitched: true,
    previousState: state.gamesByName,
  };

  case GET_BY_NAME_FROM_API:
  const gamesFromApi = payload;
   const gamesToAdd = gamesFromApi.filter((apiGame) => {
    return !state.allGames.some((localGame) => localGame.id === apiGame.id);
  });

  if (gamesToAdd.length > 0) {
    // Si hay juegos para agregar, combina los juegos de la API con los juegos locales.
    const combinedGames = [...state.allGames, ...gamesToAdd];
  
  return {
    ...state,
    allGames: combinedGames, // Actualiza los juegos locales con los combinados.
  };
}
return {...state};


    

    case GET_BY_ID:
      return {
        ...state,
        gamesById: payload,
       
      };
     

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
     sortedGames = [...state.sortGames];
     sortedGames.sort(function (a, b) {
       if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
       if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
       return 0;
     });
   }
   return {
     ...state,
     gamesByName: sortedGames,
     sortGames: sortedGames,
   };

   
    case ORDER_GENRE:
      let fixedState = state.stateSwitched ? [...state.previousState] : [...state.allGames];
      let changingState = state.stateSwitched ?  [...state.gamesByName] :[...state.allGames];
      let filteredGames = changingState;
      if (payload === "All") {
        filteredGames = fixedState;
      } else {
        filteredGames = changingState.filter((game) =>
          game.genres.includes(payload)
        );
      }
      if (filteredGames.length === 0) {
        alert("No games were found for this genre. To restart the State, place the genres selector in its default position (Fiter by genre).");
      }
      return {
        ...state,
        gamesByName:filteredGames,
        sortGames: filteredGames,
        
      };
       
  
  case ORDER_RATING:
    let nameFixState = state.stateSwitched ? [...state.previousState] : [...state.allGames];
    let nameState = state.stateSwitched ?  [...state.gamesByName] :[...state.sortGames];

  let ratinGames = null;
   if (payload === "All") {
     ratinGames = nameFixState;
    
   }if (payload === "ASC") {
    ratinGames = nameState;
    ratinGames.sort((a, b) => a.rating - b.rating);
  } if (payload === "DES") {
    ratinGames = nameState;
    ratinGames.sort((a, b) => b.rating - a.rating);
  }
  return {
    ...state,
    gamesByName: ratinGames,
    sortGames: ratinGames,
  };

 case IS_CREATED:
  let fixState = state.stateSwitched ? [...state.previousState] : [...state.allGames];
      let changState = state.stateSwitched ?  [...state.gamesByName] :[...state.allGames];

  const createdInDb = payload === "true" ? true : payload === "false" ? false : null;

  if (createdInDb === null) {
    
    return {
      ...state,
      gamesByName:fixState,
      sortGames: fixState,
    };
  }

  const filCreatGames = changState.filter((game) => game.createdInDb === createdInDb);
  return {
    ...state,
    gamesByName:filCreatGames,
    sortGames: filCreatGames,
  };

  case CLEAN_STATE:
    return{
      ...state,
      gamesById:[],
    }
    
    case RETURN_HOME:
      if (state.switchedState) {
        return {
          ...state,
          gamesByName: state.previousState,
          stateSwitched: true,
        };
      } else {
        return {
          ...state,
          sortGames: state.sortGames,
          stateSwitched: false,
        };
      }
    

  default:
    return { ...state };

  }
};

export default reducer;
