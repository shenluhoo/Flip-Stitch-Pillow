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
        $("#add-to-cart").html("Added!");
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
          $("#add-to-wishlist").html("Added!");
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
        //add information of selected pillows to display on wishlist
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
          totalPriceWishlist();
          localStorage.setItem("addToWishlist", JSON.stringify(savedPillows));
          $(this).parent().remove();
        })
        totalPriceWishlist();

        //filter through shapes and types
        //load the whole list when click all
        $(document).on("click", "#option-all", function(){
          location.reload();
        })
        //only show square on shape page
        $(document).on("click", "#option-square", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?square-1'>" + "<img class='square couch item-1' id='square-1' src='images/square-1.jpg'/>" +
          "</a>" + "<a href='detail.html?square-2'>" + "<img class='square couch item-2' id='square-2' src='images/square-2.jpg'/>" + "</a>" + "<a href='detail.html?square-3'>" +
          "<img class='square couch item-3' id='square-3' src='images/square-3.jpg'/>" + "</a>" + "<a href='detail.html?square-4'>" +
          "<img class='square couch item-4' id='square-4' src='images/square-4.jpg'/>" + "</a>"+"</div>')" +
          "<div class='image-row'>" + "<a href='detail.html?bed-1'>" + "<img class='bed square item-1' id='bed-1' src='images/bed-1.jpg'/>" + "</a>" +
          "<a href='detail.html?bed-2'>" + "<img class='bed square item-2' id='bed-2' src='images/bed-2.jpg'/>" + "</a>" + "<a href='detail.html?bed-3'>" +
          "<img class='bed square item-3' id='bed-3' src='images/bed-3.jpg'/>" + "</a>" + "<a href='detail.html?bed-4'>" +
          "<img class='bed square item-4' id='bed-4' src='images/bed-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-square").css("background-color", "black");
          $("#option-square").css("color", "white");
        })
        //only show round on shape page and type page
        $(document).on("click", "#option-round", function(){
          $(".image-block").html(  "<div class='image-row'>" + "<a href='detail.html?round-1'>" + "<img class='round couch item-1' id='round-1' src='images/round-1.jpg'/>" +
          "</a>" + "<a href='detail.html?round-2'>" + "<img class='round couch item-2' id='round-2' src='images/round-2.jpg'/>" + "</a>" + "<a href='detail.html?round-3'>" +
          "<img class='round couch item-3' id='round-3' src='images/round-3.jpg'/>" + "</a>" + "<a href='detail.html?round-4'>" +
          "<img class='round couch item-4' id='round-4' src='images/round-4.jpg'/>" + "</a>" + "</div>" + "<div class='image-row'>" + "<a href='detail.html?floor-1'>" +
          "<img class='round floor item-1' id='floor-1' src='images/floor-1.jpg'/>" + "</a>" + "<a href='detail.html?floor-2'>" +
          "<img class='round floor item-2' id='floor-2' src='images/floor-2.jpg'/>" + "</a>" + "<a href='detail.html?floor-3'>" +
          "<img class='round floor item-3' id='floor-3' src='images/floor-3.jpg'/>" + "</a>" + "<a href='detail.html?floor-4'>" +
          "<img class='round floor item-4' id='floor-4' src='images/floor-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-round").css("background-color", "black");
          $("#option-round").css("color", "white");
        })
        //only show dog on shape page
        $(document).on("click", "#option-dog", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?animal-3'>" +
          "<img class='dog couch item-3' id='animal-3' src='images/animal-3.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-dog").css("background-color", "black");
          $("#option-dog").css("color", "white");
        })
        //only show bear on shape page
        $(document).on("click", "#option-bear", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?animal-1'>" +
          "<img class='bear couch item-1' id='animal-1' src='images/animal-1.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-bear").css("background-color", "black");
          $("#option-bear").css("color", "white");
        })
        //only show bunny on shape page
        $(document).on("click", "#option-bunny", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?animal-4'>" +
          "<img class='bunny couch item-4' id='animal-4' src='images/animal-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-bunny").css("background-color", "black");
          $("#option-bunny").css("color", "white");
        })
        //only show cat on shape page
        $(document).on("click", "#option-cat", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?animal-2'>" +
          "<img class='cat couch item-2' id='animal-2' src='images/animal-2.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-cat").css("background-color", "black");
          $("#option-cat").css("color", "white");
        })
        //only show floor pillow on type page
        $(document).on("click", "#option-floor", function(){
          $(".image-block").html("</div>" + "<div class='image-row'>" + "<a href='detail.html?floor-1'>" +
          "<img class='round floor item-1' id='floor-1' src='images/floor-1.jpg'/>" + "</a>" + "<a href='detail.html?floor-2'>" +
          "<img class='round floor item-2' id='floor-2' src='images/floor-2.jpg'/>" + "</a>" + "<a href='detail.html?floor-3'>" +
          "<img class='round floor item-3' id='floor-3' src='images/floor-3.jpg'/>" + "</a>" + "<a href='detail.html?floor-4'>" +
          "<img class='round floor item-4' id='floor-4' src='images/floor-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-floor").css("background-color", "black");
          $("#option-floor").css("color", "white");
        })
        //only show bed pillow on type page
        $(document).on("click", "#option-bed", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?bed-1'>" + "<img class='bed square item-1' id='bed-1' src='images/bed-1.jpg'/>" + "</a>" +
          "<a href='detail.html?bed-2'>" + "<img class='bed square item-2' id='bed-2' src='images/bed-2.jpg'/>" + "</a>" + "<a href='detail.html?bed-3'>" +
          "<img class='bed square item-3' id='bed-3' src='images/bed-3.jpg'/>" + "</a>" + "<a href='detail.html?bed-4'>" +
          "<img class='bed square item-4' id='bed-4' src='images/bed-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-bed").css("background-color", "black");
          $("#option-bed").css("color", "white");
        })
        //only show couch pillow on type page
        $(document).on("click", "#option-couch", function(){
          $(".image-block").html("<div class='image-row'>" + "<a href='detail.html?square-1'>" + "<img class='square couch item-1' id='square-1' src='images/square-1.jpg'/>" +
          "</a>" + "<a href='detail.html?square-2'>" + "<img class='square couch item-2' id='square-2' src='images/square-2.jpg'/>" + "</a>" + "<a href='detail.html?square-3'>" +
          "<img class='square couch item-3' id='square-3' src='images/square-3.jpg'/>" + "</a>" + "<a href='detail.html?square-4'>" +
          "<img class='square couch item-4' id='square-4' src='images/square-4.jpg'/>" + "</a>"+"</div>')" + "<div class='image-row'>" + "<a href='detail.html?round-1'>" + "<img class='round couch item-1' id='round-1' src='images/round-1.jpg'/>" +
          "</a>" + "<a href='detail.html?round-2'>" + "<img class='round couch item-2' id='round-2' src='images/round-2.jpg'/>" + "</a>" + "<a href='detail.html?round-3'>" +
          "<img class='round couch item-3' id='round-3' src='images/round-3.jpg'/>" + "</a>" + "<a href='detail.html?round-4'>" +
          "<img class='round couch item-4' id='round-4' src='images/round-4.jpg'/>" + "</a>" + "</div>");
          $("h3").css("background-color","white");
          $("h3").css("color", "black");
          $("#option-couch").css("background-color", "black");
          $("#option-couch").css("color", "white");
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
    if (total == 0){
      $("#total-price").hide();
      $("#shopping-cart-title").hide();
      $("#shopping-list-title").html("Your shopping cart is empty. <a id = 'take-a-look' href = 'types.html'>Take a look</a> at our beautiful collection ❤")
    }
  }
}
//function to calculate the total price of pillows in wishlist to display empty message
function totalPriceWishlist(){
  if(savedPillows === null){
    selectedPillows = [];
  }else{
    var i = 0;
    var total = 0;
    while (i<savedPillows.length){
      var itemTotal = (savedPillows[i].quantity)*(savedPillows[i].price);
      total = total + itemTotal;
      i++;
    }
    if (total == 0){
      $("#wishlist-item-title").hide();
      $("#wishlist-title").html("Your wishlist is empty. <a id = 'take-a-look' href = 'types.html'>Take a look</a> at our beautiful collection ❤");
    }
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
    $("#shopping-cart-logo").parent().append("<div class = 'total-quantity'>" + totalQuantity + "</div>");
  }
}
