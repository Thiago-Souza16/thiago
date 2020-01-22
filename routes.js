const { Router } = require("express"); // importar const app do index
const axios = require("axios");

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ menssage: "hello omnistack" }); //metodo de resposta ao front
});

routes.post("/Devs", async (request, response) => {
  // const app passa a ser routes
  const { github_username } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  let name = apiResponse.data.login,
    avatar = apiResponse.data.avatar_url,
    bio = apiResponse.data.bio;

  //metodo de resposta ao front
  return response.json({
    name,
    avatar,
    bio,
    github_username
  });
});

module.exports = routes;
