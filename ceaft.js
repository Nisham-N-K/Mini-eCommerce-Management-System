document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = parseInt(product.querySelector('p').innerText.substring(1));
            const li = document.createElement('li');
            li.innerText = `${productName} - $${productPrice}`;
            cartItems.appendChild(li);
            total += productPrice;
            cartTotal.innerText = total;
            cartItems.classList.add('show');
        });
    });

    const checkoutButton = document.getElementById('order-submit');
    checkoutButton.addEventListener('click', function() {
        if (total === 0) {
            alert('Your cart is empty. Please add some products before checkout.');
        } else {
            alert('Order placed successfully!')
            alert(`Your Tottal Bill: $${total}`);
            // Implement your checkout logic here
        }
    });
});