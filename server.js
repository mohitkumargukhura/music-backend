require("dotenv").config();

const express=
require("express");

const cors=
require("cors");

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",

(req,res)=>{

res.json({
status:"running"
});

});

app.use(
"/search",
require("./routes/search")
);

app.use(
"/artist",
require("./routes/artist")
);

app.use(
"/album",
require("./routes/album")
);

app.use(
"/track",
require("./routes/track")
);

app.use(
"/playlist",
require("./routes/playlist")
);

app.use(
"/recommendations",
require(
"./routes/recommendations"
)
);

app.use(
"/home",
require(
"./routes/home"
)
);
app.use(
"/album",
require("./routes/album")
);

app.use(
"/track",
require("./routes/track")
);

app.listen(
process.env.PORT,

()=>{

console.log(
"Server running"
);

}
);