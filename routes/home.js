const router = require("express").Router();

const spotifyGet =
require("../services/spotifyApi");

router.get(
"/",

async(req,res)=>{

try{

const data =
await const express =
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

const tracks =
await spotifyGet(

"search?q=arijit&type=track&limit=10"

);

res.json(
tracks
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

res.json(data);

}

catch(error){

console.log(
error.response?.data
||
error.message
);

res.status(500)
.json(
error.response?.data
||
{
error:error.message
}
);

}

}

);

module.exports=router;
