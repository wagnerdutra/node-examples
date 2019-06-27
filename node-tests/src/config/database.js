require("dotenv"); // Utilizado para ao executar a cli do sequelize ele saibar usar
// as variaveis de acordo

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite", // Local onde deve ser salvo o banco, no caso, arquivo para sqlite
  operatorsAliases: false, // Para de dar warning no inicio da aplicação
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
};
