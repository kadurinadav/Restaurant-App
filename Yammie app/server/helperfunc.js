const fs = require('fs');
const dataPath = './db/ordersdb.json' 

/********** Util Functions ***********/ 

const getDate = ()=>  {
  let dateObj = new Date();
  let date = ("0" + dateObj.getDate()).slice(-2);
  let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year = dateObj.getFullYear();
  return date + "/" + month + '/' + year
}

const getTime = ()=> {
  let dateObj = new Date();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  return hours + ":" + minutes + ':' + seconds
}

const saveOrderData = (data) =>{  
  // convert json object to json string
  const stringifyData = JSON.stringify(data)
  // write order to db.json
  fs.writeFileSync(dataPath, stringifyData)
}

const getOrderData = ()=> {
  // read orders from db.json
  const jsonData = fs.readFileSync(dataPath)
  // convert json string to json object
  return JSON.parse(jsonData)
} 

// json object validate schema
const jsonSchema = 
{
  "type": "object",
  "properties": 
  {
    "name": {"type": "string", "pattern": "^[A-Za-z\\s]*$"},
    "phone number": {"type": "string", "pattern": "^[0-9]{10}$"},
    "email": {"type": "string", "format": "email"},
    "address": {"type": "string"},
    "main dish" : {"type": "string", "enum": ["Pizza", "Pasta", "Big salad"]},
    "side dish" : {"type": "string", "enum": ["Rice", "Green beans", "Small salad"]},
    "drink" : {"type": "string", "enum": ["Water", "Soda", "Coke"]}
  },
  "required": ["name","phone number","email","address","main dish", "side dish", "drink"]
}

module.exports = {getDate, getTime, getOrderData, saveOrderData, jsonSchema};