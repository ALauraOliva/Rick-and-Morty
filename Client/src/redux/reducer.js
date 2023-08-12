import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL_CHARACTERS } from "./action-types";

const initialState = {
    allCharsHome     : [],
    myFavorites      : [],
    dynamicChars     : [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites  :  state.myFavorites.concat(action.payload)
            }
            
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: action.payload
            }
        
        case FILTER:
            const allCharcatersFavFiltered = state.allCharcatersFav.filter(character => character.gender === action.payload)
        
            return{
                ...state,
                myFavorites : allCharcatersFavFiltered        
            }    
        
        case ORDER:
            const allCharcatersFavCopy = [...state.allCharcatersFav]
            return{
                ...state,
                myFavorites :
                action.payload === 'A'
                ? allCharcatersFavCopy.sort((a,b) => a.id - b.id) 
                : allCharcatersFavCopy.sort((a,b) => b.id - a.id)
            }

        case GET_ALL_CHARACTERS:
            return{
                ...state,
                allCharsHome : action.payload,
                dynamicChars : action.payload,
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer;