#! /usr/bin/env/ node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "FirstNumber" },
    { message: "Enter your second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the opertors t perform operation ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(asnwer);
