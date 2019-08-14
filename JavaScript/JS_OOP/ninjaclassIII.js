class Ninja {
    constructor(name) {
        this._name = name;
        this._health = 100;
        this._speed = 3;
        this._strength = 3;
    }

    sayName() {
        console.log(`My ninja name is ${this._name}!`);
    }

    showStats() {
        console.log(`Name: ${this._name}, Health: ${this._health}, Speed: ${this._speed}, Strength: ${this._strength}`);
    }

    drinkSake() {
        this._health += 10;
    }
}

// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this._health = 200;
        this._speed = 10;
        this._strength = 10;
        this._wisdom = 10;
    }

    speakWisdom() {
        return super.drinkSake() + console.log("There are no winners. The obvious is never what it appears to be.");
    }
}