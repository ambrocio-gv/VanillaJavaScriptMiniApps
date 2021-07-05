



let cards = []

let newCard = 0

let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""

let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let aceClickedEl = document.getElementById("aceClicked")


let player = {
    Name: "Gerard",
    Chips: 145
    // ,
    // sayHello: function() {
    //     console.log("Hello")
    // } 
}




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips






// let sumEl = document.querySelector("#sum-el")
// let cardEl = document.querySelector("#card-el")
// let messageEl = document.querySelector("#message-el")

function startGame(){
    isAlive = true  
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "  

    for (let i = 0; i < cards.length; i++ ){       


        cardEl.textContent += cards[i] + " "
    }   

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want a new card?"
        
    } else if (sum === 21){    
        message = "You've got Blackjack!"
        
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game"
       
        isalive = false    
    }
    messageEl.textContent = message
}

function getNewCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
        newCard = getRandomCard()
    
        cards.push(newCard)
    
        sum += newCard
    
        renderGame()
    }
    

}

function getRandomCard(){
    let randomCard = Math.floor(((Math.random()) * 13) + 1 )    
    
    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        // aceClickedEl.style.display = "block"
        // if (chooseOne === true){
        //     return 1
        // }
        // else if (chooseEleven === true){
        //     return 11
        // }
        return 11
    } else {
        return randomCard
    }


    return randomCard
}

// function chooseOne(){
//     aceClickedEl.style.display = "none"
//     return true
    
// }

// function chooseEleven(){
//     aceClickedEl.style.display = "none"
//     return true
    
// }

