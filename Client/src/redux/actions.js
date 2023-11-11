import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types'
import axios from 'axios'

export const addFav = (character) => {

  const endpoint = "http://localhost:3001/rickandmorty/fav";
  
  try {
    return async (dispatch) => {
    const {data} = await axios.post(endpoint, character)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      })
    }
  // eslint-disable-next-line no-unreachable
  } catch (error) {
    alert ('No se pudo agregar a favoritos')
  }
}

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  try {
    return async (dispatch) => {
      const {data} = await axios.delete(endpoint)
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      })
    }
  // eslint-disable-next-line no-unreachable
  } catch (error) {
    alert('No se pudo eliminar de favoritos')
  }

}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}