// DO WHILE LOOP
// AND SOME QUESTION
  // 1. GUESS THE NUMBER (DO WHILE)
  // 2. SASTA CALCULATOR (SWITCH CASE)
  // 3. PROJECT RESTORENT(SWITCH CASE) 
  // 4. STRONG NUMBER

  
// 1. GUESS THE NUMBER
let com = Math.floor(Math.random() * 100) + 1;
let userInput ;
do
{
    userInput = Number(prompt("Guess the number With 0 to 100"));
    if (isNaN(userInput) || userInput < 0 || userInput > 100) 
    {
        console.log("Please Enter Valid Number");
        continue;
    }
    if (userInput > com)
        console.log('TO High , Try Again');
    else if (userInput < com)
        console.log('To Low , Try Again');
    else
        console.log('Congrats 🎉 and number was : ' + com);    
}while(userInput !== com);


// 4. STRONG NUMBER
function factorial(n) 
{
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isStrong(num) {
  let sum = 0, temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log(isStrong(145)); // true