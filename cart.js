// Array of cart items with clothing products
const cartItems = [
    { name: 'Official Shirt', imageUrl: 'official.png', price: 25, quantity: 1 },
    { name: 'Event Shirt', imageUrl: 'shirt2.png', price: 20, quantity: 1 }
];

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

cartItems.forEach(item => {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart-product');

    // Create product image
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.name;

    // Create product info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productName = document.createElement('h3');
    productName.textContent = item.name;
    
    const productQuantity = document.createElement('p');
    productQuantity.textContent = `Quantity: ${item.quantity}`;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${item.price}`;

    // Append product info and image to the product container
    productInfo.appendChild(productName);
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productPrice);
    cartProduct.appendChild(img);
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
    // Here, you could redirect to a payment page or show a checkout form
});
