import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions/actions.js'
import { Link } from 'react-router-dom'
import { getById } from '../../actions/actions.js'
import { getTypes } from '../../actions/actions.js'
import {searchPokemon} from '../../actions/actions.js'
import Card from '../card/card.jsx'


export default function Home() {
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState(false)
  const allPokemons = useSelector((state) => state.pokemons) //.pokemons?
  

  console.log(allPokemons)
  console.log('asd')


  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }
    
  

// if (pokemons === false) {
//   setPokemons(true)
// }
// if (allPokemons.length === 0) {
//   dispatch(getPokemons())
// }

  return (
    <div>
      <h1>Homeee. Tiembla Pol</h1>
      <div className="container">
        {allPokemons.map((pokemon) => {
          return (
            <div className="pokemon-card">
              <h3>{pokemon.name}</h3>
              <div className="pokemon-card-info">
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.atk}</p>
                <p>Defense: {pokemon.def}</p>
                <p>Speed: {pokemon.spd}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p> 
                <p>Types: {pokemon.types}</p>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}
