var user_name;
var userQuestion = "Will I get a new job this year?";

// user_name = "Kellee";
if (user_name === null || user_name === undefined){
    console.log("Hello!");
} 
else if (user_name != null){
    console.log("Hello, " + user_name + "!");
}
if (user_name != null){
console.log(user_name + " asks: " + userQuestion);
} else {
    console.log("You ask: " + userQuestion);
}

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log("The Magic Eight Ball's answer: " + eightBall); 