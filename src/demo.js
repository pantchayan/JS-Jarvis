console.log("Hello World");


var robot = require("robotjs");

// setInterval(()=>{robot.moveMouse(100,100)},1000);                   

// robot.setMouseDelay(2);

// robot.moveMouseSmooth(500,500,2);
// setInterval(()=>{
// console.log(robot.getMousePos())},1000);


let searchBarCoordinates = { x: 102, y: 748 };

robot.moveMouseSmooth(searchBarCoordinates.x, searchBarCoordinates.y);

robot.mouseClick();

robot.typeString("Chrome");

robot.keyTap("enter");


robot.typeString(" https://github.com/pantchayan");
robot.keyTap("enter");

robot.keyTap("ctrl" + "T");