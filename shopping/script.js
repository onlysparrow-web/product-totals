var price1 = document.getElementById("mouseprice");
var price2 = document.getElementById("keyboardprice");
var price3 = document.getElementById("cpuprice");
var price4 = document.getElementById("monitorprice");
var totalAmount = document.getElementById("totalAmount");

var total1 = document.getElementById("finalprice1");
var total2 = document.getElementById("finalprice2");
var total3 = document.getElementById("finalprice3");
var total4 = document.getElementById("finalprice4");

var quantities1 = document.getElementById("qty1");
var quantities2 = document.getElementById("qty2");
var quantities3 = document.getElementById("qty3");
var quantities4 = document.getElementById("qty4");

quantities1.onchange = handlechange(price1, total1);
quantities2.onchange = handlechange(price2, total2);
quantities3.onchange = handlechange(price3, total3);
quantities4.onchange = handlechange(price4, total4);

function handlechange(priceElement, totalElement) {
  return function (e) {
    // console.log(e.target.value);
    // console.log(priceElement.innerHTML);
    totalElement.innerHTML = e.target.value * priceElement.innerHTML;
    addTotal();
  };
}
// var alltr = document.querySelectorAll("tr");
// for (let i = 1; i < alltr.length; i++) {
//   var c=alltr[i].children;
//   c[1].onchange=handlechange(c[2],c[3])
// }
function addTotal() {
  totalAmount.innerHTML =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total3.innerHTML) +
    parseInt(total4.innerHTML);
}
