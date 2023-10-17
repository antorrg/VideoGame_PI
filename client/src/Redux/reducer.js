import {GET_ALL_GAMES, GET_ALL_GENRES,CREATE_VIDEOGAME, GET_BY_NAME} from './actions-types'


const initialState= {
    allGames:[],
    filtGames:[],
    allGenres: [],
    gamesByName: []
    
}

const reducer= (state= initialState, {type, payload})=>{
    switch(type){
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: payload,
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
               const  gamesByName = state.allGames.filter((game) => {
             return game.name.toLowerCase().includes(payload.toLowerCase());
             });
            return {
                ...state,
                gamesByName,
            }
            
        default: return {...state}
    }
}

export default reducer;
