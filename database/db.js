const mysql = require('mysql');
const connection = mysql.createConnection({
    //Con variables de entorno
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'usuario'
});

connection.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = connection;