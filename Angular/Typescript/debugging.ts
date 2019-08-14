var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
// myString was set to be a String, so if you try to set the variable 

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
 // "name" was initially passed in as a string, so unless it's passed in as an 
 // integer, you cannot call it as an integer

 