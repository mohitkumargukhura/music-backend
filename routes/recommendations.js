const router =
require("express").Router();

const spotifyGet =
require(
"../services/spotifyApi"
);

router.get(
"/",

async(req,res)=>{

try{

const genre =
req.query.genre
|| "pop";

const data =
await spotifyGet(

`search?q=${genre}&type=track&limit=10`

);

res.json(
data
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