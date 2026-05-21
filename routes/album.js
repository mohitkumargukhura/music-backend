const router =
require("express").Router();

const spotifyGet =
require("../services/spotifyApi");

router.get(
"/:id",

async(req,res)=>{

try{

const album=
await spotifyGet(
`albums/${req.params.id}`
);

res.json(album);

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

module.exports=router;