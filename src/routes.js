// Aqui ficam todas as nossas rotas
import { Router } from 'express'; // Forma de separar a parte de roteamento do Express em um outro arquivo
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // Só vale para as rotas que vierem após ele

routes.put('/users', UserController.update);

export default routes;
