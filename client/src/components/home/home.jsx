import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions/actions.js'

export default function Home() {
  const [pokemons, setPokemons] = useState(false)
  const dispatch = useDispatch()
  const pokemonsRedux = useSelector((state) => state.pokemons) //.pokemons?
  
  console.log(pokemonsRedux)
  console.log('asd')


  useEffect(() => {
    if (pokemons === false) {
      setPokemons(true)
    }
    if (pokemonsRedux.length === 0) {
      dispatch(getPokemons())
    }

  }, [pokemonsRedux])


  return (
    <div>
      <h1>Homeee</h1>
      <div className="container">
        {pokemonsRedux.map((pokemon) => {
          return (
            <div className="pokemon-card">
              <h3>{pokemon.name}</h3>
              <div className="pokemon-card-info">
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}
