import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'



export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data)
      })
  }, [])


  return (
    <div>
      <h1>Homeee</h1>
      <div className="container">
        {pokemons.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <div className="info">
              <h3>{pokemon.name}</h3>
              <p>{pokemon.type}</p>

    </div>
          </div>
        ))}
      </div>
    </div>

  )
}
