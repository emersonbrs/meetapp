// Aqui estão as credenciais/configurações para acessar a base de dados.
// Ele será acessado tanto pela aplicação quanto pelo sequelize-cli.
// Nele é preciso utilizar a sintaxe antes do Import e Export, pois o sequelize-cli nao consegue os ler.
module.exports = {
  dialect: 'postgres', // O postgres necessita das dependências pg e pg-hstore (yarn add pg pg-hstore)
  host: 'localhost',
  username: 'postgres',
  password: 'meetappdocker',
  database: 'meetapp-db',
  define: {
    timestamps: true, // Garante que tenha uma coluna created_at e updated_at dentro de cada tabela do meu banco de dados; essas colunas vão armazenar a data de criação e edição de cada registro respectivamente.
    underscored: true, // Garante que eu quero utilizar a padronização de nomeclatura de tabelas e colunas através do padrão underscored (ex.: user_groups ao invés de UserGroup).
    underscoredAll: true,
  },
};
