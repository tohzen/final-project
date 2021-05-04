window.onload = function() {

const button = document.querySelector(".add-place");
const addList = document.querySelector(".list-places");
const spots = document.querySelectorAll(".spot")


function addPlace(obj) {
    places.push(obj)
}

function remove(index) { 
    places.splice(index,1)
    
}

function makeSpot() {
    const inputPlace = document.querySelector(".placesToGo");
    if(inputPlace.value === ""){
        return alert("Please input text")
    }else{ 
        console.log('lewl')
        const inputPlace = {
            location: inputPlace.value
        }
        addPlace(inputPlace)
        printPlaces(inputPlace)
        inputPlace.value =""
        console.log("kek")
    }
}
button.addEventListener("click",makeSpot)


const printPlaces = function(obj) {
    let daCrib = document.createElement("li");
    daCrib.innerText = obj.text
    daCrib.classList.add(".spot")
    daCrib.id = obj.id;

    const addList = document.querySelector(".list-places");
    addList.appendChild(daCrib)
    console.log(daCrib)
    
    
}


}