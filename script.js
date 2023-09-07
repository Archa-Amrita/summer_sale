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
function addToCart(name, price) {
    const product = document.getElementById('cart-items');
    const count = product.childElementCount + 1;
    const p = document.createElement('p');
    p.innerHTML = count + '. ' + name + ' ' + price;
    product.appendChild(p);
}
// Price before discount
function priceTotal(price1) {
    const ptotal = document.getElementById('total-price');
    ptotal.innerText = price1;
}
// Discount
function discout(price2) {
    const ptotal = document.getElementById('discount');
    const ptotaldisc = (price2 * 20) / 100;
    ptotal.innerText = ptotaldisc;
    return ptotaldisc;
}
// Discounted Price
function finalPrice(price4) {
    const ptotal = document.getElementById('after-discount');
    const disc = discout(price4);
    const cal = price4 - disc;
    ptotal.innerText = cal;
}
var totalPrice = 0;
function total(price) {
    totalPrice += price;
    console.log(totalPrice);
    priceTotal(totalPrice);
    finalPrice(totalPrice);
}
