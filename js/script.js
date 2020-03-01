// DATA COLLECTION FROM THE ORDER FORM
var pizzaSize, crust, toppings, subTotalPrice

function Order(pizzaSize, crust, toppings, subTotalPrice){

  this.size = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.subTotalPrice =subTotalPrice;
}

/* Order Online Button */

$(document).ready(function(event){
    $("#orderNow").click(function(){
      $("#orderForm").show();
    });
  });
  
  /* add to cart button */
$(document).ready(function(event){
    $("#addToCart").click(function(){
      var pizzaSize = $("#pizzaSizeSelected").val();
      var crust = $("#pizzaCrustSelected").val();
      var toppings = $("#toppingSelected").val();
      var delivery = $("#deliveryOptionSelected").val();

      if((pizzaSize == "0") || (crust == "0") || (toppings == "0") || delivery == "0"){
        alert("Please fill in all required fields!");
      } else {
       $("#itemsCart").show();
     };

     /* alerting delivery option */
var deliveryCost=""
if(delivery == "2"){
  var location = prompt("Where would you want your delivery done?")
  var deliveryCost = parseInt(150);
alert("Confirmed, Your order shall be delivered at" + " " +location)
} else {
  var deliveryCost = parseInt(0);
};

var pizzaPrice = "";
switch(pizzaSize){
  case "1":
  pizzaPrice = 790;
    break;
  case "2":
  pizzaPrice = 690;
    break;
  case "3":
  pizzaPrice = 300;
    break;
  default:
    console.log("No price");
}

var crustPrice = "";
switch(crust){
  case "1":
  crustPrice =100;
   break;
  case "2":
  crustPrice = 150;
   break;
  case "3":
  crustPrice = 200;
    break;
  default:
    console.log("No price");
  }

var toppingPrice = "";
switch(toppings){
  case "1":
  toppingPrice = 0;
    break;
  case "2":
  toppingPrice = 99;
    break;
  case "3":
  toppingPrice = 149;
    break;
  case "4":
  toppingPrice = 199;
    break;
  default:
    console.log("No price");
};

var deliveryPrice = "";
switch (delivery) {
  case "1":
  deliveryPrice = 0;
    break;
  case "2":
  deliveryPrice = 100;
    break;
  default:
    console.log("No price");

};
var subTotalPrice = parseInt(pizzaPrice) + parseInt(crustPrice) + parseInt(toppingPrice)
console.log(subTotalPrice)
let checkOutTotal =0;
checkOutTotal = checkOutTotal + subTotalPrice +deliveryCost;

  $("#pizSize").html($("#pizzaSizeSelected").find('option:selected').text());
  $("#pizCrust").html($("#pizzaCrustSelected").find('option:selected').text());
  $("#pizTop").html($("#toppingSelected").find('option:selected').text());
  $("#subTPrice").html(subTotalPrice);

  $('#pizzaSizeSelected').prop('selectedIndex',0);
   $('#pizzaCrustSelected').prop('selectedIndex',0);
    $('#toppingSelected').prop('selectedIndex',0);
     $('#deliveryOptionSelected').prop('selectedIndex',0);
  // Proceed to Checkout Button
  $(document).ready(function(){
    $("#checkOut").click(function(){
      console.log(("Your delivery fee is" + " Ksh "+deliveryCost));
         $("#deliveryCost").append("Your delivery fee is" + " Ksh "+deliveryCost);
        console.log("Total Amount Payable =" +checkOutTotal);
          $("#totalCost").append("Total fee Payable = Ksh" +checkOutTotal);
     var client = prompt("Enter Username?");
     var Contact = prompt("User contact needed");
  alert("Thank you" + " " +client+"," + " "+ "Enjoy yourself")
event.preventDefault();
   });
  });

