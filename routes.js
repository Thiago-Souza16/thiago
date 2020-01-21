const{Router} = require('express') // importar const app do index
const axios = require('axios')

const routes = Router()

//app.get('/', (request, response ) => {
//    return response.json({menssage : "hello omnistack"}); //metodo de resposta ao front 
//});

routes.post('/Devs', async (request, response ) => { // const app passa a ser routes
    const {github_username} = request.body 

    const apiResponse = await axios.get(`https://api.github.com/user/${github_username}`)

    let{ name = login, avatar, bio}

    if(!name){
        name = api.data.login;
    }
   
    console.log(name, avatar, bio, github_username)
    return response.json({menssage : "hello omnistack"}); //metodo de resposta ao front 
}); 

module.exports = routes
