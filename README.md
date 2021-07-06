# Comandos Disponíveis

## Sequelize

### Importa todos as migrations
npx sequelize-cli db:migrate

### Reverte a ultima migration
npx sequelize-cli db:migrate:undo

### Reverte todas as migrations
npx sequelize-cli db:migrate:undo:all

### Cria uma nova migration
npx sequelize-cli migration:generate --name nome_da_migration


## Iniciar Projeto

### Inicia Electron e React simultaneamente
npx run start

### Inicia React
npx run react-start

### Inicia Electron
npx run electron