const router =
require("express").Router();

const spotifyGet =
require("../services/spotifyApi");

router.get(
"/:id",

async(req,res)=>{

try{

const playlist =
await spotifyGet(
`playlists/${req.params.id}?market=IN`
);

res.json(
playlist
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
error:error.message
}
);

}

}

);

router.get(
"/:id/tracks",

async(req,res)=>{

try{

const playlist =
await spotifyGet(
`playlists/${req.params.id}`
);

const name =
encodeURIComponent(
playlist.name
);

const tracks =
await spotifyGet(

`search?q=${name}&type=track&limit=10`

);

res.json(
tracks
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
error:error.message
}
);

}

}

);

module.exports=
router;