const inquirer = require('inquirer'); // Requires npm install inquirer

var questions = [{
    type: 'input',
    name: 'name',
    message: "What's your name?"
}]

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers['name']}!`)
    console.log(answers["name"]);
})


// // How to do it with stdin. Comment out above if using this
// console.log("What is your name? ")
// process.stdin.on('data', (userInput) => {
//     let input = userInput.toString()
//     console.log(`Hello ${input}`)
// });

// // Returns:
// // What is your name? 
// // Quinn // <-- The user terminal input
// // Hello Quinn