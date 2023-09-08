function getName(pname) {
    const productName = document.getElementById(pname);
    const productNameString = productName.innerText;
    return productNameString;
}
function getPrice(pprice) {
    const productPrice = document.getElementById(pprice);
    const productPriceString = productPrice.innerText;
    const productPriceFloat = parseFloat(productPriceString);
    return productPriceFloat;
}
const productCard1 = document.getElementById('k-accessory1').addEventListener('click', function () {
    const k1ProductName = getName('k-name-1');
    const k1ProductPrice = getPrice('k-price-1');
    addToCart(k1ProductName, k1ProductPrice);
    total(k1ProductPrice);
})
const productCard2 = document.getElementById('k-accessory2').addEventListener('click', function () {
    const k2ProductName = getName('k-name-2');
    const k2ProductPrice = getPrice('k-price-2');
    addToCart(k2ProductName, k2ProductPrice);
    total(k2ProductPrice);
})
const productCard3 = document.getElementById('k-accessory3').addEventListener('click', function () {
    const k3ProductName = getName('k-name-3');
    const k3ProductPrice = getPrice('k-price-3');
    addToCart(k3ProductName, k3ProductPrice);
    total(k3ProductPrice);
})
// Add to cart
function addToCart(name, price) {
    const product = document.getElementById('cart-items');
    const count = product.childElementCount + 1;
    const p = document.createElement('p');
    p.innerHTML = count + '. ' + name + ' ' + price;
    product.appendChild(p);
    purchaseEnable(price);
}
// Price before discount
function priceTotal(price1) {
    const ptotal = document.getElementById('total-price');
    ptotal.innerText = price1;
}
// Discounted Price
function finalPrice(price4) {
    const ptotal = document.getElementById('after-discount');
    ptotal.innerText = price4;
}
// Total price
var totalPrice = 0;
function total(price) {
    totalPrice += price;
    if (totalPrice >= 200) {
        const cpnbtn = document.getElementById('coupon-btn');
        cpnbtn.classList.remove('btn-disabled');
        cpnbtn.classList.remove('bg-gray-200');
        cpnbtn.classList.add('bg-pink-500');
    }
    priceTotal(totalPrice);
    finalPrice(totalPrice);
}
function discountCalculation() {
    const discountField = document.getElementById('coupon-text');
    const discountFieldValue = discountField.value;
    // Discounted final price
    function finalPrice(price) {
        const ptotal = document.getElementById('after-discount');
        const disc = discount();
        const cal = price - disc;
        ptotal.innerText = cal;
    }
    //Discount price
    function discount() {
        const ptotal = document.getElementById('discount');
        const ptotaldisc = (totalPrice * 20) / 100;
        ptotal.innerText = ptotaldisc;
        return ptotaldisc;
    }
    if (discountFieldValue === 'SELL200') {
        const myDiscount = discount();
        const myPayment = finalPrice(totalPrice);
    }
    else {
        alert("Wrong code!!");
    }
}
// enable Purchase button
function purchaseEnable(price) {
    if (price > 0) {
        const cpnbtn = document.getElementById('purchase-btn');
        cpnbtn.classList.remove('btn-disabled');
        cpnbtn.classList.remove('bg-gray-200');
        cpnbtn.classList.add('bg-pink-500');
    }
    else{
        const cpnbtn = document.getElementById('purchase-btn');
        cpnbtn.classList.remove('bg-pink-500');
        cpnbtn.classList.add('btn-disabled');
        cpnbtn.classList.add('bg-gray-200');
    }
}
//reset all field
function clean() {
    totalPrice = 0;
    purchaseEnable(totalPrice);
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById("total-price").innerText = '00';
    document.getElementById('discount').innerHTML = '00';
    document.getElementById("after-discount").innerHTML = '00';
}