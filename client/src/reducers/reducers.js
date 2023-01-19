import {
    GET_POKEMONS,
    GET_BY_ID,
    GET_TYPES,
    SEARCH_POKEMON,
} from "../actions/actions";

const initialState = {
    // getPokemons: [],
    pokemons: [],
    types: [],
    searchPokemons: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            };
        case GET_BY_ID:
            return {
                ...state,
                pokemons: action.payload,
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                searchPokemons: action.payload,
            };
        default:
            return state;
    }
}