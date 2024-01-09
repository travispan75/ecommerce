var MainPot = document.getElementById("product-details-pot");
var SmallImg = document.getElementsByClassName("small-image");
var price = document.getElementById("single-product-details1-left-price");
var price_int = parseInt(document.getElementById("single-product-details1-left-price").innerText.substring(1));
const original_price_int = price_int;

SmallImg[0].onclick = function() {
    if (MainPot.src == SmallImg[0].src) {
        MainPot.src = "images/1280px-HD_transparent_picture.png";
    } else {
        MainPot.src = SmallImg[0].src;
    }
}
SmallImg[1].onclick = function() {
    if (MainPot.src == SmallImg[1].src) {
        MainPot.src = "images/1280px-HD_transparent_picture.png";
    } else {
        MainPot.src = SmallImg[1].src;
    }
}
SmallImg[2].onclick = function() {
    if (MainPot.src == SmallImg[2].src) {
        MainPot.src = "images/1280px-HD_transparent_picture.png";
    } else {
        MainPot.src = SmallImg[2].src;
    }
}
SmallImg[3].onclick = function() {
    if (MainPot.src == SmallImg[3].src) {
        MainPot.src = "images/1280px-HD_transparent_picture.png";
    } else {
        MainPot.src = SmallImg[3].src;
    }
}

let QuantityButton = document.getElementById("product-quantity");
let previous = QuantityButton.value;
QuantityButton.addEventListener("change", () => {
    if (QuantityButton.value > previous) {
        price_int += original_price_int*(QuantityButton.value - previous);
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    } else {
        price_int -= original_price_int*(previous - QuantityButton.value);
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    }
    previous = QuantityButton.value;
});

let SoilEnhancerButton = document.getElementById("soil-enhancer");
SoilEnhancerButton.addEventListener("change", () => {
    if (SoilEnhancerButton.checked ) {
        price_int += 14.25;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    } else {
        price_int -= 14.25;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    }
});

let ProbioticButton = document.getElementById("probiotic");
ProbioticButton.addEventListener("change", () => {
    if (ProbioticButton.checked ) {
        price_int += 11.4;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    } else {
        price_int -= 11.4;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    }
});

let Fertilizer3Button = document.getElementById("fertilizer-3");
Fertilizer3Button.addEventListener("change", () => {
    if (Fertilizer3Button.checked ) {
        price_int += 13.3;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    } else {
        price_int -= 13.3;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    }
});

let Fertilizer75Button = document.getElementById("fertilizer-7.5");
Fertilizer75Button.addEventListener("change", () => {
    if (Fertilizer75Button.checked ) {
        price_int += 23.75;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    } else {
        price_int -= 23.75;
        price.innerText = "$".concat(price_int.toFixed(2).toString());
    }
});

function confirm() {
  document.getElementById("confirmation-icon").src = "images/icons/tick (1).png";
  document.getElementById("confirmation-text").innerText = "Sent! We appreciate the feedback.";
}