# Glamour-API

ea

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
│   │   ├── product.controller.js*
│   │   ├── user.controller.js
│   │   └── order.controller.js*
│   ├── models/
│   │   ├── product.model.js*
│   │   ├── user.model.js
│   │   └── order.model.js*
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── index.js
│   │   ├── productRoutes.js*
│   │   ├── userRoutes.js
│   │   └── orderRoutes.js*
│   ├── services/
│   │   ├── product.service.js*
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   └── order.service.js*
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

---
