function Ninja(name) {
    var ninja = {};
    var self = this;
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }
}

var ninja1 = new Ninja("Kenji");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();