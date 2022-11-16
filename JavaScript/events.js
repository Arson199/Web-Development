// Events

// emitter,listener or handler
// an event occurs, run some codes
const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("beach")[0]; //HTML COLLECTION []
const originalImageSrc = image.src;
const imageArray =[
    "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571497569639-7bd0fcd36c64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
];
let counter = 0;
// const myFunction = () => {
//     console.log(image.src);
//     image.src = "https://images.unsplash.com/photo-1579419631276-4a7a38f811de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
// }
const myFunction2 = () => {
    myButton.style.backgroundColor = "red";
}
const myFunction3 = () => {
    if(counter === 5){
        image.src = originalImageSrc;
        counter = 0;
        return;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter +=1;
    console.log("Counter value is: ",counter);
}


// myButton.onclick = myFunction;
// myButton.onclick = myFunction2;

// myButton.addEventListener("click",myFunction);
myButton.addEventListener("click",myFunction2);
myButton.addEventListener("click",myFunction3);