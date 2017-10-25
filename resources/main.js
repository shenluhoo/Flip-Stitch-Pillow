//an array of every product with product name, price and image source
var pillowArr = [{name: "Rainbow Deer Square Couch Pillow", price: "$30", imgsrc: "images/square-1.jpg"},
                 {name: "Little Bird Square Couch Pillow", price: "$30", imgsrc: "images/square-2.jpg"},
                 {name: "Red Parrot Square Couch Pillow", price: "$30", imgsrc: "images/square-3.jpg"},
                 {name: "Blue Deer Square Couch Pillow", price: "$30", imgsrc:"images/square-4.jpg"},
                 {name: "Yellow Zebra Round Couch Pillow", price: "$35", imgsrc:"images/round-1.jpg"},
                 {name: "Blue Puppy Round Couch Pillow", price: "$35", imgsrc: "images/round-2.jpg"},
                 {name: "Airy Peacock Round Couch Pillow", price: "$35", imgsrc: "images/round-3.jpg"},
                 {name: "Pink Cow Round Couch Pillow", price: "$35", imgsrc: "images/round-4.jpg"},
                 {name: "Bear Shaped Couch Pillow", price: "$40", imgsrc: "images/animal-1.jpg"},
                 {name: "Cat Shaped Couch Pillow", price: "$40", imgsrc: "images/animal-2.jpg"},
                 {name: "Puppy Shaped Couch Pillow", price: "$40", imgsrc: "images/animal-3.jpg"},
                 {name: "Bunny Shaped Couch Pillow", price: "$40", imgsrc: "images/animal-4.jpg"},
                 {name: "Flamingo Bed Pillow", price: "$30", imgsrc: "images/bed-1.jpg"},
                 {name: "Red Pattern Bed Pillow", price: "$30", imgsrc: "images/bed-2.jpg"},
                 {name: "Green Pattern Bed Pillow", price: "$30", imgsrc: "images/bed-3.jpg"},
                 {name: "Green Leaves Bed Pillow", price: "$30", imgsrc: "images/bed-4.jpg"},
                 {name: "Pines Floor Pouf Pillow", price: "$50", imgsrc: "images/floor-1.jpg"},
                 {name: "Forest Floor Pouf Pillow", price: "$50", imgsrc: "images/floor-2.jpg"},
                 {name: "Triangle Floor Pouf Pillow", price: "$50", imgsrc: "images/floor-3.jpg"},
                 {name: "Elephant Floor Pouf Pillow", price: "$50", imgsrc: "images/floor-4.jpg"}];

//individual on click functions for each product
//square-1 product info
$(document).on("click", "#square-1", function(){
  var pillowInfo = pillowArr[0];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//square-2 product info
$(document).on("click", "#square-2", function(){
  var pillowInfo = pillowArr[1];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//square-3 product info
$(document).on("click", "#square-3", function(){
  var pillowInfo = pillowArr[2];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//square-4 product info
$(document).on("click", "#square-4", function(){
  var pillowInfo = pillowArr[3];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//round-1 product info
$(document).on("click", "#round-1", function(){
  var pillowInfo = pillowArr[4];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//round-2 product info
$(document).on("click", "#round-2", function(){
  var pillowInfo = pillowArr[5];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//round-3 product info
$(document).on("click", "#round-3", function(){
  var pillowInfo = pillowArr[6];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//round-4 product info
$(document).on("click", "#round-4", function(){
  var pillowInfo = pillowArr[7];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//animal-1 product info
$(document).on("click", "#animal-1", function(){
  var pillowInfo = pillowArr[8];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//animal-2 product info
$(document).on("click", "#animal-2", function(){
  var pillowInfo = pillowArr[9];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//animal-3 product info
$(document).on("click", "#animal-3", function(){
  var pillowInfo = pillowArr[10];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//animal-4 product info
$(document).on("click", "#animal-4", function(){
  var pillowInfo = pillowArr[11];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//bed-1 product info
$(document).on("click", "#bed-1", function(){
  var pillowInfo = pillowArr[12];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//bed-2 product info
$(document).on("click", "#bed-2", function(){
  var pillowInfo = pillowArr[13];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//bed-3 product info
$(document).on("click", "#bed-3", function(){
  var pillowInfo = pillowArr[14];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//bed-4 product info
$(document).on("click", "#bed-4", function(){
  var pillowInfo = pillowArr[15];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//floor-1 product info
$(document).on("click", "#floor-1", function(){
  var pillowInfo = pillowArr[16];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//floor-2 product info
$(document).on("click", "#floor-2", function(){
  var pillowInfo = pillowArr[17];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//floor-3 product info
$(document).on("click", "#floor-3", function(){
  var pillowInfo = pillowArr[18];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//floor-4 product info
$(document).on("click", "#floor-4", function(){
  var pillowInfo = pillowArr[19];
  var jsonPillowInfo = JSON.stringify(pillowInfo);
  localStorage.setItem("transfer", jsonPillowInfo);
})
//display clicked product info on detail page
$(document).ready(function(){
    var storedPillowInfo = localStorage.getItem("transfer");
    var pillowInfoNew = JSON.parse(storedPillowInfo);
    var pillowName = pillowInfoNew.name;
    $("#pillow-name").html(pillowName);
    var pillowPrice = pillowInfoNew.price;
    $("#pillow-price").html(pillowPrice);
    var pillowImage = pillowInfoNew.imgsrc;
    var img = $("#pillow-image");
    $(img).attr("src", pillowImage);
    console.log(pillowImage);
})
/*** Doc
ument Load ****/
// function displayPillowDetail() {
//   // generate a random animal when the document opens
//   var pillow = JSON.parse(localStorage.getItem("addedPillow"));
//   var hasAddedPillow = false;
//   if (pillow === null) {
//     $("#button-storage").text("Add to Cart");
//     animal = generateRandomAnimal();
//   } else {
//     $("#button-storage").text("Remove from Cart");
//     hasAddedPillow = true;
//   }
//
//
//   $("#button-storage").click(function() {
//     if (hasSavedAnimal) {
//       // clear the animal from the browser
//       localStorage.removeItem("savedAnimal");
//       // if this button was clicked, hide button and show feedback
//       $("#button-storage").css("display", "none");
//       $("#button-action-text").text("Cleared!");
//       $("#button-action-text").css("display", "block");
//     } else {
//       // save the animal to the browser
//       localStorage.setItem("savedAnimal", JSON.stringify(animal));
//       // if this button was clicked, hide button and show feedback
//       $("#button-storage").css("display", "none");
//       $("#button-action-text").text("Saved!");
//       $("#button-action-text").css("display", "block");
//     }
//   });
// });
