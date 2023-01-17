
## API Projeto Integrador

## Authors
- [@Rodrigojuniorj] (https://www.github.com/Rodrigojuniorj)

#### Get all items

```http
  GET http://rodrigodev.ninja:3000/cliente/${USR_ID}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/cliente/` | `Integer` | **Required**. Retorna todos os clientes cadastrados OBS: passar -1 para recuperar todos os registros, ou o id do cliente |

```http
  Post /cadastro
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `USR_EMAIL`      | `string` | **Required**. Email a ser cadastrado |
| `USR_SENHA`|`string`|**Required**. Senha a ser cadastrada|
|`USR_TIPO`|`Integer`|**Required**. Tipo a ser cadastrado, OBS: 1 para Administrador, 2 para funcionário|
|`USR_NOME`|`string`|**Required**. Nome a ser cadastrada|

OBS: Created_at e Updated_at são gerados automaticamente

```http
  Post /update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `USR_EMAIL`      | `string` | **Required**. Email a ser cadastrado |
| `USR_SENHA`|`string`|**Required**. Senha a ser cadastrada|
|`USR_TIPO`|`Integer`|**Required**. Tipo a ser cadastrado, OBS: 1 para Administrador, 2 para funcionário|
|`USR_NOME`|`string`|**Required**. Nome a ser cadastrada|

```http
  GET /delete/${URS_ID}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/cliente/` | `Integer` | **Required**. Apaga o cliente selecionado|

