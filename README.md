# TodoList

Um gerenciador de tarefas simples, com **backend em Node.js + PostgreSQL** e **frontend em Vue 3**.

---

## Tecnologias utilizadas
- [Node.js 22.18.0](https://nodejs.org/pt/)  
- [npm](https://www.npmjs.com/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [VueJS 3.5.18](https://vuejs.org/)

---

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- Node.js (22.18.0)
- npm
- PostgreSQL

---

## Configuração do Banco de Dados
No diretório `nodejs`, crie o arquivo `.env`:

```env
DB_USER=username
DB_PASS=password
DB_NAME=todo_app
DB_HOST=localhost
```

## Execução do backend

#### Passo 1: Executando o Backend
1. Acesse a pasta do backend:
```bash
cd nodejs
```
2. Instale as dependências:
```bash
npm install
```
3. Crie o banco de dados:
```
npx sequelize-cli db:create 
```
4. Execute as migrations:
  ```
  npx sequelize-cli db:migrate
  ```

5. Execute o backend:
```bash
npm start
```

## Execução do frontend
1. Acesse a pasta do frontend:
```bash
cd todolist-vue
```
2. Instale as dependências:
```bash
npm install
```
3. Execute o frontend:
```bash
npm run dev
```


