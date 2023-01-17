const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const { Pokemon, Type } = require("../db.js");
let pokemons = [];
let types = [];
let apiPokemons = [];


for (let id = 1; id <= 15; id++) {
    apiPokemons.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
}


// Get all pokemons

router.get("/pokemons", async (req, res) => {


    pokemons = [];

    await Promise.all(apiPokemons.map((p) => axios.get(p)))
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                let data = res[i].data;
                pokemons.push({
                  id: data.id,
                  name: data.name,
                  hp: data.stats[0].base_stat,
                  atk: data.stats[1].base_stat,
                  def: data.stats[2].base_stat,
                  spd: data.stats[5].base_stat,
                  height: data.height,
                  weight: data.weight,
                });
            }
})
});






module.exports = router;
