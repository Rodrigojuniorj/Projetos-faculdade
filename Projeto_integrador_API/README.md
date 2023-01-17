
## API Projeto Integrador

#### Get all items

```http
  GET http://rodrigodev.ninja:3000/cliente/${USR_ID}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/cliente/` | `string` | **Required**. Retorna todos os clientes cadastrados OBS: passar -1 para recuperar todos os registros, ou o id do cliente |

```http
  Post /cadastro
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `USR_EMAIL`      | `string` | **Required**. Email a ser cadastrado |
| `USR_SENHA`|`string`|**Required**. Senha a ser cadastrada



