function guessing_game() {
    
    let target_number:number = (Math.floor(Math.random() * 10) + 1);
    let number_of_guessing:number =0;
    const possible_guesses= 5;

    while (number_of_guessing < possible_guesses){
        const guess =parseInt(prompt("guess the number (1-10):"));
        if (guess === target_number){
            console.log("congrats! you won");
        }else {
            console.log("try again", target_number);
            number_of_guessing++; 
        }
    }
}

guessing_game();