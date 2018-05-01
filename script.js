"use strict";
let greeting = prompt ("Would you like to play a game with two players?");

if (greeting ==="yes") {
   let userHealth = 40;
   let grantHealth = 10;
   let userName = prompt ("What's your name?");
   let wins = 0; 
   while (grantHealth > 0) {
        console.log (`${userName}'s health: ${userHealth}`);
        console.log (`Grant's Health: ${grantHealth}`);
        console.log (`${userName}'s Health: ${userHealth -= Math.floor(Math.random() *2+1)}`); //+1 is the starting point and *2 is the stopping point
        console.log (`Grant's Health: ${grantHealth -= Math.floor(Math.random() *2+1)}`); 
        if (wins >= 3) {
        console.log (`Congrats ${userName}!`);
        break;
    
        } else if (userHealth <= 0) {
            console.log ("Game Over!");
            break;
        
        } else if (grantHealth <= 0) {
                wins++;
                console.log (`${userName} wins: ${wins}`);
                grantHealth = 10;
        }
    }
} else if (greeting === "no") {
    console.log ("Bummer. Maybe next time!"); 
}
