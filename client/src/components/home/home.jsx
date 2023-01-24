import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions/actions.js'
import { Link } from 'react-router-dom'
import { getById } from '../../actions/actions.js'
import { getTypes } from '../../actions/actions.js'
import { clearId } from '../../actions/actions.js'
import {searchPokemon} from '../../actions/actions.js'
import Card from '../card/card.jsx'


export default function Home() {
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState(false)
  const allPokemons = useSelector((state) => state.pokemons) //.pokemons?
  
  const arrayPokemons = allPokemons.pagePokemons;

  console.log(allPokemons)
  console.log('asd')


  useEffect(() => {
    if (allPokemons.pokemons.length < 40) {
    dispatch(getPokemons());
    dispatch(getTypes());
  }
  if (allPokemons.selectPokemon.id) {
    dispatch(clearId());
  }}, [allPokemons]);

  function handleClick(e) {
    e.preventDefault();pokemons
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
        {arrayPokemons.map((pokemon, index) => {
          <pokemonDisplay index={index} key={index} />
        }
        )}
      </div>
    </div>
  )
}
