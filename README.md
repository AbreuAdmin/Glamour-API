# Glamour-API

API para e-commerce simples. Desenvolvida em Node.JS

## Estrutura de Pastas e Arquivos

```bash

ecommerce-api/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   ├── db.config.js
│   │   └── env.config.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── user.controller.js
│   │   └── order.controller.js
│   ├── models/
│   │   ├── product.model.js
│   │   ├── user.model.js
│   │   └── order.model.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── index.js
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   │   └── orderRoutes.js
│   ├── services/
│   │   ├── product.service.js
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   └── order.service.js
│   └── middleware/
│       ├── error.middleware.js
│       └── auth.middleware.js
├── .env
├── .gitignore
├── .nvmrc
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md

```

## Estrutura das Rotas da API

Home / Catálogo de Produtos:

* GET /products – Listar produtos.

* GET /products/:id – Detalhes do produto.

* POST /products – Criar novo produto.

* PUT /products/:id – Atualizar produto.

* DELETE /products/:id – Excluir produto.

Login / Registro:

* POST /auth/login – Login.

* POST /auth/register – Registro de usuário.

* POST /auth/logout – Sair.

Pedidos:

* POST /orders – Fazer pedido

* GET /orders – Listar pedidos.

* DELETE /orders/:id – Excluir pedido.

Admins:

* GET /users – Listar administradores.

* GET /users:id – Ver um administrador especifico.

* PUT /users:id – Atualizar administrador

* DELETE /users/:id – Deletar administrador

---
