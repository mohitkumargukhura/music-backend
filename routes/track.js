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

const track =
await spotifyGet(
`tracks/${req.params.id}`
);

res.json(
track
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