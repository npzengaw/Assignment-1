// product.js

// Load product from localStorage
const product = JSON.parse(localStorage.getItem('selectedProduct'));

// Update product details on the page
if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Price: $${product.price}`;
}

// Add to Cart functionality
document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
});
