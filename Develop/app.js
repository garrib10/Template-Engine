const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


const team = [];

// Inquire prompt//
function employeeInformation() {
    inquirer
        .prompt([

            {
                type: "list",
                message: "What role do you have in the company?",
                name: "name",
                choices: ["Manager", "Engineer", "Intern", "Show Summary"]
            },
        ])
        .then((val) => {
            if (val.name === "Manager") {
                managerInformation();
            }
            else if (val.name === "Engineer") {
                engineerInformation();
            }
            else if (val.name === "Intern") {
                internInformation();
            }
            else if (val.name === "Show Summary") {
                generateHTML(outputPath, render(team));
            }

        });
}
// Manager Prompt // 
function managerInformation() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the Manager's name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Manager's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the Manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the Managers office number?",
                name: "officeNumber",
            },
        ])
        .then(function (answer) {
            let manager = new Manager(
                answer.name,
                answer.id,
                answer.email,
                answer.officeNumber,
            );
            team.push(manager);
            employeeInformation();
        });
}
// Engineer Prompt//
function engineerInformation() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the Engineer's name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Engineer's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the Engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the Engineer's Github username?",
                name: "github",
            },
        ])
        .then(function (answer) {
            let engineer = new Engineer(
                answer.name,
                answer.id,
                answer.email,
                answer.github,
            );
            team.push(engineer);

            employeeInformation();
        });
}

function internInformation() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the Intern's name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Intern's ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the Intern's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What school does the Intern currently attend?",
                name: "school",
            },
        ])
        .then(function (answer) {
            let intern = new Intern(
                answer.name,
                answer.id,
                answer.email,
                answer.school,
            );
            team.push(intern);

            employeeInformation();
        });
}

function generateHTML (fileName,data){
fs.writeFile(FileName,data, "utf8", function (err) {
 if (err) {
  throw err;
 }
  console.log ("You have created an Employee Summary");
});
}


employeeInformation();













