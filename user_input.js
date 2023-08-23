const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./server')

class UserInput {
    ask(){
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'view_types',
                choices: ['View all departments', 'View all roles', 'View all employees','Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            },
        ])
        .then((data)=> {
            const {view_types} = data;
            console.log(view_types);
            if (view_types === 'View all departments'){
                NewViewSql.viewDepartments()
            }else
            console.log("View All departments did not pass");
        })
        
    }
}

class ViewSql {
    viewDepartments(){
        db.query('SELECT * FROM departments', function (err, results,fields) {
            console.log(results);
            return(results);
            // console.log('\n employees FIELDS --',fields);
            // console.log('\n employees ERROR:--',err);
          })

    }
}
const NewUserInput = new UserInput;
const NewViewSql = new ViewSql;
NewUserInput.ask();

module.exports = NewUserInput;