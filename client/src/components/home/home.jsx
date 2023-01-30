import React, { useEffect, useState } from "react";
import "./home.css"
import { useSelector } from "react-redux";
import notFound from "../../images/notfound.png"
import CardPokemon from "../cardPokemon/cardPokemon";
import NavBar from "../navBar/navBar";
import Header from "../header/header";
import Message from "../message/message";


const POKEMON_PER_PAGE = 12
const INITIAL_PAGE = 0


const Home = () => {

    const pokemons = useSelector(state => state.pokemons)

    const [ pkmns, setPkmns ] = useState([])
    const [ items, setItems ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)
    // const [ message, setMessage ] = useState("")
    

    useEffect(() => {
            setPkmns([...pokemons])
    },[pokemons])

    useEffect(() => {
            setItems([...pkmns].splice(INITIAL_PAGE,POKEMON_PER_PAGE))
    },[pkmns])



    const nextHandler = () => {
        const totalPkmns = pkmns.length

        const nextPage = currentPage + 1

        const firstIndex = nextPage * POKEMON_PER_PAGE

        if(firstIndex >= totalPkmns) return
        setItems([...pkmns].splice(firstIndex,POKEMON_PER_PAGE))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1

        const firstIndex = prevPage * POKEMON_PER_PAGE

        if(prevPage < 0) return
        setItems([...pkmns].splice(firstIndex,POKEMON_PER_PAGE))
        setCurrentPage(prevPage)
    }

    const changePageHandler = e => {
        const { value } = e.target

        const Page = parseInt(value)

        const Index = Page * POKEMON_PER_PAGE

        setItems([...pkmns].splice(Index,POKEMON_PER_PAGE))
        setCurrentPage(Page)
    }



    return(
        <div className="pokebody">
            <Header />
            <NavBar setPkmns={setPkmns} state={pkmns} setCurrentPage={setCurrentPage}/>
            <div className="bottom-pokeball">
            <div className="pagination" >
                <div className="pageButtons">
                    <button onClick={prevHandler} >Prev</button>
                    <button  onClick={changePageHandler} value={0} >1</button>
                    {pkmns.length > 12 && <button onClick={changePageHandler} value={1} >2</button>}
                    {pkmns.length > 24 && <button onClick={changePageHandler} value={2} >3</button>}
                    {pkmns.length > 36 && <button onClick={changePageHandler} value={3} >4</button>}
                    {pkmns.length > 48 && <button onClick={changePageHandler} value={4} >5</button>}
                    {pkmns.length > 60 && <button onClick={changePageHandler} value={5} >6</button>}
                    {pkmns.length > 72 && <button onClick={changePageHandler} value={6} >7</button>}
                    <button onClick={nextHandler} >Next</button>
                </div>
                <div className="page">
                    <h2>Page: {currentPage + 1}</h2>
                </div>
                <div className="found">
                    <h2>{pkmns.length} Pokemons found</h2>
                </div>
            </div>
                {/* <h1>Pokemons</h1> */}
            </div>
            
            <div className="card">

            {items.length === 0 ?
            <div className="notFound">
            </div>
            : items ?
            items.map( pkmn => (
                <CardPokemon
                id={pkmn.id}
                key={pkmn.id}
                image={pkmn.image}
                name={pkmn.name}
                types={pkmn.types}
                setPkmns={setPkmns}
                state={pkmns}
                />))
                : <CardPokemon
                id={items.id}
                key={items.id}
                image={items.image}
                name={items.name}
                types={items.types}
                setPkmns={setPkmns}
                state={pkmns}
                />
            }

            </div>
            <div className="pageButtons">
            <button onClick={prevHandler} >Prev</button>
            <button onClick={changePageHandler} value={0} >1</button>
            {pkmns.length > 11 && <button onClick={changePageHandler} value={1} >2</button>}
            {pkmns.length > 23 && <button onClick={changePageHandler} value={2} >3</button>}
            {pkmns.length > 35 && <button onClick={changePageHandler} value={3} >4</button>}
            {pkmns.length > 48 && <button onClick={changePageHandler} value={4} >5</button>}
            {pkmns.length > 60 && <button onClick={changePageHandler} value={5} >6</button>}
            {pkmns.length > 72 && <button onClick={changePageHandler} value={6} >7</button>}
            <button onClick={nextHandler} >Next</button>
            </div>
        </div>
    )
}

export default Home