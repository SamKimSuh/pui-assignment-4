var cartOrders = [];
var deleteButtons;
var totalC = 0;
var totalP = 0;
var totalQ = 0;


$(document).ready(function() {
    cartOrders = [];
    function populateArray(){

        for (var i = 0; i<=localStorage.length; i++){
            var current = localStorage.getItem("order"+ String(i));
            var parse = JSON.parse(current);

            if (parse != null){
                cartOrders.push(parse);
            }
            console.log("order"+ String(i));
        }
    }

    function populateOrders(){
        for (var i = 0; i<cartOrders.length;i++){

            cartOrders[i].price = cartOrders[i].price * cartOrders[i].quant

            totalC += cartOrders[i].price
            totalP += cartOrders[i].pack;
            totalQ += cartOrders[i].quant;

            var item = "<tr class='order' id='row"+i+"'><td><button class='delete' id='delete"+i+"'>X</button>"+ cartOrders[i].flavours + "</td><td>" + cartOrders[i].pack + "</td><td>" + cartOrders[i].quant + "</td><td>$" + cartOrders[i].price + ".00</td></tr>";
            $("table tbody").append(item);

        }
        var final = "<tr id='finalTotal'><th><H3>Total</H3></th><th>" + totalP + "</th><th>" + totalQ + "</th><th>$" + totalC + ".00</th></tr>";
        $("table tbody").append(final);
    }


    function checkDelete(){
        deleteButtons = $('.delete');
        $(deleteButtons).click(function(){
            var that = $(this);
            deleteItem(that);
            console.log("checkDelete");
        });
    }


    function deleteItem(clickedItem){
        var itemId = $(clickedItem).attr('id');
        var itemIndex = itemId.substr(6);
        var intIndex = parseInt(itemIndex);
        var deleteRow = "#row" + itemIndex;

        populateArray();
        
        totalC -= cartOrders[intIndex].price;
        totalP -= cartOrders[intIndex].pack;
        totalQ -= cartOrders[intIndex].quant;



        localStorage.removeItem("order" + itemIndex);
        cartOrders.pop(intIndex);

        $(deleteRow).remove();
        $("#finalTotal").remove();

        console.log('deleteItem');

        //adjust the surrounding information to match the change
        
        var final = "<tr id='finalTotal'><th><H3>Total</H3></th><th>" + totalP + "</th><th>" + totalQ + "</th><th>$" + totalC + ".00</th></tr>";
        $("table tbody").append(final);

        $("#cartNav").text("Cart" + " ("  + localStorage.length + ")");

    }

    $("#newOrder").click(function(){
       checkDelete();  
    });

  
    populateArray();
    populateOrders();
    checkDelete();


    $("#cartNav").text("Cart" + " ("  + localStorage.length + ")");
});