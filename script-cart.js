var CartSubtotals = document.getElementById("cart-subtotal");
var PaymentTotal = document.getElementById("payment-total");
var temp = 0;
var tr = "foo";
var tb = "foo";
let QuantityButtonCart = document.querySelectorAll(".product-quantity-cart");

for (let i = 0; i < QuantityButtonCart.length; i++) {
    QuantityButtonCart[i].addEventListener("change", (event) => {
        tr = event.target.parentNode.parentNode;
        tr.children[5].textContent = "$".concat((parseInt(tr.children[3].textContent.substring(1))*QuantityButtonCart[i].value).toFixed(2).toString());
        temp = 0;
        for (let j = 0; j < QuantityButtonCart.length; j++) {
            try {
                temp += parseInt(tr.parentNode.children[j].children[5].textContent.substring(1));
            } catch {
                temp += 0;
            }
        }
        CartSubtotals.textContent = "$".concat(temp.toFixed(2).toString());
        PaymentTotal.textContent = "$".concat(temp.toFixed(2).toString());
    });
}

function removeRow(event) {
    tb = event.target.parentNode.parentNode.parentNode;
    temp = parseInt(CartSubtotals.textContent.substring(1)) - parseInt(tb.children[5].textContent.substring(1));
    CartSubtotals.textContent = "$".concat(temp.toFixed(2).toString());
    PaymentTotal.textContent = "$".concat(temp.toFixed(2).toString());
    tb.parentNode.deleteRow(tb.rowIndex - 1);
}