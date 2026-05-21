const express =
require("express");

const router =
express.Router();

const spotifyGet =
require(
"../services/spotifyApi"
);

router.get(
"/",

async(req,res)=>{

try{

const q =
req.query.q;

const data =
await spotifyGet(

`search?q=${q}&type=track,artist&limit=10`

);

res.json(
data
);

}

catch(error){

res.status(500)
.json({

error:
error.message

});

}

}

);

module.exports =
router;