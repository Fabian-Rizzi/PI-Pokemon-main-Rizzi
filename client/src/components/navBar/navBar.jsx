import React from 'react'
import SearchBar from "../searchBar/searchBar";
import { NavLink } from "react-router-dom";

function navBar() {
  return (
    
    <div>
                <NavLink to="/home">
          <img
            src="https://freepngimg.com/thumb/pokemon/20045-9-pokemon-ash-transparent.png"
            alt="pokedex"
          />
        </NavLink>

            <SearchBar />
        
    </div>
  )
}

export default navBar