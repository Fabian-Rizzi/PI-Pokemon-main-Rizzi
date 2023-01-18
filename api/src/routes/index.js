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


for (let id = 1; id <= 10; id++) {
    apiPokemons.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
// console.log(apiPokemons);

// Get all pokemons
router.get("/pokemons", async (req, res) => {
    pokemons = [];
// from api
    await Promise.all(apiPokemons.map((p) => axios.get(p)))
        .then((response) => {
            console.log(response.length);
            for (let i = 0; i < response.length; i++) {
                let data = response[i].data;
                pokemons.push({
                  id: data.id,
                  name: data.name,
                  hp: data.stats[0].base_stat,
                  atk: data.stats[1].base_stat,
                  def: data.stats[2].base_stat,
                  spd: data.stats[5].base_stat,
                  height: data.height,
                  weight: data.weight,
                  type1: data.types[0].type.name,
                  type2: data.types[1] ? data.types[1].type.name : null,
                });
            }
        }
        )
    .catch((err) => {
        console.log(err);
        res.status(400).send("Error");
    });
    //from database
    try {
        const dbPokemons = await Pokemon.findAll({
                // include: Type,
        });
        pokemons = pokemons.concat(dbPokemons);
    }
    catch (err) {
        console.log(err);
    }
    try {
    const { name } = req.query;
console.log(name)
    if (name) {
      const pokemonByName = pokemons.find((pokemon) => {
        return pokemon.name.toLowerCase() === name.toLowerCase();
      });

      return res.status(200).json(pokemonByName);
    }
  } catch {
    console.log("Name not valid");
  }
    if (pokemons.length) {
        res.status(200).send(pokemons);
    }
});

router.post("/pokemons", async (req, res) => {
    //stores information from the request body
    const { name, hp, atk, def, spd, height, weight, type1, type2 } = req.body;
    //checks if name is empty
    if (!name) {
        res.status(400).send("Name is required");
    }
    const newPokemon = {
        name,
        hp,
        atk,
        def,
        spd,
        height,
        weight,
        type1,
        type2,
    };
    try {
        const pokemon = await Pokemon.create(newPokemon);
        const addType1 = await Type.findOne({
        where: {
            type: type1,
        },
    });
        await pokemon.addTypes(addType1, { through: "PokemonType" });
            if (type2) {
        const addType2 = await Type.findOne({
            where: {
                type: type2,
            },
        });
        await pokemon.addTypes(addType2, { through: "PokemonType" });
    }
    res.status(201).send(pokemon);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/pokemons/:id", async (req, res) => {
    pokemons = [];
    console.log('aca')
// from api
    await Promise.all(apiPokemons.map((p) => axios.get(p)))
        .then((response) => {
            // console.log(response.length);
            for (let i = 0; i < response.length; i++) {
                let data = response[i].data;
                pokemons.push({
                  id: data.id,
                  name: data.name,
                  hp: data.stats[0].base_stat,
                  atk: data.stats[1].base_stat,
                  def: data.stats[2].base_stat,
                  spd: data.stats[5].base_stat,
                  height: data.height,
                  weight: data.weight,
                  type1: data.types[0].type.name,
                  type2: data.types[1] ? data.types[1].type.name : null,
                });
            }
        }
        )
    .catch((err) => {
        console.log(err);
        res.status(400).send(err.message);
    });
    //from database
    try {
        const dbPokemons = await Pokemon.findAll({
                // include: Type,
        });
        pokemons = pokemons.concat(dbPokemons);
    }
    catch (err) {
        console.log(err);
    }
  try {
    const { id } = req.params;
console.log(id)
    if (id) {
      const pokemonByID = pokemons.find((pokemon) => {
        return pokemon.id == id;
      });

      return res.status(200).json(pokemonByID);
    }
  } catch {
    console.log("a valid ID is needed");
  }

  //returns all pokemons
  if (pokemons.length > 0) res.status(200).json(pokemons);
});

router.get("/pokemons", async (req, res) => {
    pokemons = [];
    console.log('aca 2')
// from api
    await Promise.all(apiPokemons.map((p) => axios.get(p)))
        .then((response) => {
            // console.log(response.length);
            for (let i = 0; i < response.length; i++) {
                let data = response[i].data;
                pokemons.push({
                  id: data.id,
                  name: data.name,
                  hp: data.stats[0].base_stat,
                  atk: data.stats[1].base_stat,
                  def: data.stats[2].base_stat,
                  spd: data.stats[5].base_stat,
                  height: data.height,
                  weight: data.weight,
                  type1: data.types[0].type.name,
                  type2: data.types[1] ? data.types[1].type.name : null,
                });
            }
        }
        )
    .catch((err) => {
        console.log(err);
        res.status(400).send(err.message);
    });
    //from database
    try {
        const dbPokemons = await Pokemon.findAll({
                // include: Type,
        });
        pokemons = pokemons.concat(dbPokemons);
    }
    catch (err) {
        console.log(err);
    }
  try {
    const { name } = req.query;
console.log(name)
    if (name) {
      const pokemonByName = pokemons.find((pokemon) => {
        return pokemon.name.toLowerCase() === name.toLowerCase();
      });

      return res.status(200).json(pokemonByName);
    }
  } catch {
    console.log("Name not valid");
  }

  //returns all pokemons
  if (pokemons.length > 0) res.status(200).json(pokemons);
});

const storeTypes = async () => {
    const promiseTypes = [];
    await axios.get("https://pokeapi.co/api/v2/type").then((response) => {
        const { results } = response.data;
        promiseTypes.push(results.map((type) => type.name));
    })
    for (let i = 0; i < promiseTypes[0].length; i++) {
        await Type.findOrCreate({
            where: {
                type: promiseTypes[0][i],
            },
        });
    }
    return promiseTypes[0];
};

router.get("/types", async (req, res) => {
    
    // return promiseTypes[0];
    // res.status(200).json(promiseTypes);
    
    const types = await storeTypes();
    res.status(200).json(types);
});


module.exports = router;



