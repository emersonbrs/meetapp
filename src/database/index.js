// Esse arquivo realiza a conexão com banco de dados e carrega os models
import Sequelize from 'sequelize'; // Responsável por fazer a conexão com o banco de dados

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
  }

  init() {
    // Método que faz a conexão com a base de dados e carrega os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
