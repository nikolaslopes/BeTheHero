const express = require('express');

const app = express();

// -> Antes de todas as requests, pegar o body da request(JSON) e converter em algo entendivel pela aplicação
app.use(express.json());

/**
 * Rota / Recurso -> (http:/users)
 */

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (hppt:/users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.get('/users', (request, response) => {

  return response.json({
    yourName: 'nick',
    userName: 'nicklps',
  });
});

app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));
