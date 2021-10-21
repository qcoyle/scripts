let returnString = "This is a secret mesage ... the secret word is \"burritos\".";
let secretWord = returnString.match(/"([^"]+)"/)[1];
console.log(secretWord); // Returns "burritos"