//Pack Variables
var pack = "3 Buns";
var quant = "1 Box";

//Flavours Variables
var count = 0;
var f1 = false;
var f2 = false;
var f3 = false;
var f4 = false;
var f5 = false;
var f6 = false;
var f7 = false;
var f8 = false;
var f9 = false;
var f10 = false;
var f11 = false;
var f12 = false;
var f13 = false;
var f14 = false;
var flavours = ["Original "];

function Order(pack, quant, price, flavours) {
  this.pack = pack;
  this.quant = quant;
  this.price = price;
  this.flavours = flavours;
}

$(document).ready(function() {
    $("#cartNav").text("Cart" + " ("  + localStorage.length + ")");

    var order = new Order; 
    order.pack = 3;
    order.quant = 1;
    order.price = 5;
    order.flavours = "Original";


    // Add to Cart Button
    $("#addItem").click(function(){

        var newOrder = new Order(order.pack, order.quant, order.price, order.flavours);

        $("#addItem").addClass("chosen");
        var jsonOrder = JSON.stringify(newOrder);

        localStorage.setItem("order" + localStorage.length, jsonOrder);

        JSON.parse(jsonOrder);

        $("#cartNav").text("Cart" + " ("  + localStorage.length + ")");

        // console.log(localStorage.length);


    });


    // Pack Section
    $("#p0").click(function(){
        var title =  $("#p0").text();
        $("#order-pack").text(title);
        pack = title;
        order.pack = 3;
        order.price = 3;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#bunImg").attr("src","Images/order/3Buns.png");

        $("#p0").addClass("chosen");
        $("#p1").removeClass("chosen");
        $("#p2").removeClass("chosen");
    });

    $("#p1").click(function(){
        var title =  $("#p1").text();
        $("#order-pack").text(title);
        pack = title;
        order.pack = 6;
        order.price = 6;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#bunImg").attr("src","Images/order/6Buns.png");


        $("#p1").addClass("chosen");
        $("#p0").removeClass("chosen");
        $("#p2").removeClass("chosen");
    });

    $("#p2").click(function(){
        var title =  $("#p2").text();
        $("#order-pack").text(title);
        pack = title;
        order.pack = 12;
        order.price = 12;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#bunImg").attr("src","Images/order/12Buns.png");

        $("#p2").addClass("chosen");
        $("#p1").removeClass("chosen");
        $("#p0").removeClass("chosen");
    });

        // quantity Section
    $("#q0").click(function(){
        var title =  $("#q0").text();
        $("#order-quant").text(title);
        quant = title;
        order.quant = 1;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#q0").addClass("chosen");
        $("#q1").removeClass("chosen");
        $("#q2").removeClass("chosen");
        $("#q3").removeClass("chosen");
    });

    $("#q1").click(function(){
        var title =  $("#q1").text();
        $("#order-quant").text(title);
        quant = title;
        order.quant = 2;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#q1").addClass("chosen");
        $("#q0").removeClass("chosen");
        $("#q2").removeClass("chosen");
        $("#q3").removeClass("chosen");
    });

    $("#q2").click(function(){
        var title =  $("#q2").text();
        $("#order-quant").text(title);
        quant = title;
        order.quant = 3;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#q2").addClass("chosen");
        $("#q1").removeClass("chosen");
        $("#q0").removeClass("chosen");
        $("#q3").removeClass("chosen");
    });

    $("#q3").click(function(){
        var title =  $("#q3").text();
        $("#order-quant").text(title);
        quant = title;
        order.quant = 4;

        var cost = order.pack * order.quant;
        $("#cost").text("Total: $" + cost + ".00");

        $("#q3").addClass("chosen");
        $("#q1").removeClass("chosen");
        $("#q0").removeClass("chosen");
        $("#q2").removeClass("chosen");
    });

    

    // Flavour selection
    // Original is first (f0), it cannot be unselected, which is why it does not have a function

    //All flavours are based off this code
    $("#f1").click(function(){
        var title =  $("#f1").text();

        // the boolean f1 indicates whether the flavour has already been selected
        // unselecting the flavour
        if (f1){
            f1 = false;
            $("#f1").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        
        // selecting the flavour
        if (f1 == false){
            if (count <2) { // have two additional flavours already been selected
                f1 = true;
                count +=1;
                $("#f1").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }

    });

    $("#f2").click(function(){
        var title =  $("#f2").text();
        if (f2){
            f2 = false;
            $("#f2").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f2 == false){
            if (count <2) {
                f2 = true;
                count +=1;
                $("#f2").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f3").click(function(){
        var title =  $("#f3").text();
        if (f3){
            f3 = false;
            $("#f3").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f3 == false){
            if (count <2) {
                f3 = true;
                count +=1;
                $("#f3").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f4").click(function(){
        var title =  $("#f4").text();
        if (f4){
            f4 = false;
            $("#f4").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f4 == false){
            if (count <2) {
                f4 = true;
                count +=1;
                $("#f4").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f5").click(function(){
        var title =  $("#f5").text();
        if (f5){
            f5 = false;
            $("#f5").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f5 == false){
            if (count <2) {
                f5 = true;
                count +=1;
                $("#f5").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f6").click(function(){
        var title =  $("#f6").text();
        if (f6){
            f6 = false;
            $("#f6").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f6 == false){
            if (count <2) {
                f6 = true;
                count +=1;
                $("#f6").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f7").click(function(){
        var title =  $("#f7").text();
        if (f7){
            f7 = false;
            $("#f7").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f7 == false){
            if (count <2) {
                f7 = true;
                count +=1;
                $("#f7").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f8").click(function(){
        var title =  $("#f8").text();
        if (f8){
            f8 = false;
            $("#f8").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f8 == false){
            if (count <2) {
                f8 = true;
                count +=1;
                $("#f8").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f9").click(function(){
        var title =  $("#f9").text();
        if (f9){
            f9 = false;
            $("#f9").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f9 == false){
            if (count <2) {
                f9 = true;
                count +=1;
                $("#f9").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f10").click(function(){
        var title =  $("#f10").text();
        if (f10){
            f10 = false;
            $("#f10").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f10 == false){
            if (count <2) {
                f10 = true;
                count +=1;
                $("#f10").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f11").click(function(){
        var title =  $("#f11").text();
        if (f11){
            f11 = false;
            $("#f11").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f11 == false){
            if (count <2) {
                f11 = true;
                count +=1;
                $("#f11").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f12").click(function(){
        var tit1le =  $("#f2").text();
        if (f12){
            f12 = false;
            $("#f12").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f12 == false){
            if (count <2) {
                f12 = true;
                count +=1;
                $("#f12").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f13").click(function(){
        var title =  $("#f13").text();
        if (f13){
            f13 = false;
            $("#f13").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f13 == false){
            if (count <2) {
                f13 = true;
                count +=1;
                $("#f13").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });

    $("#f14").click(function(){
        var title =  $("#f14").text();
        if (f14){
            f14 = false;
            $("#f14").removeClass("chosen");
            flavours.pop(" + " + title)
            $("#order-flavour").empty();
            for (var i = 0; i< flavours.length; i++){
                console.log(flavours[i])
                $("#order-flavour").append(flavours[i]);
            }
            order.flavours = flavours;
            count -=1; 
            return;           
        }
        if (f14 == false){
            if (count <2) {
                f14 = true;
                count +=1;
                $("#f14").addClass("chosen");
                flavours.push(" + " + title);
                $("#order-flavour").empty();
                for (var i = 0; i< flavours.length; i++){
                    console.log(flavours[i])
                    $("#order-flavour").append(flavours[i]);
                }
            }
            order.flavours = flavours;
            console.log(flavours.length);
            return;
        }
    });


});