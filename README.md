# CRUD de Usuário com Express e MongoDB

Este é um exemplo de aplicação CRUD (Create, Read, Update, Delete) de usuário usando o framework Express e o banco de dados MongoDB.

## Requisitos

-   Node.js (versão >= 10)
-   MongoDB (versão >= 4)

## Instalação

1.  Clone este repositório para o seu computador:

`git clone https://github.com/LeoTolotti/CRUD_User` 

2.  Instale as dependências do projeto:

`cd CRUD_User yarn install` 

3.  Inicie o servidor de desenvolvimento:

`yarn dev` 

4.  Acesse a aplicação em seu navegador em [http://localhost:3000](http://localhost:3000/).

## Funcionalidades

-   Cadastrar um novo usuário
-   Listar todos os usuários cadastrados
-   Visualizar os detalhes de um usuário específico
-   Editar as informações de um usuário
-   Excluir um usuário

## Endpoints

GET

/users

Retorna uma lista de todos os usuários

POST

/users

Cadastra um novo usuário

GET

/users/:id

Retorna os detalhes de um usuário específico

PUT

/users/:id

Atualiza as informações de um usuário

DELETE

/users/:id

Exclui um usuário

## Tecnologias Utilizadas

-   Node.js
-   Express
-   MongoDB
-   Mongoose

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Abra uma issue ou envie um pull request com sugestões de melhorias ou correções de bugs.
