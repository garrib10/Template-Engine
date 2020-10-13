# Template-Engine

# Unit 10 OOP Homework: Template Engine - Employee Summary

For this homework assignment, we were told to make a team.html based off the questions that we gave in the app.js file. We were given templates (manager.html, engineer.html, intern.hmtl, main.html), and test templates (manager.test.js,engineer.test.js,intern.test.js, employee.test.js). Also, we were given the lib folder with the basic html files that would be used for this assignment, and we were told to add the rest to make it work properly. After we run node app.js in the terminal. You are given prompts or questions based off the role that person is in, and then we are given a team.html in our output folder when we are done. Lastly, we were told to make sure that the application is able to run in a jest test that we are provided within package.json. 


## Instructions

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How do you deliver this? Here are some guidelines:

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* Your app will run as a Node CLI to gather information about each employee.

In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests to help you build the classes necessary.

It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests must pass.

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Bonus

* Use validation to ensure that the information provided is in the proper expected format.

* Add the application to your portfolio.

## Screencastify Videos

Walthrough video  on node app.js : https://drive.google.com/file/d/1ZFV_vRbveWESL2kMvyvkT-bTj1GqR8Ha/view 

Walkthrough video on npm run test: https://drive.google.com/file/d/1sUfhaDXLwmAk2vvAQUf__HD-IzbTJE6c/view  

## Screenshots
 <img width="1268" alt="Team html in browser" src="https://user-images.githubusercontent.com/68867054/95905559-05800280-0d67-11eb-85c3-6a904091bbaf.png"> 

 <img width="1220" alt="Npm run test " src="https://user-images.githubusercontent.com/68867054/95905622-1892d280-0d67-11eb-9f46-80f4d72d65fc.png">

## Submission on BCS

You are required to submit the following:

* The URL of the GitHub repository

* A video demonstrating the entirety of the app's functionality 

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
