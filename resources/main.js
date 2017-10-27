//an array of every product with product name, price and image source
var pillowArr = [{name: "Rainbow Deer Square Couch Pillow", price: "30", imgsrc: "images/square-1.jpg"},
                 {name: "Little Bird Square Couch Pillow", price: "30", imgsrc: "images/square-2.jpg"},
                 {name: "Red Parrot Square Couch Pillow", price: "30", imgsrc: "images/square-3.jpg"},
                 {name: "Blue Deer Square Couch Pillow", price: "30", imgsrc:"images/square-4.jpg"},
                 {name: "Yellow Zebra Round Couch Pillow", price: "35", imgsrc:"images/round-1.jpg"},
                 {name: "Blue Puppy Round Couch Pillow", price: "35", imgsrc: "images/round-2.jpg"},
                 {name: "Airy Peacock Round Couch Pillow", price: "35", imgsrc: "images/round-3.jpg"},
                 {name: "Pink Cow Round Couch Pillow", price: "35", imgsrc: "images/round-4.jpg"},
                 {name: "Bear Shaped Couch Pillow", price: "40", imgsrc: "images/animal-1.jpg"},
                 {name: "Cat Shaped Couch Pillow", price: "40", imgsrc: "images/animal-2.jpg"},
                 {name: "Puppy Shaped Couch Pillow", price: "40", imgsrc: "images/animal-3.jpg"},
                 {name: "Bunny Shaped Couch Pillow", price: "40", imgsrc: "images/animal-4.jpg"},
                 {name: "Flamingo Bed Pillow", price: "30", imgsrc: "images/bed-1.jpg"},
                 {name: "Red Pattern Bed Pillow", price: "30", imgsrc: "images/bed-2.jpg"},
                 {name: "Green Pattern Bed Pillow", price: "30", imgsrc: "images/bed-3.jpg"},
                 {name: "Green Leaves Bed Pillow", price: "30", imgsrc: "images/bed-4.jpg"},
                 {name: "Pines Floor Pouf Pillow", price: "50", imgsrc: "images/floor-1.jpg"},
                 {name: "Forest Floor Pouf Pillow", price: "50", imgsrc: "images/floor-2.jpg"},
                 {name: "Triangle Floor Pouf Pillow", price: "50", imgsrc: "images/floor-3.jpg"},
                 {name: "Elephant Floor Pouf Pillow", price: "50", imgsrc: "images/floor-4.jpg"}];

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
//create a null array to store all selected pillows to display on shopping cart page
var selectedPillows = [];
//create a null array to store all pillows added to wishlist
var savedPillows = [];
//
$(document).ready(function(){
    //read proudct info of individual pillow clicked on "shop by types/shapes" pages
    var storedPillowInfo = localStorage.getItem("transfer");
    var pillowInfoNew = JSON.parse(storedPillowInfo);
    //assign a default pillow
    if (!pillowInfoNew) {
      var pillowInfo = pillowArr[0];
      var jsonPillowInfo = JSON.stringify(pillowInfo);
      localStorage.setItem("transfer", jsonPillowInfo);
      var storePillowInfo = localStorage.getItem("transfer");
      var pillowInfoNew = JSON.parse(storedPillowInfo);
    }
    //parse detail pillow infos to fill corresponding sections on detail page
    var pillowName = pillowInfoNew.name;
    $("#pillow-name").html(pillowName);
    var pillowPrice = pillowInfoNew.price;
    $("#pillow-price").html(pillowPrice);
    var pillowImage = pillowInfoNew.imgsrc;
    var img = $("#pillow-image");
    $(img).attr("src", pillowImage);
    //add a pillow to shopping cart when click add to cart button
    $("#add-to-cart").on("click", function(){
      var newPillow = {name: $("#pillow-name").text(), price: parseInt($("#pillow-price").text()), imgsrc: $("#pillow-image").attr("src"), quantity: parseInt($("#quantity").val())}
      //push selected pillow to array selectedPillows
      if (selectedPillows === null){
        selectedPillows.push(newPillow);
      }else {
        var i = 0;
        var itemAdded = false;
        while (i<selectedPillows.length){
          if (newPillow.name === selectedPillows[i].name){
            selectedPillows[i].quantity = selectedPillows[i].quantity + newPillow.quantity;
            itemAdded = true;
            break;
          }else{
            i++;
          }
        }
        if (!itemAdded){
         selectedPillows.push(newPillow);
        }
      }
      var jsonSelectedPillows = JSON.stringify(selectedPillows);
      localStorage.setItem("addToCart", jsonSelectedPillows);
    })
    //parse stored selected pillows on shopping cart
    var storedSeletedPillows = localStorage.getItem("addToCart");
    var selectedPillowsInfo = JSON.parse(storedSeletedPillows);
    if(selectedPillowsInfo === null){
      selectedPillowsInfo = [];
    } else{
      selectedPillows = selectedPillowsInfo;}
      //add information of selected pillows to display on shopping cart page
      var shoppingList = $("#shopping-list");
      var i=0;
      while (i<selectedPillows.length){
        var addThisPillow = selectedPillows[i];
        shoppingList.append("<li>"+"<img class = 'shopping-cart-image' id = '" + i + "'src = '" + addThisPillow.imgsrc + "'/>" +"<span class='selected-pillow-name'>" +
        addThisPillow.name + "</span>" + "<span class='selected-pillow-price'>$" + addThisPillow.price + "</span>" + "<span class = 'selected-pillow-quantity'>" +
        addThisPillow.quantity + "</span>" + "<button class='delete-pillow'>X</button>" + "</li>")
        i++;
      }
      //delete pillow when click on X button, and reclaculate the total price
      $(document).on("click", ".delete-pillow ", function(){
        var deletePillowSrc = $(this).parent().children(".shopping-cart-image").attr("src");
        var i = 0;
        while (i<selectedPillows.length){
          if (deletePillowSrc == selectedPillows[i].imgsrc){
            selectedPillows.splice(i,1);
            break;
          }else{
            i++;
          }
        }
        localStorage.setItem("addToCart", JSON.stringify(selectedPillows));
        $(this).parent().remove();
        totalPrice();
      })
      totalPrice();
      totalQuantity();
      //add a pillow to wishlist
      $("#add-to-wishlist").on("click", function(){
        var newPillow = {name: $("#pillow-name").text(), price: parseInt($("#pillow-price").text()), imgsrc: $("#pillow-image").attr("src"), quantity: parseInt($("#quantity").val())}
        //push selected pillow to array selectedPillows
        if (savedPillows === null){
          savedPillows.push(newPillow);
        }else {
          var i = 0;
          var itemAdded = false;
          while (i<savedPillows.length){
            if (newPillow.name === savedPillows[i].name){
              savedPillows[i].quantity = savedPillows[i].quantity + newPillow.quantity;
              itemAdded = true;
              break;
            }else{
              i++;
            }
          }
          if (!itemAdded){
           savedPillows.push(newPillow);
          }
        }
        var jsonSavedPillows = JSON.stringify(savedPillows);
        localStorage.setItem("addToWishlist", jsonSavedPillows);
      })
      //parse stored saved pillows on wishlist
      var storedSavedPillows = localStorage.getItem("addToWishlist");
      var savedPillowsInfo = JSON.parse(storedSavedPillows);
      if(savedPillowsInfo === null){
        savedPillowsInfo = [];
      } else{
        savedPillows = savedPillowsInfo;}
        //add information of selected pillows to display on shopping cart page
        var wishlist = $("#wishlist");
        var i=0;
        while (i<savedPillows.length){
          var addThisPillow = savedPillows[i];
          wishlist.append("<li>"+"<img class = 'shopping-cart-image' id = '" + i + "'src = '" + addThisPillow.imgsrc + "'/>" +"<span class='selected-pillow-name'>" +
          addThisPillow.name + "</span>" + "<span class='selected-pillow-price'>$" + addThisPillow.price + "</span>" + "<button class='remove-pillow'>X</button>" + "</li>")
          i++;
        }
        //remove pillow from wishlist when click on X button
        $(document).on("click", ".remove-pillow ", function(){
          var removePillowSrc = $(this).parent().children(".shopping-cart-image").attr("src");
          var i = 0;
          while (i<savedPillows.length){
            if (removePillowSrc == savedPillows[i].imgsrc){
              savedPillows.splice(i,1);
              break;
            }else{
              i++;
            }
          }
          localStorage.setItem("addToWishlist", JSON.stringify(savedPillows));
          $(this).parent().remove();
        })
})
//function to calculate the total price of pillows in shopping cart
function totalPrice(){
  if(selectedPillows === null){
    selectedPillows = [];
  }else{
    var i = 0;
    var total = 0;
    while (i<selectedPillows.length){
      var itemTotal = (selectedPillows[i].quantity)*(selectedPillows[i].price);
      total = total + itemTotal;
      i++;
    }
    $("#total-price").html("Total: $" + total)
  }
}
//return the number of items in shopping cart above shopping cart logo
function totalQuantity(){
  var i = 0;
  var totalQuantity = 0;
  if(selectedPillows.length == 0){
    selectedPillows = [];
  }else{
    while (i<selectedPillows.length){
      var itemQuantity = selectedPillows[i].quantity;
      totalQuantity = totalQuantity + itemQuantity;
      i++;
    }
    $("#shopping-cart-logo").parent().append("<div class = 'total-quantity'>" + totalQuantity + "</div>");}
}
