import React from "react";
import "./cardPokemon.css"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePokemon } from "../../redux/actions"

const CardPokemon = ({ id, image, name, types, setPkmns, state }) => {

    const dispatch = useDispatch()

    const onclick = () => {
        setPkmns(state.filter( state => state.id !== id))
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="card-pokemon">
            <button onClick={onclick} >X</button>
            <Link to={`/pokemons/${id}`} style={{ textDecoration: 'none' }}>
                <img src={image} alt="pokemon" />
                <h1>{capitalizeFirstLetter(name)}</h1>
                {/* <h3>{types}</h3> */}
            </Link>
        </div>
    )
}

export default CardPokemon