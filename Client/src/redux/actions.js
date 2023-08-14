import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL_CHARACTERS, SEARCH_BY_ID, GET_ALL_FAVS, REMOVE_CHAR } from './action-types'
const URL = "https://rickandmorty-server-pq7r.onrender.com";

export const getAllCharacters = () => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/allCharacters`);
         return dispatch({type : GET_ALL_CHARACTERS, payload: data})
         
      } catch (error) {
         alert("error: " + error.response.data)
      }
   }
}

export const getAllFavorites = () => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/fav`);
         return dispatch({type : GET_ALL_FAVS, payload: data})
         
      } catch (error) {
         alert("error: " + error.response.data)
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
         alert(error.response.data)
      }
   };
}

export const removeCharHome = (id) => {
   return { type: REMOVE_CHAR, payload: id };
}

export const searchById = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.get(`${URL}/character/${id}`)
         return dispatch({ type: SEARCH_BY_ID, payload: data });

      } catch (error) {
         alert(error.response.data)
      }
   }
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}