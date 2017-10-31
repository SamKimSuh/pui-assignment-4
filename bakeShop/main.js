
//ITEM OBJECT CONSTRUCTOR
function Item(amount, flavor1, flavor2, flavor3, numberBox, price) {
    this.amount = amount;
    //this.image = "icons/pumpkin.png";
    this.flavor1 = flavor1;
    this.flavor2 = flavor2;
    this.flavor3 = flavor3;
    this.numberBox = numberBox;
    this.price = price;
}

function addToCart() {
    var amount = document.getElementById("dropdown_amount").value;
    var price = 0;
    //console.log("hello");
    if (amount == "six") {
        price = 10;
    } else if (amount == "dozen") {
        price = 18;
    } else {
        price = 2;
    }

    var flavor1 = "Pumpkin Spice";
    var flavor2 = document.getElementById("dropdown_flavor2").value;
    var flavor3 = document.getElementById("dropdown_flavor3").value;

    //console.log("hi");
    var numberBox = document.getElementById("numberBox");

    var newItem = new Item (amount, flavor1, flavor2, flavor3, numberBox, price);
    //console.log(newItem);

    //retrieve and parse the cart
    var cart = JSON.parse(localStorage.getItem("cartKey")) || [];

    //add our new item to the cart array
    cart.push(newItem);

    //stringify
    cart = JSON.stringify(cart);

    //update local storage
    localStorage.setItem("cartKey", cart);
}

function loadCart() {
    var cart = JSON.parse(localStorage.getItem("cartKey"));
    if (cart === null) {
        cart = [];
    }

    for (i = 0; i<cart.length; i++) {
        var newRow = "<tr><td>";
        newRow += i;
        newRow += "</td></tr>";

        var table = document.getElementById("cart_table");
        var itemObj = cart[i];
        //get data from each item e.g., itemObj.price, itemObj.flavor1
        var amount = itemObj.amount;
        var flavor1 = itemObj.flavor1;
        var flavor2 = itemObj.flavor2;
        var flavor3 = itemObj.flavor3;
        var numberBox = itemObj.numberBox;
        var price = itemObj.price;
        //Run this to see that only the value tags and not their accompanying text need make it through JSON.
        //console.log(itemObj.amount);
        //add item data to your html row
        //table.append(itemObj.amount+", "+itemObj.flavor1+", "+itemObj.flavor2+", "+itemObj.flavor3+", $"+itemObj.price);
        table.append(amount);
        //table.append(itemObj.flavor1);

        //var amount = document.getElementById("amount");
        //var flavor1 = document.getElementById("flavor1");
        //var flavor2 = document.getElementById("flavor2");
        //var flavor3 = document.getElementById("flavor3");
        //var numberBox = document.getElementById("numberBox");
        //var price = document.getElementById("price");

        //add delete button to your html row
        //append html row to html document
        //onclick event for delete button
        //cart.splice(i, 1);
        //localStorage.setItem("cartKey", JSON.stringify(cart));
    }
}








/*
function displayCart(cart) {
    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";

    for (var i in cartArray) {
        output += "<li>"
        +cartArray[i].itemBox
        +" <input class='numberBox' type='number' itemBox='"
        +cartArray[i].itemBox
        +"' value='"+cartArray[i].numberBox+"' >"
        +" x "+cartArray[i].price
        +" = "+cartArray[i].total
        +" <button class='plus-item' itemBox='"
        +cartArray[i].itemBox+"'>+</button>"
        +" <button class='subtract-item' itemBox='"
        +cartArray[i].itemBox+"'>-</button>"
        +" <button class='delete-item' itemBox='"
        +cartArray[i].itemBox+"'>X</button>"
        +"</li>";
    }

    $("#show-cart").html(output);
    $("#count-cart").html( shoppingCart.countCart() );
    $("#total-cart").html( shoppingCart.totalCart() );
}

$("#show-cart").on("click", ".delete-item", function(event){
    var itemBox = $(this).attr("itemBox");
    shoppingCart.removeItemFromCartAll(itemBox);
    displayCart();
});

$("#show-cart").on("click", ".subtract-item", function(event){
    var itemBox = $(this).attr("itemBox");
    shoppingCart.removeItemFromCart(itemBox);
    displayCart();
});

$("#show-cart").on("click", ".plus-item", function(event){
    var itemBox = $(this).attr("itemBox");
    shoppingCart.addItemToCart(itemBox, 0, 1);
    displayCart();
});

$("#show-cart").on("change", ".numberBox", function(event){
    var itemBox = $(this).attr("itemBox");
    var numberBox = Number($(this).val());
    shoppingCart.setCountForItem(itemBox, numberBox);
    displayCart();
});


displayCart();*/