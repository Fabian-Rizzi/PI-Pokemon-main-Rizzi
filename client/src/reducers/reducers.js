import {
    GET_POKEMONS,
} from "../actions/actions";

const initialState = {
    pokemons: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            };
        default:
            return state;
    }
}