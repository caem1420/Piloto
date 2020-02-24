# Server Piloto Mineria de datos #

Este server se hizo como prueba piloto con un DataSet publico de la pagina [Kaggle](kaggle.com) que tiene registros de las adquisiciones de empresas asi como su fecha y valor el server fue realizado con las tecnologias [Express.js](https://expressjs.com/es/), [Python](https://www.python.org/) y [pandas](https://pandas.pydata.org/)

El DataSet puede ser encontrado [aqui](https://www.kaggle.com/shivamb/company-acquisitions-7-top-companies).

## Uso ##

El uso del server esta definido de la siguiente manera

```bash
    GET http://181.54.237.244:3000/?rq=(valor)
```
Donde valor puede ser:

* all -> Responde con todos los datos y columnas en el data set
* id -> Responde con los datos de la columna AcquisitionID
* mes -> Responde con los datos de la columna AcquisitionMonth
* mesfecha -> Responde con los datos de la columna AcquisitionMonthDate
* ano -> Responde con los datos de la columna AcquisitionYear
* compania -> Responde con los datos de la columna Company
* negocio -> Responde con los datos de la columna Business
* pais -> Responde con los datos de la columna Country
* valor -> Responde con los datos de la columna Value (USD)
* derivados -> Responde con los datos de la columna Derived products
* comprador -> Responde con los datos de la columna ParentCompany"

Adicional a estos el valor puede ser una busqueda por id, la sintaxis para la busqueda es:

```bash
    GET http://181.54.237.244:3000/?rq=search&query=(busqueda)
```

## Respuesta ##

El tipo de respuesta que da el server es de tipo [Json](https://www.json.org/json-en.html) y esta formateado de esta manera:


```json
  "columnas": [
    "AcquisitionID",
    "AcquisitionMonth",
    "AcquisitionMonthDate",
    "AcquisitionYear",
    "Company",
    "Business",
    "Country",
    "Value (USD)",
    "Derived products",
    "ParentCompany"
  ],
  "valores": [
    [
      "ACQ99",
      "November",
      11.0,
      2015,
      "bebop",
      "Cloud software",
      "USA",
      380000000.0,
      "Google Cloud Platform",
      "Google"
    ],
    [
      "ACQ98",
      "November",
      11.0,
      2015,
      "Fly Labs",
      "Video editing",
      "USA",
      "",
      "Google Photos",
      "Google"
    ]
  ]
```

## Autores ##

* *Carlos Andres Escobar*
* *Michael Hamir Arias*