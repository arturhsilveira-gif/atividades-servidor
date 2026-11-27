const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à Escola Código Livre! Aprenda tecnologia do zero ao profissional.');
});

app.get('/cursos', (req, res) => {
  res.send(
    'Cursos oferecidos: Lógica de Programação, JavaScript, Node.js com Express, ' +
    'Banco de Dados e Desenvolvimento Web.'
  );
});

app.get('/professores', (req, res) => {
  res.send(
    'Professores: Ana Souza (JavaScript), Carlos Lima (Node.js), ' +
    'Marina Alves (Banco de Dados).'
  );
});

app.get('/contato', (req, res) => {
  res.send(
    'Contato: contato@codigolivre.com.br | Telefone: (48) 3333-0000 | ' +
    'Rua das Flores, 100 - Florianópolis/SC.'
  );
});

// Middleware final: executa somente se nenhuma rota acima respondeu
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
