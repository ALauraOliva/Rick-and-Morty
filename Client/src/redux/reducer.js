import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharcatersFav:  []
}

const reducer = (state = initialState, action) => { //{type,payload}
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites : action.payload,
                allCharcatersFav: action.payload
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
                myFavorites:
                action.payload === 'A'
                ? allCharcatersFavCopy.sort((a,b) => a.id - b.id) 
                : allCharcatersFavCopy.sort((a,b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}

export default reducer;