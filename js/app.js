
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
const startBtn = document.querySelector('#game-start')
let countAge = null 

const treatBtn = document.querySelector("#feed-btn")
const playBtn = document.querySelector("#play-btn")
const sleepBtn = document.querySelector("#sleep-btn")

const startGame = () => {
    startBtn.disabled = true
    const resetBtn = document.createElement('button')
    resetBtn.innerText = "Reset"
    document.body.appendChild(resetBtn)
    resetBtn.classList.add('button')
   
    const getAge = function() {
        dieTen()
        age.innerHTML = `Pet's age: ${doggy.age++}`
        if (doggy.age == 1){
            //Morph your pet at certain ages.
            alert('Egg is hatching!!')
            document.querySelector('.pokeBall').setAttribute('src','https://media0.giphy.com/media/4T3tuAa2WLJJEF8DSr/giphy.gif')
        }
        if(doggy.age == 5){
            alert('Your pet is 3!')
            document.querySelector('.pokeBall').setAttribute('src','https://media4.giphy.com/media/1o1oyOi61yOeGG7MtL/giphy.gif')
        }
        if(doggy.age == 10){
            alert('Your pet is 7!')
            document.querySelector('.pokeBall').setAttribute('src','https://media4.giphy.com/media/8YHm1R9M8HqNLR6s7G/giphy.gif')
        }
    }
    countAge = setInterval(getAge,1500)
    
    const getHunger = function () {
        dieTen()
        hungerScore.innerHTML = `Hunger Score: ${doggy.hunger++}`
    }
    countHunger = setInterval(getHunger,2300)
    
    const getBoredom = function () {
        dieTen()
        boredomScore.innerHTML = `Boredom Score: ${doggy.boredom++}`
    }
    countBoredom = setInterval(getBoredom,2700)
    
    const getSleep = function () {
        dieTen()
        sleepScore.innerHTML = `sleepiness Score: ${doggy.sleepiness++}`
    }
    countSleep = setInterval(getSleep,3200) 

    // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
    const dieTen = function () {
        if(doggy.hunger == 11 || doggy.boredom == 11 || doggy.sleepiness == 11) {  
            clearInterval(countAge)
            clearInterval(countHunger)
            clearInterval(countBoredom)
            clearInterval(countSleep)

            document.querySelector('.pokeBall').setAttribute('src','https://media4.giphy.com/media/51Wwiu1w9BEIdiGbwq/giphy.gif')
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
        document.body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)"
    })
    playBtn.addEventListener('click', function(){
        boredomScore.innerHTML = `Boredom Score: ${doggy.boredom--}`
        document.body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)"
    })  
    sleepBtn.addEventListener('click', function(){
        sleepScore.innerHTML = `Sleepiness Score: ${doggy.sleepiness--}`
        document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/forest-game-background-d-application-vector-design-tileable-horizontally-size-ready-parallax-effect-47652714.jpg)"
    })
}

startBtn.addEventListener('click', () => {
    startGame()
    clickBtn()
}
)

resetBtn.addEventListener('click',  () => {
    startBtn.disabled = true
    startGame()
    clickBtn()
})

