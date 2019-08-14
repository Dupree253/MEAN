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

    this.punch = function(enemy) {
        if (enemy instanceof Ninja) {
            enemy.health -= 5;
            console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
        }
    }

    this.kick = function(enemy) {
        if (enemy instanceof Ninja) {
            var damage = this.strength * 15;
            enemy.health -= damage;
            console.log(enemy.name + " was kicked by " + this.name + " and lost " + damage + " health!");
        }
    }

}