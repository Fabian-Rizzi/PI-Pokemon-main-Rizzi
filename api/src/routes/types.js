const express = require("express")
const { Types } = require("../db")
const router = express.Router()

// const storeTypes = async () => {
//         const promiseTypes = [];
//         await axios.get("https://pokeapi.co/api/v2/type").then((response) => {
//             const { results } = response.data;
//             promiseTypes.push(results.map((typename) => typename.name));
//         })
//         for (let i = 0; i < promiseTypes[0].length; i++) {
//             await Type.findOrCreate({
//                 where: {
//                     typename: promiseTypes[0][i],
//                 },
//             });
//         }
//         return promiseTypes[0];
//     };

router.get("/", async (req,res) => {
        try {
                const allTypes = await Types.findAll()
                res.json(allTypes)      
        } catch (error) {
                console.log(error)
        }
})


module.exports = router