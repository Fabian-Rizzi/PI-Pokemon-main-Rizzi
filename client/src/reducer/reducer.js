import {
    GET_POKEMONS,
    GET_BY_ID,
    GET_TYPES,
    SEARCH_POKEMON,
    NEW_LOAD,
} from "../actions/actions";

const initialState = {
    getPokemons: [],
    pokemons: [],
    allPokemons: [],
    pagePokemons: [],
    types: [],
    searchPokemon: {},
    singlePokemon: {},
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                getPokemons: action.payload,
                allPokemons: action.payload,
                pokemons: action.payload,
                pagePokemons: action.payload.slice(0, 12),
            };
        case GET_BY_ID:
            return {
                ...state,
                singlePokemon: action.payload,
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                searchPokemon: action.payload,
                pokemons: action.payload,
                pagePokemons: action.payload,
            };
        default:
            return state;
    }
}