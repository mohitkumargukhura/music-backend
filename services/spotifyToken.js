require("dotenv").config();

const axios=
require("axios");

let token=null;
let expires=0;

async function getToken(){

const now=Date.now();

if(
token &&
now<expires
){
return token;
}

const response=
await axios.post(

"https://accounts.spotify.com/api/token",

new URLSearchParams({
grant_type:
"client_credentials"
}),

{

headers:{
"Content-Type":
"application/x-www-form-urlencoded"
},

auth:{
username:
process.env.SPOTIFY_CLIENT_ID,

password:
process.env.SPOTIFY_CLIENT_SECRET
}

}

);

token=
response.data.access_token;

expires=
now+
(
response.data.expires_in
*1000
)-60000;

return token;

}

module.exports=
getToken;