const button = document.querySelector(".add-place");



function addPlace(obj) {
    places.push(obj)
  }

  function remove(index) { 
    places.splice(index,1)
    
  }