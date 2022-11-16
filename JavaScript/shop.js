//  Shopping List (Part Two)
const inputTag = document.getElementsByClassName("form-control")[0];
// const orderListTag = document.getElementsByClassName("orderList")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];
let productId = 1;
const handleChange = (event) =>{
    // console.log("Input Change...",event.target.value);
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () =>{
        const classExist = parentDiv.classList.contains("purchased");
        if(classExist){
            parentDiv.classList.remove("purchased");
        }else{
        parentDiv.classList.add("purchased");
        }
    })
    // const listItem = document.createElement("li");
    const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid","fa-trash-can");
    trashIcon.addEventListener("click",()=>{
        console.log("Trash icon clicked...",productContainer.remove());
    });
    spanTag.id = productId;
    const product = productId.toString() + ". " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv,trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
    // listItem.classList.add("list-group-item");
    // listItem.append(inputValue);
    // orderListTag.append(listItem);
    productId += 1;
    
};
inputTag.addEventListener("change",handleChange);