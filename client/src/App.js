import './App.css';
import { Route } from "react-router-dom";
import InitialPage from "./components/initialPage/initialPage.jsx";
import Home from './components/home/home';
import DetailPokemon from './components/detailPokemon/detailPokemon';
import CreatePokemons from './components/createPokemon/createPokemon';







function App() {

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/pokemons" component={Home} />
        <Route path="/pokemons/:id" component={DetailPokemon} />
        <Route path="/create" component={CreatePokemons} />
    </div>
  );
}

export default App;
