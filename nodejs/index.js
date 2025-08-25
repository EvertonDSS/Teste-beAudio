const app = require("./app");
const { sequelize } = require('./models'); 
    
const PORT = 3000;

sequelize.authenticate() 
  .then(() => {
    console.log('Conectado ao PostgreSQL com sucesso!');
    return sequelize.sync(); 
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao conectar no banco:', err));

