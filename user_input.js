
// #######################################################
// AS A business owner
// I WANT to be able to view and manage the departments, roles, and employees in my company
// SO THAT I can organize and plan my business
// #######################################################

// ###### ACCEPTENCE CRITERIA ######
// GIVEN a command-line application that accepts user input -- DONE
// WHEN I start the application -- DONE
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role -- DONE
// WHEN I choose to view all departments -- DONE
// THEN I am presented with a formatted table showing department names and department ids -- DONE
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role -- Partially Done
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to - ** Partially Done **
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
// const New_db_connection = require('./server')
// New_db_connection.db;

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Password1121',
      database: 'employees_tracker',
    },
    
    console.log('Conncection made with mysql')
    
  );
class UserInput {
    ask(){
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'view_types',
                choices: ['View all departments', 'View all roles', 'View all employees','Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            },

        ])
        .then((data)=> {
            const {view_types} = data;
            console.log("User selected: -->", view_types);
            if (view_types === 'View all departments'){
                console.log("Showing View all departments");
                NewViewSql.viewDepartments();
            }else if (view_types === 'View all roles'){
                console.log("Showing [View all roles]");
                NewViewSql.viewRoles();
            }else if (view_types === 'View all employees'){
                console.log("Showing [View all employees]");
                NewViewSql.viewEmployees();
            }else if (view_types === 'Add a department'){
                console.log("User entered","[" + view_types.choices)
                NewAddData.addDepartment();
            }
            else 
            console.log("View All departments did not pass")
        });
    }
}

class ViewSql extends UserInput {
    // THEN I am presented with a formatted table showing department names and department ids -- DONE
    viewDepartments(){
        db.query('SELECT id, name FROM departments', function (err, results,fields) {
            console.log(results);
          })

    }
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    viewRoles(){
        db.query('SELECT * FROM roles', function(err, results, fields){
            console.log(results);
        })
    }
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    viewEmployees(){
        db.query('SELECT * FROM employees', function(err,results,fields){
            console.log(results);
        })
    }
}

class AddData extends UserInput{
    // WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
    addDepartment(){
        db.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO departments (name) VALUES ('mm_newDepartment')";
            db.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
              console.log(result);
            });
          });
    }
}

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database

// const New_db_connection = new db_connection;
const NewUserInput = new UserInput;
const NewViewSql = new ViewSql;
const NewAddData = new AddData;
NewUserInput.ask();

// module.exports = UserInput;
