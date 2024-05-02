#! /usr/bin/env node
import inquirer from "inquirer";
//*******************Todo App***********************
// 1. ask
// 2. operations like add, delete, edit, view
let myTodo = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            message: "Which operation you want to perform?",
            type: "list",
            name: "operations",
            choices: ["add todo", "edit", "delete", "view"]
        }
    ]);
    if (answer.operations == "add todo") {
        let addTodo = await inquirer.prompt([{
                message: "add Todo in your todo application?",
                type: "input",
                name: "todo"
            }]);
        myTodo.push(addTodo.todo);
        console.log(myTodo);
    }
    ;
    if (answer.operations == "edit") {
        let editTodo = await inquirer.prompt({
            message: "Edit your todo",
            type: "list",
            name: "addtodo",
            choices: myTodo.map((item) => item),
        });
        let addUpdatedTodo = await inquirer.prompt({
            message: "What you want to add in your Todo?",
            type: "input",
            name: "addtodo"
        });
        let newTodo = myTodo.filter((val) => val !== editTodo.addtodo);
        myTodo = [...newTodo, addUpdatedTodo.addtodo];
        console.log(myTodo);
    }
    if (answer.operations == "delete") {
        let deleteTodo = await inquirer.prompt([{
                message: "Which one you want to delete?",
                type: "list",
                name: "deletedtodo",
                choices: myTodo.map((val) => val)
            }]);
        let newDeletedTodo = myTodo.filter((val) => val !== deleteTodo.deletedtodo);
        myTodo = [...newDeletedTodo];
        console.log(newDeletedTodo);
    }
    if (answer.operations == "view") {
        console.log("your todo list is: ");
        myTodo.forEach(myTodo => {
            console.log(myTodo);
        });
        break;
    }
}
console.log(myTodo);
