
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
//game instructions display on webpage. 

//press start button => display a character.
//Morph your pet at certain ages.

// ask pet's name 
// Input pet's name => Count {
    // Age
    // Hunger (1-10 scale)
    // Sleepiness (1-10 scale)
    // Boredom (1-10 scale)
//} 


// Increase pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// Add buttons to the screen to feed pet, turn off the lights, and play with  pet.
// one click each btn => count -1 the scale

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.