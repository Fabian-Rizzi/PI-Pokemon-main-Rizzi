import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../actions/actions.js";


export default function pokemonDisplay({ index }) {
//   const state = useSelector((state) => state);
  const pokemons = useSelector((state) => state);
  const dispatch = useDispatch();
  const idPokemon = pokemons.allPokemons[index].id;
//   useEffect(() => {
//     if (pokemons.pokemons.length < 40) {
//       dispatch(getAllPokemons());
//     }
//   }, [pokemons]);

  if (pokemons.pokemons.length > 0) {
    return (
      <div className="pokemonDisplay">
        <NavLink to={`/home/${idPokemon}`}>
          <input
            className="nameButton"
            type="button"
            value={
              pokemons.allPokemons[index].name.charAt(0).toUpperCase() +
              pokemons.allPokemons[index].name.slice(1)
            }
          />
        </NavLink>
        <img src={pokemons.allPokemons[index].img} alt="" />

        <p>
          Type:{" "}
          {pokemons.allPokemons[index].type2
            ? `${pokemons.allPokemons[index].type1} - ${pokemons.allPokemons[index].type2} `
            : pokemons.allPokemons[index].type1}
        </p>
      </div>
    );
  }
  return <div>loading</div>;
}