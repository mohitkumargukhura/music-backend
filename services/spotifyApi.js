const axios=require("axios");

const getToken=
require("./spotifyToken");

async function spotifyGet(
endpoint
){

const token=
await getToken();

const response=
await axios.get(

`https://api.spotify.com/v1/${endpoint}`,

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

return response.data;

}

module.exports=
spotifyGet;