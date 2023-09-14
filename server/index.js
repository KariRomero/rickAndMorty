// const http = require('http');
// const { getCharById } = require('./controllers/getCharById');

// const PORT = 3001;

// http
//   .createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.end('hola soy el server')
//     if(req.url.includes('/rickandmorty/character')){ // /rickandmorty/character/5
//       const id = req.url.split('/').at(-1) //at(-1) es la ultima posicion del array
//       //console.log(id); 5
//       getCharById(res,Number(id))      
//     }
// })
//   .listen(PORT,()=>{
//     console.log('in port http://localhost:3001');
//   });

const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT,()=>console.log(`listening on port:${PORT}`));