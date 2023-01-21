const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysql-1.us-ord.game.heavynode.net',
    port: 3306,
    database:'s10272_earthcraft-demo',
    user:'u10272_OnD7dfxhFA',
    password:'coHlqNV!!k1U+@VkNXO2CF^W',
    multipleStatements: true
})


connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

// const result =   connection.query("SELECT FULL_NAME FROM NationsInfo", (err, result) => {
//    console.log(result)
 //   console.log(err)
//  })

module.exports = connection;