import axios from "axios"
// import { getFormatPokemons, getFormatPkmn, getPokemonsApi, getAllPokemons, } from "./src/controllers.js"
// simulate from my db and state redux, because i will use filters
const AllPokemons = [ {
  "id": 1,
  "name": "bulbasaur",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "hp": 45,
  "attack": 49,
  "defense": 49,
  "speed": 45,
  "height": 7,
  "weight": 69,
  "types": "grass, poison"
},
{
  "id": 2,
  "name": "ivysaur",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  "hp": 60,
  "attack": 62,
  "defense": 63,
  "speed": 60,
  "height": 10,
  "weight": 130,
  "types": "grass, poison"
},
{
  "id": 3,
  "name": "venusaur",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  "hp": 80,
  "attack": 82,
  "defense": 83,
  "speed": 80,
  "height": 20,
  "weight": 1000,
  "types": "grass, poison"
},
{
  "id": 4,
  "name": "charmander",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  "hp": 39,
  "attack": 52,
  "defense": 43,
  "speed": 65,
  "height": 6,
  "weight": 85,
  "types": "fire"
},
{
  "id": 5,
  "name": "charmeleon",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  "hp": 58,
  "attack": 64,
  "defense": 58,
  "speed": 80,
  "height": 11,
  "weight": 190,
  "types": "fire"
},
{
  "id": 6,
  "name": "charizard",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  "hp": 78,
  "attack": 84,
  "defense": 78,
  "speed": 100,
  "height": 17,
  "weight": 905,
  "types": "fire, flying"
},
{
  "id": 7,
  "name": "squirtle",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  "hp": 44,
  "attack": 48,
  "defense": 65,
  "speed": 43,
  "height": 5,
  "weight": 90,
  "types": "water"
},
{
  "id": 8,
  "name": "wartortle",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  "hp": 59,
  "attack": 63,
  "defense": 80,
  "speed": 58,
  "height": 10,
  "weight": 225,
  "types": "water"
},
{
  "id": 9,
  "name": "blastoise",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  "hp": 79,
  "attack": 83,
  "defense": 100,
  "speed": 78,
  "height": 16,
  "weight": 855,
  "types": "water"
},
{
  "id": 10,
  "name": "caterpie",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  "hp": 45,
  "attack": 30,
  "defense": 35,
  "speed": 45,
  "height": 3,
  "weight": 29,
  "types": "bug"
},
{
  "id": 11,
  "name": "metapod",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
  "hp": 50,
  "attack": 20,
  "defense": 55,
  "speed": 30,
  "height": 7,
  "weight": 99,
  "types": "bug"
},
{
  "id": 12,
  "name": "butterfree",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  "hp": 60,
  "attack": 45,
  "defense": 50,
  "speed": 70,
  "height": 11,
  "weight": 320,
  "types": "bug, flying"
},
{
  "id": 13,
  "name": "weedle",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
  "hp": 40,
  "attack": 35,
  "defense": 30,
  "speed": 50,
  "height": 3,
  "weight": 32,
  "types": "bug, poison"
},
{
  "id": 14,
  "name": "kakuna",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
  "hp": 45,
  "attack": 25,
  "defense": 50,
  "speed": 35,
  "height": 6,
  "weight": 100,
  "types": "bug, poison"
},
{
  "id": 15,
  "name": "beedrill",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
  "hp": 65,
  "attack": 90,
  "defense": 40,
  "speed": 75,
  "height": 10,
  "weight": 295,
  "types": "bug, poison"
},
{
  "id": 16,
  "name": "pidgey",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  "hp": 40,
  "attack": 45,
  "defense": 40,
  "speed": 56,
  "height": 3,
  "weight": 18,
  "types": "normal, flying"
},
{
  "id": 17,
  "name": "pidgeotto",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  "hp": 63,
  "attack": 60,
  "defense": 55,
  "speed": 71,
  "height": 11,
  "weight": 300,
  "types": "normal, flying"
},
{
  "id": 18,
  "name": "pidgeot",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
  "hp": 83,
  "attack": 80,
  "defense": 75,
  "speed": 101,
  "height": 15,
  "weight": 395,
  "types": "normal, flying"
},
{
  "id": 19,
  "name": "rattata",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  "hp": 30,
  "attack": 56,
  "defense": 35,
  "speed": 72,
  "height": 3,
  "weight": 35,
  "types": "normal"
},
{
  "id": 20,
  "name": "raticate",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
  "hp": 55,
  "attack": 81,
  "defense": 60,
  "speed": 97,
  "height": 7,
  "weight": 185,
  "types": "normal"
},
{
  "id": 21,
  "name": "spearow",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
  "hp": 40,
  "attack": 60,
  "defense": 30,
  "speed": 70,
  "height": 3,
  "weight": 20,
  "types": "normal, flying"
},
{
  "id": 22,
  "name": "fearow",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
  "hp": 65,
  "attack": 90,
  "defense": 65,
  "speed": 100,
  "height": 12,
  "weight": 380,
  "types": "normal, flying"
},
{
  "id": 23,
  "name": "ekans",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  "hp": 35,
  "attack": 60,
  "defense": 44,
  "speed": 55,
  "height": 20,
  "weight": 69,
  "types": "poison"
},
{
  "id": 24,
  "name": "arbok",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
  "hp": 60,
  "attack": 95,
  "defense": 69,
  "speed": 80,
  "height": 35,
  "weight": 650,
  "types": "poison"
},
{
  "id": 25,
  "name": "pikachu",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  "hp": 35,
  "attack": 55,
  "defense": 40,
  "speed": 90,
  "height": 4,
  "weight": 60,
  "types": "electric"
},
{
  "id": 26,
  "name": "raichu",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
  "hp": 60,
  "attack": 90,
  "defense": 55,
  "speed": 110,
  "height": 8,
  "weight": 300,
  "types": "electric"
},
{
  "id": 27,
  "name": "sandshrew",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
  "hp": 50,
  "attack": 75,
  "defense": 85,
  "speed": 40,
  "height": 6,
  "weight": 120,
  "types": "ground"
},
{
  "id": 28,
  "name": "sandslash",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
  "hp": 75,
  "attack": 100,
  "defense": 110,
  "speed": 65,
  "height": 10,
  "weight": 295,
  "types": "ground"
},
{
  "id": 29,
  "name": "nidoran-f",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
  "hp": 55,
  "attack": 47,
  "defense": 52,
  "speed": 41,
  "height": 4,
  "weight": 70,
  "types": "poison"
},
{
  "id": 30,
  "name": "nidorina",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
  "hp": 70,
  "attack": 62,
  "defense": 67,
  "speed": 56,
  "height": 8,
  "weight": 200,
  "types": "poison"
},
{
  "id": 31,
  "name": "nidoqueen",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
  "hp": 90,
  "attack": 92,
  "defense": 87,
  "speed": 76,
  "height": 13,
  "weight": 600,
  "types": "poison, ground"
},
{
  "id": 32,
  "name": "nidoran-m",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
  "hp": 46,
  "attack": 57,
  "defense": 40,
  "speed": 50,
  "height": 5,
  "weight": 90,
  "types": "poison"
},
{
  "id": 33,
  "name": "nidorino",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
  "hp": 61,
  "attack": 72,
  "defense": 57,
  "speed": 65,
  "height": 9,
  "weight": 195,
  "types": "poison"
},
{
  "id": 34,
  "name": "nidoking",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
  "hp": 81,
  "attack": 102,
  "defense": 77,
  "speed": 85,
  "height": 14,
  "weight": 620,
  "types": "poison, ground"
},
{
  "id": 35,
  "name": "clefairy",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  "hp": 70,
  "attack": 45,
  "defense": 48,
  "speed": 35,
  "height": 6,
  "weight": 75,
  "types": "fairy"
},
{
  "id": 36,
  "name": "clefable",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
  "hp": 95,
  "attack": 70,
  "defense": 73,
  "speed": 60,
  "height": 13,
  "weight": 400,
  "types": "fairy"
},
{
  "id": 37,
  "name": "vulpix",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
  "hp": 38,
  "attack": 41,
  "defense": 40,
  "speed": 65,
  "height": 6,
  "weight": 99,
  "types": "fire"
},
{
  "id": 38,
  "name": "ninetales",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
  "hp": 73,
  "attack": 76,
  "defense": 75,
  "speed": 100,
  "height": 11,
  "weight": 199,
  "types": "fire"
},
{
  "id": 39,
  "name": "jigglypuff",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  "hp": 115,
  "attack": 45,
  "defense": 20,
  "speed": 20,
  "height": 5,
  "weight": 55,
  "types": "normal, fairy"
},
{
  "id": 40,
  "name": "wigglytuff",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
  "hp": 140,
  "attack": 70,
  "defense": 45,
  "speed": 45,
  "height": 10,
  "weight": 120,
  "types": "normal, fairy"
}]

const desOrderPokemons = AllPokemons.sort((a, b) => a.name.localeCompare(b.name)) // simulate desorder db

// desOrderPokemons.sort((a, b) => {
//     return a.id - b.id
// }) // with this it, order my db :)

// const filtro = desOrderPokemons.filter( pk => pk.types.toLowerCase().includes(("poison".toLowerCase())))

// desOrderPokemons.sort((a, b) => {
//   return a.types - b.types
// })

// const filtro = desOrderPokemons.sort((a, b) => {
//   return a.name.localeCompare(b.name)
// })


  const attack = desOrderPokemons.sort((a, b) => a.attack - b.attack).reverse()


// console.log(attack)

const filterTypes = (type, name, attack) => {
  let allpokemons = [...desOrderPokemons]

  if(type !== 'all') {
      allpokemons = allpokemons.filter( pk => pk.types.includes(type))
  }
  switch (name) {
      case "asc":
          allpokemons = allpokemons.sort((a, b) => a.name.localeCompare(b.name))
          break
      case "des":
          allpokemons = allpokemons.sort((a, b) => a.name.localeCompare(b.name)).reverse()
          break
      default:
          allpokemons
          break
  }
  switch(attack){
    case "asc":
    allpokemons = allpokemons.sort((a, b) => a.attack - b.attack).reverse()
    break
    case "des":
    allpokemons = allpokemons.sort((a, b) => a.attack - b.attack)
    break
    default:
    allpokemons
    break
  } 

  console.log(allpokemons);
}

// filterTypes("normal","asc","des")




function getFormatPkmn(pkmn) {

  const formatPk = {
    id: pkmn.id,
    name: pkmn.name,
    image: pkmn.sprites.other["official-artwork"].front_default,
    hp: pkmn.stats[0].base_stat,
    attack: pkmn.stats[1].base_stat,
    defense: pkmn.stats[2].base_stat,
    speed: pkmn.stats[5].base_stat,
    height: pkmn.height,
    weight: pkmn.weight,
    types: pkmn.types.map(t => t.type.name).join(", ")
  }

  return formatPk
}

const name = "bulbasaur"

const getPokemonbyName =  async (name) => {
  const pkmnName =(await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)).data

  const formatPk = {
    id: pkmnName.id,
    name: pkmnName.name,
    image: pkmnName.sprites.other["official-artwork"].front_default,
    hp: pkmnName.stats[0].base_stat,
    attack: pkmnName.stats[1].base_stat,
    defense: pkmnName.stats[2].base_stat,  
    speed: pkmnName.stats[5].base_stat,
    height: pkmnName.height,
    weight: pkmnName.weight,
    types: pkmnName.types.map( t => t.type.name).join(", ")
}
return formatPk
}

// getPokemonbyName(name)

const numero = 25

const getPokemonById = async id => {
  const pkmnId = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data

  const formatPk = {
    id: pkmnId.id,
    name: pkmnId.forms[0].name,
    image: pkmnId.sprites.other["official-artwork"].front_default,
    hp: pkmnId.stats[0].base_stat,
    attack: pkmnId.stats[1].base_stat,
    defense: pkmnId.stats[2].base_stat,  
    speed: pkmnId.stats[5].base_stat,
    height: pkmnId.height,
    weight: pkmnId.weight,
    types: pkmnId.types.map( t => t.type.name).join(", ")
}

  console.log(formatPk);
  return pkmnId
}

// getPokemonById(numero)


const getPokemonsApi = async () => {
  const fisrtCall = (await axios.get("https://pokeapi.co/api/v2/pokemon")).data
  const secondCall = (await axios(fisrtCall.next)).data.results
  const pokemons = [...fisrtCall.results, ...secondCall]

  const mapPokemons = await Promise.all(pokemons.map( async pokemon => {
      const pkmnInfo = (await axios(pokemon.url)).data

      return {
          id: pkmnInfo.id,
          name: pkmnInfo.name,
          image: pkmnInfo.sprites.other["official-artwork"].front_default,
          hp: pkmnInfo.stats[0].base_stat,
          attack: pkmnInfo.stats[1].base_stat,
          defense: pkmnInfo.stats[2].base_stat,
          speed: pkmnInfo.stats[5].base_stat,
          height: pkmnInfo.height,
          weight: pkmnInfo.weight,
          types: pkmnInfo.types.map( t => t.type.name).join(", ")
      }
  }))
  
  console.log(mapPokemons);
}

const string = "Martin"

const url = "https://raw.githubusercontent.com"

const regExp = /^[A-Za-z]+$/ // only caracters not numer not space

const regExpUrl = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i

const regExpUrl2 = /https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/

console.log(regExp.test(string))

console.log(regExpUrl.test(url))
console.log(regExpUrl2.test(url))


!regExp.test(string)
? console.log("deben ser sin espacios y ser solo letras") 
: console.log(string) 

const between = (x, min, max) => {
  return x >= min && x <= max
}

// console.log(between(1,0,255))
const find_max = (nums) => {
let max_num = Number.NEGATIVE_INFINITY
for (let num of nums) {
  if(num > max_num){
    max_num = num
  }
  console.log(max_num);
}
}

find_max([1,6,9,1,7,5,1,31,2,5])

let max_num = Number.NEGATIVE_INFINITY

console.log(max_num);
