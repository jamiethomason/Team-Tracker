const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const template = require('./src/template')

const teamMembers = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the managers Id?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the managers Office number?'
    }
]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    teamMembers.push(manager);
    console.log(teamMembers);
    mainQuestion()
});


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

function addEngineer() {

}

function addIntern() {

}

function buildteam() {
    fs.writeFile('index.html', template(teamMembers), (err) => {
        if(err) throw err;
        console.log('Team has been created!')
    })
}