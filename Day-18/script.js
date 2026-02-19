
class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this._health = 50; // default health
    }

    get health() {
        return this._health;
    }

    set health(value) {
        if (value > 100) {
            this._health = 100;
        } else if (value < 0) {
            this._health = 0;
        } else {
            this._health = value;
        }
    }

    feed() {
        this.health += 10;
        return `${this.name} has been fed!`;
    }

    play() {
        this.health -= 5;
        return `${this.name} played happily!`;
    }

    getStatus() {
        return `Pet Name: ${this.name} | Type: ${this.type} | Health: ${this.health}`;
    }
}

const myPet = new Pet("Buddy", "Dog");

function feedPet() {
    document.getElementById("output").innerText = myPet.feed();
}

function playWithPet() {
    document.getElementById("output").innerText = myPet.play();
}

function showStatus() {
    document.getElementById("output").innerText = myPet.getStatus();
}