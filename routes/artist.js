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

const artist =
await spotifyGet(
`artists/${req.params.id}`
);

res.json(artist);

}

catch(error){

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
"/:id/albums",

async(req,res)=>{

try{

const albums =
await spotifyGet(

`artists/${req.params.id}/albums?include_groups=album,single&market=IN&limit=10`

);

res.json(albums);

}

catch(error){

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
"/:id/top",

async(req,res)=>{

try{

const artist =
await spotifyGet(
`artists/${req.params.id}`
);

const name =
encodeURIComponent(
artist.name
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
error:
error.message
}
);

}

}

);

module.exports=
router;