// // Importa el módulo http
// const http = require('http');

// const { getCharById } = require('./controllers/getCharById');

// // Crea y levanta un servidor en el puerto 3001
// const server = http.createServer((req, res) => {  
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Habilita el CORS para permitir todas las solicitudes desde cualquier origen  
//   if (req.url.startsWith('/rickandmorty/character/')) { // Verifica si la URL incluye "/rickandmorty/character"

//     const id = req.url.split('/').pop(); // Obtiene el ID del personaje de la URL
    
//     getCharById(res,id)
//   } else {        
//     res.end('Ruta no encontrada');// Si la URL no coincide con "/rickandmorty/character", envía una respuesta de error 
//   }
// });

// // Escucha en el puerto 3001
// const port = 3001;
// server.listen(port, () => {
//   console.log(`Servidor en funcionamiento en el puerto ${port}`);
// });

const http = require('http');
const { getCharById } = require('./controllers/getCharById');
const PORT = 3001;

http
  .createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.end('hola soy el server')
    if(req.url.includes('/rickandmorty/character')){ // /rickandmorty/character/5
      const id = req.url.split('/').at(-1) //at(-1) es la ultima posicion del array
      //console.log(id); 5
      getCharById(res,Number(id))      
    }
})
  .listen(PORT,()=>{
    console.log('in port http://localhost:3001');
  });