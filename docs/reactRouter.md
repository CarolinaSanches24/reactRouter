#### React Router 

### Functions 

- Redirect 
- Nested Router
- Not found Router 

### Install json

```shell
npm install json-server@0.17.0
```

#### Inicializar Projeto React com Vite
```shell
npm create vite@latest
```
rafce => criar componente


### Install  React Router Dom

```shell
 pnpm i react-router-dom
```

### Config script server

```json
  "scripts": {
    "server":"json-server --watch data/db.json"
  },
```

#### Nested routes -> urls mais complexas, como:
/products/:id/something;

#### No match route (404)
Definir o path como *