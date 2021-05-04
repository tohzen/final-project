const button = document.querySelector(".add-place");
const addList = document.querySelector(".list-places");
const spot = document.querySelector(".spot")


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
    const inputPlace = {
      text: inputPlace.value,
    }
    addPlace(inputPlace)
}
  }
  button.addEventListener("click",makeSpot)