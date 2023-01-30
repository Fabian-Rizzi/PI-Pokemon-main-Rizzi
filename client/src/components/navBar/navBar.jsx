import React, { useEffect, useState } from "react";
import "./navBar.css"
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByName, getAllPokemons  } from "../../redux/actions";


const NavBar = ({ setPkmns, setCurrentPage }) => {

    const [ pkmnName, setPkmnName ] = useState({ name: "" })
    const [ filter, setFilter ] = useState({ 
        typeFilter: "all",
        nameFilter: "default",
        attackFilter: "default",
        dbContent: "not-db",
        filterpkmns: []
    })

    
    const pokemons = useSelector(state => state.pokemons)

    const dispatch = useDispatch()

    useEffect(() => {
        setFilter({ 
            ...filter,
            filterpkmns: [...pokemons] })
    },[pokemons])

    const handleChange = (e) => {
        setPkmnName({
            name: e.target.value
        })
    }

    const search = () => {
        dispatch(getPokemonsByName(pkmnName.name.toLowerCase()))
    }

    const filterTypes = (type, name, attack, db) => {
        let allPokemons = [...pokemons]
        if(type !== 'all') {
            allPokemons = allPokemons.filter( pk => pk.types.includes(type))
        }
        switch (name) {
            case "asc":
                allPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "des":
                allPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name)).reverse()
                break;
            default:
                break;
        }
        switch(attack){
            case "max":
            allPokemons = allPokemons.sort((a, b) => a.attack - b.attack).reverse()
            break
            case "min":
            allPokemons = allPokemons.sort((a, b) => a.attack - b.attack)
            break
            default:
            break
        }
        switch(db){
            case "dbContent":
            allPokemons = allPokemons.filter(pkmn => pkmn.hasOwnProperty("dbContent"))
            break
            case "non-db":
            allPokemons = allPokemons.filter(pkmn => !pkmn.hasOwnProperty("dbContent"))
            break
            default:
            break
        }
        return allPokemons
    }

    const handleFilterTypes = e => {
        const type = e.target.value
        setFilter({
            ...filter,
            typeFilter: type,
            filterpkmns: filterTypes(type, filter.nameFilter, filter.attackFilter, filter.dbContent)
        })
        
    }

    const handleFilterNames = e => {
        const name = e.target.value
        setFilter({
            ...filter,
            nameFilter: name,
            filterpkmns: filterTypes(filter.typeFilter, name, filter.attackFilter, filter.dbContent)
        })
        
    }

    const handleFilterAttack = e => {
        const attack = e.target.value
        setFilter({
            ...filter,
            attackFilter: attack,
            filterpkmns: filterTypes(filter.typeFilter, filter.nameFilter, attack, filter.dbContent)
        })
        
    }

    const handleFilterDb = e => {
        const db = e.target.value
        setFilter({
            ...filter,
            dbContent: db,
            filterpkmns: filterTypes(filter.typeFilter, filter.nameFilter, filter.attack,  db)
        })
        
    }
        
    const filterButton = () => {
        const finalfilter = [...filter.filterpkmns]
        setPkmns(finalfilter)
        setCurrentPage(0)
    }

    const refresh = (e) => {
        e.preventDefault()
        dispatch(getAllPokemons())
    }



    return(
        <div className="navbar">
            <div className="searchbar">
                <input type="search" name="name" placeholder="Search Pokemon..." value={pkmnName.name} onChange={handleChange} />
                <button onClick={search} >Search</button>
            </div>
            <button className="filterBtn" onClick={filterButton} >FILTER</button>
            <div className="refresh" >
                <div className="light" onClick={refresh}></div>
            </div>
            <div className="filter">
                <label>Type: </label>
                <select
                    name="fiter-types"
                    className="filterTypes"
                    onChange={handleFilterTypes}
                >
                    <option value="all">All Types</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="poison">Poison</option>
                    <option value="bug">Bug</option>
                    <option value="flying">Flying</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="fairy">Fairy</option>
                </select>
                <label>ABC: </label>
                <select
                    name= "filter-name"
                    className="filterNames"
                    onChange={handleFilterNames}
                >
                    <option value="default">Default</option>
                    <option value="asc">Asc.</option>
                    <option value="des">Des.</option>
                </select>
                <label>Attack: </label>
                <select
                    name= "filter-attack"
                    className="filterAttack"
                    onChange={handleFilterAttack}
                >
                    <option value="default">Default</option>
                    <option value="max">Max</option>
                    <option value="min">Min</option>
                </select>
                <label>From: </label>
                <select
                    name= "filter-db"
                    className="filterdb"
                    onChange={handleFilterDb}
                >
                    <option value="default">Default</option>
                    <option value="non-db">Outside DB</option>
                    <option value="dbContent">Inside DB</option>
                </select>
                
            </div>
        </div>
    )
}

export default NavBar