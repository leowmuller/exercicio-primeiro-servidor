const express = require(`express`);
const app = express();

app.get(`/home`, (requisicao, resposta) => {
    resposta.send(`Olá... este é meu primeiro servidor Express`);
});

app.get(`/`, (requisicao, resposta) => {
    resposta.send(`Olá... esta é a minha rota principal`);
});

app.listen(3000);