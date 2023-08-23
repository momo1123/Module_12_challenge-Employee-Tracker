
// #######################################################
// AS A business owner
// I WANT to be able to view and manage the departments, roles, and employees in my company
// SO THAT I can organize and plan my business
// #######################################################

// ###### ACCEPTENCE CRITERIA ######
// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database


const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const NewUserInput = require('./user_input');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'fuu12345',
    database: 'employees_tracker'
  },
  console.log('created employees_tracker database')
);
// db.query('SOURCE db/schema.sql', function(err,results,fields){
//     console.log('\n scheema ERROR: --', err);
//     // console.log('\n scheema RESULTS --', results);
//     console.log('\n scheema FIELDS --', fields)

// });

// db.query('SOURCE db/seeds.sql', function(err,results,fields){
//     console.log('\n seeds ERROR: --', err);
//     // console.log('\n seeds RESULTS --', results);
//     console.log('\n seeds FIELDS --', fields)

// });

// Query database

// db.query('SELECT * FROM employees', function (err, results,fields) {
//   console.log('\n employees RESULTS --', results);
//   console.log('\n employees FIELDS --',fields);
//   console.log('\n employees ERROR:--',err);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, function () {
        console.log(`Server running on port ${PORT}`);
    });
    // NewUserInput.ask();

module.exports = db;