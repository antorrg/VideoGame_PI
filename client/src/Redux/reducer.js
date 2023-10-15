import {GET_ALL_GAMES, GET_ALL_GENRES,} from './actions-types'


const initialState= {
    allGames:[],
    filtGames:[],
    allGenres: []
    
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
            
        default: return {...state}
    }
}

export default reducer;
