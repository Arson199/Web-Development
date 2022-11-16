// Useful DOM methods and properties
const bodyElement = document.getElementsByTagName("body")[0];//HTMLCollection []
// console.log("Body Element: ",bodyElement);

/*
const parentDiv = document.getElementsByClassName("parent")[0];//HTML Collection []
parentDiv.innerHTML="";
console.log("parentDiv: ",parentDiv);

const divWithID = document.getElementById("myID");
console.log("divWithID: ",divWithID);
*/
const parentDiv = document.createElement("div");
parentDiv.classList.add("parent","test"); //add multi class
parentDiv.classList.remove("test"); //remove class

const childDivOne = document.createElement("div");
childDivOne.classList.add("child"); //add class
// const childDivOneText = document.createTextNode("Child One");
// childDivOne.appendChild(childDivOneText);
childDivOne.append("Child One");


const childDivTwo = document.createElement("div");
childDivTwo.classList.add("child"); //add class
// const childDivTwoText = document.createTextNode("Child Two");
// childDivTwo.appendChild(childDivTwoText);
childDivTwo.append("Child Two")


// parentDiv.appendChild(childDivOne);
// parentDiv.appendChild(childDivTwo);
parentDiv.append(childDivOne,childDivTwo);

bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
// console.log("styleTestDiv's width: ",styleTestDiv.style.width);
// console.log("styleTestDiv's height: ",styleTestDiv.style.height);
// console.log("styleTestDiv's background colour: ",styleTestDiv.style.backgroundColor);
   console.log("styleTestDiv's width: ",getComputedStyle(styleTestDiv).width);
   console.log("styleTestDiv's height",getComputedStyle(styleTestDiv).height);
   console.log("styleTestDiv's Background color: ",getComputedStyle(styleTestDiv).backgroundColor);