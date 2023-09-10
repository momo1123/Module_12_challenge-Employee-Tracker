


// const express = require('express');
// // Import and require mysql2
// const mysql = require('mysql2');
// const UserInput = require('./user_input');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Connect to database
// class db_connection extends UserInput{
//  db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: 'Password1121',
//     database: 'employees_tracker',
//   },
  
//   console.log('Conncection made with mysql')
  
// );
// }
// const New_db_connection = new db_connection;
// // New_db_connection;
// // db.query('SOURCE db/schema.sql', function(err,results,fields){
// //     console.log('\n scheema ERROR: --', err);
// //     // console.log('\n scheema RESULTS --', results);
// //     console.log('\n scheema FIELDS --', fields)

// // });

// // db.query('SOURCE db/seeds.sql', function(err,results,fields){
// //     console.log('\n seeds ERROR: --', err);
// //     // console.log('\n seeds RESULTS --', results);
// //     console.log('\n seeds FIELDS --', fields)

// // });

// // Query database

// // db.query('SELECT * FROM employees', function (err, results,fields) {
// //   console.log('\n employees RESULTS --', results);
// //   console.log('\n employees FIELDS --',fields);
// //   console.log('\n employees ERROR:--',err);
// // });

// // Default response for any other request (Not Found)
// // app.use((req, res) => {
// //   res.status(404).end();
// // });

// // app.listen(PORT, function () {
// //         console.log(`Server running on port ${PORT}`);
// //     });
//     // NewUserInput.ask();

// module.exports = New_db_connection;