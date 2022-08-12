const createTeam = (team) => {

    const createManager = (manager) => {
        return`<div>
            <h1>Name: ${manager.getName()}</h1>
            <h2>Role: ${manager.getRole()}</h2>
            <p>ID: ${manager.getId()}
            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            Office Number: ${manager.getOfficeNumber()}
            </p>
        </div>`
    }

    const createIntern = (intern) => {
        return`<div>
        <h1>Name: ${intern.getName()}</h1>
        <h2>Role: ${intern.getRole()}</h2>
        <p>ID: ${intern.getId()}
        Email: ${intern.getEmail()}
        School: ${intern.getSchool()}
        </p>
    </div>`

    }

    const createEngineer = (engineer) => {
        return`<div>
        <h1>Name: ${engineer.getName()}</h1>
        <h2>Role: ${engineer.getRole()}</h2>
        <p>ID: ${engineer.getId()}
        Email: ${engineer.getEmail()}
        GitHub: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a>
        </p>
    </div>`
    }

    const members = []

    members.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => createManager(manager)))

    members.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => createEngineer(engineer)))

    members.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => createIntern(intern)))

    return members.join("")

}

module.exports = (team) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<header>
<h1> My Team </h1>
</header>
<body>
    ${createTeam(team)}
</body>
</html>`
}