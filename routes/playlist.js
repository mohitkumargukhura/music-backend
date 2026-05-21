const router=require("express").Router();

const spotifyGet=
require("../services/spotifyApi");

router.get(
"/:id",

async(req,res)=>{

const data=
await spotifyGet(
`playlists/${req.params.id}`
);

res.json(data);

}

);

module.exports=router;