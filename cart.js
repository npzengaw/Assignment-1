// Mock data for products (you can expand this with more details if needed)
const products = [
    { id: 1, name: 'Official Shirt', price: 20 },
    { id: 2, name: 'Event Shirt', price: 25 }
];

// Function to add product to the cart (simulated by localStorage)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Function to update the cart UI and total price
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    // Add items to the cart display
    let total = 0;
    cart.forEach(item => {
        const cartItemElem = document.createElement('div');
        cartItemElem.classList.add('cart-item');
        cartItemElem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItemElem);
        total += item.price;
    });

    // Update total price
    totalPriceElem.textContent = total;
}

// Function to handle checkout (simple mock-up)
function handleCheckout() {
    alert('Checkout successful! (This is just a mock checkout.)');
    localStorage.removeItem('cart'); // Empty the cart after checkout
    updateCart(); // Update cart to reflect empty state
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', handleCheckout);

// Run the cart update when the page loads
updateCart();
