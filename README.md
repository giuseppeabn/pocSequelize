# POC Sequelize

Prueba de concepto de Sequelize con mysql en AWS<br />

## Instalar los paquetes necesarios

### `$ npm install`

## Deploy AWS

Para realizar un deploy completo del proyecto
\*El stage por defecto es dev

### `$ sls deploy`

## Sequelize

### Comandos para Sequelize-cli

### Migracion

para crear un modelo y su archivo de migracion

```sh
$ npx sequelize-cli model:generate --name user --attributes name:string,rup:string,phone:string
```

Para crer solamente un archivo de migracion

```sh
$ npx sequelize migration:create --name update-user
```

Crear un archivo de migración (esqueleto)

```sh
$ npx sequelize-cli migration:generate --name migration-skeleton
```

Para iniciar una migracion hacia la BD

```
$ npx sequelize-cli db:migrate
```

### Seeder

Crear un archivo semilla

```
$ npx sequelize-cli seed:generate --name demo-user
```

Ejecutar archivos de semilla

```
$ npx sequelize-cli db:seed:all
```

#### Documentación

| Package    | Doc                                                    |
| ---------- | ------------------------------------------------------ |
| Sequelize  | [https://sequelize.org/v5/]                            |
| dotenv     | [https://github.com/motdotla/dotenv#readme]            |
| Serverless | [https://serverless.com/framework/docs/providers/aws/] |
