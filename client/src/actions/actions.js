import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS",
    GET_BY_ID = "GET_BY_ID",
    GET_TYPES = "GET_TYPES",
    SEARCH_POKEMON = "SEARCH_POKEMON";


export function getPokemons() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3002/pokemons");
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
}

export function getById(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3002/pokemons/${id}`);
        return dispatch({
        type: GET_BY_ID,
        payload: response.data,
        });
    };
    }

export function getTypes() {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3002/types");
        return dispatch({
        type: GET_TYPES,
        payload: response.data,
        });
    };
    }

export function searchPokemon(name) {
    return async function (dispatch) {
        try {
        const response = await axios.get(
            `http://localhost:3002/pokemons?name=${name}`
        );
        return dispatch({
            type: SEARCH_POKEMON,
            payload: response.data,
        });
        } catch (err) {

        console.log(err.message);
        console.log("Pokemon not found")
        return dispatch({
            type: SEARCH_POKEMON,
            payload: "Pokemon not found",
          });
        }
    };
    }

