// Load cart items from localStorage (to keep data consistent)
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Function to calculate and display the total price
function updateCartTotal() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Render cart items
cartItems.forEach(item => {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart-product');

    // Remove the image section
    // const img = document.createElement('img');
    // img.src = item.imageUrl;
    // img.alt = item.name;
    // cartProduct.appendChild(img);  // No need to append the image

    // Create product info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productName = document.createElement('h3');
    productName.textContent = item.name;
    
    const productQuantity = document.createElement('p');
    productQuantity.textContent = `Quantity: ${item.quantity}`;
    
    const productSize = document.createElement('p');
    productSize.textContent = `Size: ${item.size}`;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${item.price}`;

    // Append product info to the product container
    productInfo.appendChild(productName);
    productInfo.appendChild(productSize);  // Added size info here
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productPrice);
    cartProduct.appendChild(productInfo);

    // Add the cart product to the cart container
    cartContainer.appendChild(cartProduct);
});

// Update the total price
updateCartTotal();

// Add an event listener to the checkout button
const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to checkout!');
});
