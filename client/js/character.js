// Warrior Health = 2500
var warriorHealth = 2500;

// Warrior Attack = 300 - 400 dmg
var warriorAttack = Math.floor((Math.random() * 101) + 300);

// Warrior Defend = 50 - 100 block dmg
var warriorDefend = Math.floor((Math.random() * 51) + 50);

// Warrior Special Attack = 450 - 750 dmg
var warriorSpecialAttack = Math.floor((Math.random() * 301) + 450);


// Assassin Health = 1500
var assassinHealth = 1500;

// Assassin Attack = 400 - 700 dmg
var assassinAttack = Math.floor((Math.random() * 301) + 400);

// Assassin Defend = 25 - 50 dmg
var assassinDefend = Math.floor((Math.random() * 26) + 25);

// Assassin Special Attack = 800 - 1200 dmg
var assassinSpecialAttack = Math.floor((Math.random() * 401) + 800);


// Monster Health = 4500
var monsterHealth = 4000

// Monster Attack = 200 - 400 dmg
var monsterAttack = Math.floor((Math.random() * 201) + 200);

// Monster Defend = 50 dmg
var monsterDefend = 50;

// Monster Special Attack = 400 - 600 dmg
var monsterSpecialAttack = Math.floor((Math.random() * 201) + 400);



// Warrior Object and Properties
var warrior = {
    health: warriorHealth,
    attack: warriorAttack,
    defend: warriorDefend,
    specialAttack: warriorSpecialAttack
}

// Assassin Object and Properties
var assassin = {
    health: assassinHealth,
    attack: assassinAttack,
    defend: assassinDefend,
    specialAttack: assassinSpecialAttack
}

// Monster Object and Properties
var monster = {
    health: monsterHealth,
    attack: monsterAttack,
    defend: monsterDefend,
    specialAttack: monsterSpecialAttack
}

console.log(warrior);
console.log(assassin);
console.log(monster);
