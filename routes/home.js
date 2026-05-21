const express = require("express");

const router = express.Router();

const spotifyGet = require(
"../services/spotifyApi"
);

router.get(
"/",
async (req,res)=>{

try{

const data =
await spotifyGet(

"search?q=arijit&type=track&limit=10"

);

res.json(
data
);

}

catch(error){

console.log(
error
);

res.status(500).json({

error:
error.message

});

}

}
);

module.exports =
router;