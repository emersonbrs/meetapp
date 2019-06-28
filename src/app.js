// Aqui vamos configurar o nosso servidor express e criar a estrutura da aplicação
import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Para receber requisições no formato JSON
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
