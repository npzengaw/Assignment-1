// cart.js

// Function to load the cart and display it
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    // Clear current cart items
    cartItemsContainer.innerHTML = '';
    cartTotalContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                </div>
            `;
            totalPrice += item.price * item.quantity;
        });

        cartTotalContainer.innerHTML = `<h3>Total: $${totalPrice}</h3>`;
    }
}

// Checkout function to clear the cart
function checkout() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    
    // Reload the cart page to reflect the empty cart
    loadCart();
    
    alert('Checkout successful! Your cart has been cleared.');
}

// Event listener for Checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    checkout();
});

// Load the cart items when the page loads
loadCart();
