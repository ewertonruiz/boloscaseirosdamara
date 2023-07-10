var totalCar = [];
function productsCart(codProduct, name, color, size, value) {
  this.codProduct = codProduct;
  this.name = name;
  this.color = color;
  this.size = size;
  this.value = value;

  var amount = 0;
  var totalValue = 0;

  this.incluir = function(item) {
    document.getElementById("codProduct" + item).innerHTML = this.codProduct;
    document.getElementById("nameProduct" + item).innerHTML = this.name;
    document.getElementById("colorProduct" + item).innerHTML = this.color;
    document.getElementById("sizeProduct" + item).innerHTML = this.size;
    document.getElementById("valueProduct" + item).innerHTML = "R$ " + this.value;
  };

  this.addItem = function(item) {
    var quantidade = document.getElementById("amountProducts" + item);
    amount += 1;
    quantidade.innerHTML = amount;
    document.getElementById("totalProduct" + item).innerHTML = "R$ " + (this.value * amount).toFixed(2);
    totalValue = this.value * amount;
    totalCar[item] = totalValue;
    updateTotal();
  };

  this.removeItem = function(item) {
    var quantidade = document.getElementById("amountProducts" + item);
    if (amount > 0) {
      amount -= 1;
    }
    quantidade.innerHTML = amount;
    document.getElementById("totalProduct" + item).innerHTML = "R$ " + (this.value * amount).toFixed(2);
    totalValue = this.value * amount;
    totalCar[item] = totalValue; 
    updateTotal();
  };
}

function updateTotal() {
  var sum = totalCar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.getElementById("totalCar").innerHTML = "R$ " + sum.toFixed(2);
}

var product0 = new productsCart(112233, "T-shirt0", "White", "M", 59.9);
var product1 = new productsCart(112234, "T-shirt1", "White", "M", 79.9);

product0.incluir(0);
product1.incluir(1);
