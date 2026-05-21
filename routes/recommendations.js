const router=require("express").Router();

const spotifyGet=
require("../services/spotifyApi");

router.get(
"/",

async(req,res)=>{

const data=
await spotifyGet(
"search?q=india&type=track&limit=20"
);

res.json(data);

}

);

module.exports=router;