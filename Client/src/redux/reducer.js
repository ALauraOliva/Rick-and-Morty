import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL_CHARACTERS, SEARCH_BY_ID, GET_ALL_FAVS } from "./action-types";

const initialState = {
    allCharsHome : [],
    myFavorites  : [],
    dynamicChars : [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            console.log(action.payload);
            return{
                ...state,
                dynamicChars : state.myFavorites.concat(action.payload),
                myFavorites  : state.myFavorites.concat(action.payload)
            }
            
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites  : action.payload,
                dynamicChars : action.payload
            }
        
        case FILTER:
            const myFavoritesFil = state.myFavorites.filter(character => character.gender === action.payload)
        
            return{
                ...state,
                dynamicChars : 
                action.payload === 'All'
                ? [...state.myFavorites]
                : myFavoritesFil        
            }    
        
        case ORDER:
            const myFavoritesOrder = state.dynamicChars ? state.dynamicChars : state.myFavorites;
            return{
                ...state,
                dynamicChars :
                action.payload === 'A'
                ? myFavoritesOrder.sort((a,b) => a.id - b.id) 
                : myFavoritesOrder.sort((a,b) => b.id - a.id)
            }

        case GET_ALL_CHARACTERS:
            return{
                ...state,
                allCharsHome : action.payload,
            }

        case GET_ALL_FAVS:
            return{
                ...state,
                myFavorites : action.payload,
            }

        case SEARCH_BY_ID:
            const repeatValue = state.allCharsHome.find(charac=> charac.id===Number(action.payload.id));

            return{
                ...state,
                allCharsHome : repeatValue ? [...state.allCharsHome] : [action.payload, ...state.allCharsHome]
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer;