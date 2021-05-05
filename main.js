

function addTravel(obj) {
    places.push(obj)
}

function remove(index) { 
    places.splice(index,1)
    
}

const button = document.querySelector(".add-travel");

const addList = document.querySelector(".travel-list");
const item = document.querySelectorAll(".travel-item")
const newInput = document.querySelector(".travel-input");




function makeItem() {
    const newInput = document.querySelector(".travel-input");
    if(newInput.value === ""){
        return alert("Please input text")
    }else{ 
        const newItem = {
            location: newInput.value,
            travelers: 2
        }
        
        addTravel(newItem)
        printTravel(newItem)
        newInput.value = ""
        console.log(places)
    }
}
button.addEventListener("click",makeItem);



const printTravel = function(obj) {
    let item = document.createElement("li");
    item.innerText = obj.location
    item.classList.add("travel-item")
    
    const addList = document.querySelector(".travel-list");
    addList.appendChild(item)
    console.log(item)
    
    
}

console.log("shit")

function readList(travel) {
    if(travel == undefined){
        return ""
    }else{
        for(travel of places) {
            printTravel(travel)
            
            console.log()
        }
        
    }
    
}


const clearButton = document.querySelector(".travel-clear")
function clearAll(thing) {
    const items = document.querySelectorAll(".travel-item")
    newInput.value = ""
    for(thing of items) {
        thing.remove();
        places.pop(places)
    }
}
clearButton.addEventListener("click", refresh);


function refresh(obj) {
    clearAll(places);
    readList(places);
    console.log(places)
}
