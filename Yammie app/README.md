# Order Manager REST API

REST API for Yammie restaurant order management in Node.js and React.js.

## installation required for server
```{javascript}
npm install node @16.17.0

npm install express @4.18.1

npm install mocha @10.0.0

npm install supertest @6.2.4

```
(As of v10.0.0, Mocha requires Node.js v14.0.0 or newer)

## installation required for client
```{javascript}
npm install react @18.0.0

npm install react-dom @18.2.0

npm install react-scripts @5.0.1

npm install web-vitals @0.2.4

```

## Run the server on port 3000
```{javascript}
node server.js
```

## Run the client on port 3001
```{javascript}
npm start
```

## Run the tests (just for server-side)
```{javascript}
npm test
```
## API

#### /order
* `GET` : Get all orders

* `POST` : Create a new order

example of json order object to send in body of request (all fields required):

```{json}
{
    "customer_name": "Nadav kaduri",
    "phone-number": "0525673576", 
    "email": "nadav@gmail.com", 
    "address": "tchernichovsky 6/5, beer sheva", 
    "items": ["fries","burger","steak","lemonade"] 
}
```

#### /orders/:id
* `GET` : Get an order with specific id

* `PUT` : Update an order with specific id

example of json order object to send in body of request (all fields required):

```{json}
{
    "customer_name": "Nadav kaduri",
    "phone-number": "0525673576", 
    "email": "nadav@gmail.com", 
    "address": "tchernichovsky 6/5, beer sheva", 
    "items": ["fries","burger","steak","orange-juice"] 
}
```

* `DELETE` : Delete an order with specific id

#### /order/filter/lastday
* `GET` : Get all orders from the last day

