
// game class for Tamagotchi,
class Tamagotchi {
    constructor (name, hunger, sleepiness, boredom, age) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}
// Instantiate Tamagotchi 
class Pet extends Tamagotchi {
    constructor (name, hunger, sleepiness, boredom, age) {
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
}
const doggy = new Pet();

//clicking howtoplay tag => 
//game instructions pop up 
const userInstruction = document.querySelector("#howtoplay")
userInstruction.addEventListener('click', function() {
    alert("Take care of your pet")
    alert("1. Feed your pet")
    alert("2. Play with your pet")
    alert("3. Turn light off to your pet sleep")
    alert("4. your pet will die if Hunger, Boredom, or Sleepiness hits 10.")
    alert("Enjoy your game!")
})


//Morph your pet at certain ages.

// ask pet's name 
const userInput = document.querySelector('#user-input')
const inputSpan = document.querySelector('#input-span')

const getName = () => {
    document.querySelector("#input-button").addEventListener('click', function(){
    inputSpan.innerText = `Let's have fun with ${userInput.value}!`
        //reset the value of the input
        userInput.value = ''
    })
}
getName()

//press start button => display a character.
// Increase pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
const age = document.querySelector('#age')
const hungerScore = document.querySelector('#hungerScore')
const boredomScore = document.querySelector('#boredomScore')
const sleepScore = document.querySelector('#sleepScore')
const starBtn = document.querySelector('#game-start')
let countAge = null 

const treatBtn = document.querySelector("#feed-btn")
const playBtn = document.querySelector("#play-btn")
const sleepBtn = document.querySelector("#sleep-btn")

const startGame = () => {
    const getAge = function() {
        dieTen()
        age.innerHTML = `Pet's age: ${doggy.age++}`
    }
    countAge = setInterval(getAge,1500)
    
    const getHunger = function () {
        dieTen()
        hungerScore.innerHTML = `Hunger Score: ${doggy.hunger++}`
    }
    countHunger = setInterval(getHunger,1200)
    
    const getBoredom = function () {
        dieTen()
        boredomScore.innerHTML = `Boredom Score: ${doggy.boredom++}`
    }
    countBoredom = setInterval(getBoredom,1700)
    
    const getSleep = function () {
        dieTen()
        sleepScore.innerHTML = `sleepiness Score: ${doggy.sleepiness++}`
    }
    countSleep = setInterval(getSleep,1300) 

    const dieTen = function () {
        if(doggy.hunger == 11 || doggy.boredom == 11 || doggy.sleepiness == 11) {  
            clearInterval(countAge)
            clearInterval(countHunger)
            clearInterval(countBoredom)
            clearInterval(countSleep)
            alert('RIP your pet is in heaven now')
            treatBtn.disabled = true
            playBtn.disabled = true
            sleepBtn.disabled = true
        }
    }
}

// Add buttons to the screen to feed pet, turn off the lights, and play with  pet.
// one click each btn => count -1 the scale
const clickBtn = () => {
    treatBtn.addEventListener('click', function(){
        hungerScore.innerHTML = `Hunger Score: ${doggy.hunger--}`
    })
    playBtn.addEventListener('click', function(){
        boredomScore.innerHTML = `Boredom Score: ${doggy.boredom--}`
    })
    sleepBtn.addEventListener('click', function(){
        sleepScore.innerHTML = `Sleepiness Score: ${doggy.sleepiness--}`
    })
}


starBtn.addEventListener('click', () => {
    startGame()
    clickBtn()
}
)


// You pet should die if Hunger, Boredom, or Sleepiness hits 10.