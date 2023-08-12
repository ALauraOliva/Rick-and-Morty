import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALL_CHARACTERS } from './action-types'
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

export const addFav = (character) => {
   console.log(character);
    return async (dispatch) => {
      try {
         const { data } = await axios.post(`${URL}/fav`, character)
         
         if(!data.length) throw Error(data.error)
         return dispatch({type: ADD_FAV, payload: data});
      } catch (error) {
         console.log(error);
         alert("error: " + error.response.data)
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

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return {type: ORDER, payload:order}
}