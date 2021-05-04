const button = document.querySelector(".add-place");
const addList = document.querySelector(".list-places");
const spot = document.querySelector(".spot")


function addPlace(obj) {
    places.push(obj)
  }

  function remove(index) { 
    places.splice(index,1)
    
  }