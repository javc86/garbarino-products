# Productos Garbarino App | Autor: Johander Vazquez
Solución al Examen de Frontend Blacklist de Garbarino con Reactjs, Redux, Webpack y Nodejs

## Instalación para Desarrollo
```
npm install
npm start
```

NOTA: se debe installar el modulo *nodemon* para correr la aplicación, ya que para desarrollar se utilizó este modulo. Se instala de la siguiente manera:

```
npm install -g nodemon
```

## Base de datos
La configuración de la base de datos se encuentra en el archivo *.env*. Este ya tiene una configuración que apunta hacia un servidor *aws* para que no se tenga que hacer el restor del backup que hay en el proyecto. Esto con el fin de facilitar la corrida de la app.

## Acceso a la App
[http://localhost:4800](http://localhost:4800)

## CURL REQUESTS para agregar o eliminar un producto de la blacklist

```
curl -X PATCH "http://localhost:4800/api/products/{id}" -H "Content-Type: application/json" -d '{"enabled": true}'
```

NOTA: Para la ruta *[GET] /products/{id}* se tuvo que cambiar a *[GET] /details/{id}* porque *react-router* tiene conflictos para diferenciar la ruta *[GET] /products* de *[GET] /products/{id}*.
