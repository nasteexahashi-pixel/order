let cart = [];
let total = 0;

function addToCart(food, price) {
    cart.push({ name: food, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price;
        cartList.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function placeOrder() {
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let message = document.getElementById("message");

    if (name === "" || address === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    if (cart.length === 0) {
        message.style.color = "red";
        message.textContent = "Your cart is empty!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Order placed successfully! Thank you " + name;

    cart = [];
    total = 0;
    updateCart();
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}