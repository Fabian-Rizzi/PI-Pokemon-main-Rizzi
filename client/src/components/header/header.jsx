import React from "react";
import "./header.css";
import Logo from "../../images/pokemon-logo.png"
import { Link } from "react-router-dom";


const Header = () => {
    
    return(
        <div className="landing">
            <Link to="/pokemons" >
                <img src={Logo} alt="Logo Pokemon" />
            </Link>

            {/* <div className="mainTitle">
                <h1>Pokedex</h1>
            </div>
             */}
            <div className="buttonCreate">
                <Link to="/create" >
                    <button className="btnCreate">CREATE POKEMON</button>
                </Link> 
            </div>
        </div>
    )
}

export default Header