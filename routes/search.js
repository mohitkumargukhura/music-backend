const router =
require("express").Router();

const spotifyGet =
require("../services/spotifyApi");

router.get(
"/",

async(req,res)=>{

try{

const q =
encodeURIComponent(
req.query.q || ""
);

if(!q){

return res
.status(400)
.json({
error:
"missing query"
});

}

const data =
await spotifyGet(

`search?q=${q}&type=track,artist,album&limit=10`

);

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

module.exports = router;