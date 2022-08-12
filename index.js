const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const template = require('./src/template')

const teamMembers = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's Id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the manager's Office number?"
    }
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    teamMembers.push(manager);
    console.log(teamMembers);
    mainQuestion()
});

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's Id?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        console.log(teamMembers);
        mainQuestion()
    });

}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's Id?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        console.log(teamMembers);
        mainQuestion()
    });

}

function mainQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainQuestion',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Build Team']
        },
    ]).then(answer => {
        if(answer.mainQuestion === 'Add an Engineer') {
            addEngineer()
        } else if (answer.mainQuestion === 'Add an Intern') {
            addIntern()
        } else {
            buildteam()
        }
    })
}

function buildteam() {
    fs.writeFile('./dist/index.html', template(teamMembers), (err) => {
        if(err) throw err;
        console.log('Team has been created!')
    })
}