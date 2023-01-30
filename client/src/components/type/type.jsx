import React from "react"; 
import "./type.css" 


const Type = ({id, type, setPkmn, state}) => {

    const onclick = () => {
        setPkmn({
            ...state,
            types: state.types.filter(type => type.id !== id)
        })
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className={type}>
            <h2>{capitalizeFirstLetter(type)}</h2>
            {id && <button onClick={onclick} className="delete">X</button>}
        </div>
    )
}


export default Type