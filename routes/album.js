const router =
require("express").Router();

const spotifyGet =
require(
"../services/spotifyApi"
);

router.get(
"/:id",

async(req,res)=>{

try{

const album =
await spotifyGet(
`albums/${req.params.id}`
);

res.json(
album
);

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
error:
error.message
}
);

}

}

);

router.get(
"/:id/tracks",

async(req,res)=>{

try{

const tracks =
await spotifyGet(

`albums/${req.params.id}/tracks?market=IN&limit=20`

);

res.json(
tracks
);

}

catch(error){

res.status(500)
.json(
error.response?.data
||
{
error:
error.message
}
);

}

}

);

module.exports=
router;