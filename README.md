# API de Games
## Endpoints
## GET /games
Retorna a lista de games da base de dados

#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Tudo ocorreu certo , e você ira receber a lista de games
Exemplo de resposta:
``` json
[
    {
        "id": 2,
        "title": "call of duty",
        "year": 2012,
        "price": 43,
        "createdAt": "2023-12-17T22:59:48.000Z",
        "updatedAt": "2023-12-18T23:45:36.000Z"

    },
    {
        "id": 7,
        "title": "Foxhole",
        "year": 2022,
        "price": 57.99,
        "createdAt": "2023-12-20T23:00:37.000Z",
        "updatedAt": "2023-12-20T23:00:37.000Z"
    },
    {
        "id": 8,
        "title": "Arma III",
        "year": 2013,
        "price": 99.99,
        "createdAt": "2023-12-20T23:01:27.000Z",
        "updatedAt": "2023-12-20T23:01:27.000Z"
    }
]

```
