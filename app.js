// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota para produtos de automóveis
app.get('/produtos/automovel/:marca/:modelo/:ano', (req, res) => {
    const { marca, modelo, ano } = req.params;
    res.send(`Produto: Automóvel, Marca: ${marca}, Modelo: ${modelo}, Ano: ${ano}`);
});

// Rota para cadastrar usuário
app.post('/cadastrar/usuario', (req, res) => {
    // Lógica para cadastrar usuário
    res.send('Usuário cadastrado com sucesso!');
});

// Rota para contato
app.get('/contato', (req, res) => {
    // Lógica para contato
    res.send('Informações de contato');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});