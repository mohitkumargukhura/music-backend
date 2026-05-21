const router =
require("express").Router();

router.get(
"/",

async(req,res)=>{

res.json({

categories:[

{
name:"Bollywood",
query:"bollywood"
},

{
name:"Pop",
query:"pop"
},

{
name:"Workout",
query:"workout"
},

{
name:"Romantic",
query:"romantic"
},

{
name:"Hip Hop",
query:"hip hop"
},

{
name:"LoFi",
query:"lofi"
},

{
name:"Party",
query:"party"
},

{
name:"Sad",
query:"sad"
}

]

});

}

);

module.exports=
router;