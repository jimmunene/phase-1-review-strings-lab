// Write your code in this file!
const currentUser = 'Jim Brian';
let welcomeMessage = 'Welcome to Flatbook,' + ' ' + currentUser + '!';
let excitedWelcomeMessage = 'WELCOME TO FLATBOOK,' + ' ' + currentUser.toUpperCase() + '!';
let shortGreeting = 'Welcome, ';
let firstInitial = currentUser.slice(0, 3);
console.log(firstInitial)
let restOfName = currentUser.slice(3);
console.log(restOfName)
shortGreeting = `${shortGreeting} ${firstInitial}!`;
