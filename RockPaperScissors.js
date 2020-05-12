const computerChoices = ['r', 'p', 's'];

 let wins = 0;
 let losses = 0;
 let ties = 0;

 let diretionsText = document.getElementById('directions-text');
 let userchoiceText = document.getElementById('userChoice-text');
 let computerChoiceText = document.getElementById('computerChoice-text');
 let winsText = document.getElementById('wins-text');
 let lossesText = document.getElementById('losses-text');
 let tiesText = document.getElementById('ties-text');

 document.onkeyup = function(event) {

     let userGuess = event.key;
     let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     
     if((userGuess === 'r') || (userGuess === 'p') || (userGuess === 's')) {

        if((userGuess === 'r' && computerGuess === 's')||
           (userGuess === 'p' && computerGuess === 'r')||
           (userGuess === 's' && computerGuess === 'p')){
               wins++;
           }else if (userGuess === computerGuess) {
               ties++
           }else {
               losses++
           }
           diretionsText.textContent = '';

           userchoiceText.textContent = 'you chose: '+userGuess;
           computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
           winsText.textContent = 'wins: ' + wins;
           lossesText.textContent = 'losses ' + losses;
           tiesText.textContent = 'ties: ' + ties; 
     }
 }