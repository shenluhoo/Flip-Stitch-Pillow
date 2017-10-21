/*** Shopping Cart Delete Item ***/
$ (document).on("click", ".delete-item",function(){
  $ (this).parent().remove();
}

/*** Adding an Item to Shopping Cart ***/
$ (document).on("click", "#add-to-cart", )




/*** Object Contructor ***/
function Pillow(name, price, index){
    this.name = name;
    this.price = price;
    this.index = index;
}

/*** Document Load ****/
function displayPillowDetail() {
  // generate a random animal when the document opens
  var pillow = JSON.parse(localStorage.getItem("addedPillow"));
  var hasAddedPillow = false;
  if (pillow === null) {
    $("#button-storage").text("Add to Cart");
    animal = generateRandomAnimal();
  } else {
    $("#button-storage").text("Remove from Cart");
    hasAddedPillow = true;
  }


  $("#button-storage").click(function() {
    if (hasSavedAnimal) {
      // clear the animal from the browser
      localStorage.removeItem("savedAnimal");
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    } else {
      // save the animal to the browser
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");
    }
  });
});
