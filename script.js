let age= 15
let guess= 0

while(guess != age){
 guess = prompt ('Guess my age!')
 guess = parseInt (guess)
 if (age > guess) {
 alert('Your Guess is Incorect :( . Try again!')
} else if (guess < age) {
alert ('Your guess is Incorect :( . Try again!')
}
}
alert ('YOU WIN!')
document.getElementById('answer').innerHTML = "CONGRATS!"