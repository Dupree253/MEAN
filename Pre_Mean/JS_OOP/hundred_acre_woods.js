var christopher = { character: "Christopher Robin" };
var pooh = { character: "Winnie the Pooh" }; // start with just the character attribute
var tigger = { character: "Tigger" };
var eeyore = { character: "Eeyore" };
var kanga = { character: "Kanga" };
var heffalumps = { character: "Heffalumps" };
var owl = { character: "Owl" };
var piglet = { character: "Piglet" };
var rabbit = { character: "Rabbit" };
var bees = { character: "Bees" };
var gopher = { character: "Gopher" };

christopher.north = kanga;
christopher.south = pooh;
christopher.east = rabbit;
christopher.west = owl;

tigger.north = pooh;

pooh.north = christopher;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

eeyore.east = heffalumps;
eeyore.south = kanga;

kanga.north = eeyore;
kanga.south = christopher;

heffalumps.west = eeysore;

owl.east = christopher;
owl.south = piglet;

rabbit.east = gopher;
rabbit.west = christopher;
rabbit.south = bees;

bees.north = rabbot;
bees.west = pooh;

gopher.west = rabbit;   

 // add more attributes, where we are actually storing the memory location for the other object

