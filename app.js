const toppings = document.getElementsByClassName('topping');

function mostrarClic(e) {
    console.log(e.target.innerText);
}

for (topping of toppings) {
    topping.addEventListener('click', mostrarClic);
}