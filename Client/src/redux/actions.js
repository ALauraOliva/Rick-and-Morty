import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL_CHARACTERS, SEARCH_BY_ID, GET_ALL_FAVS } from './action-types'
const URL = "http://localhost:3001/rickandmorty";

export const getAllCharacters = () => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/allCharacters`);
         return dispatch({type : GET_ALL_CHARACTERS, payload: data})
         
      } catch (error) {
         alert("error: " + error.response.data.error)
      }
   }
}

export const getAllFavorites = () => {
   console.log('entre aqui');
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/fav`);
         return dispatch({type : GET_ALL_FAVS, payload: data})
         
      } catch (error) {
         alert("error: " + error.response.data.error)
      }
   }
}

export const addFav = (character) => {
    return async (dispatch) => {
      try {
         const { data } = await axios.post(`${URL}/fav`, character)
         
         if(!data) throw Error(data.error)

         return dispatch({type: ADD_FAV, payload: data});
      } catch (error) {
         alert(error.response.data)
      } 
    };
}

export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${URL}/fav/${id}`)

         return dispatch({ type: REMOVE_FAV, payload: data });

      } catch (error) {
         console.log(error.message)
      }
   };
}

export const searchById = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/character/${id}`)

         return dispatch({ type: SEARCH_BY_ID, payload: data });
      } catch (error) {
         
      }
   }
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}