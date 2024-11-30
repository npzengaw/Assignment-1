
// Load product from localStorage
const product = JSON.parse(localStorage.getItem('selectedProduct'));

// Check if product exists and update page elements
if (product) {
    document.getElementById('product-image').src = product.image;  // Set image src
    document.getElementById('product-name').textContent = product.name;  // Set name
    document.getElementById('product-description').textContent = product.description;  // Set description
    document.getElementById('product-price').textContent = `Price: $${product.price}`;  // Set price
}


// Size selection functionality
let selectedSize = null;
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const selectionMessage = document.querySelector('.selection-message');

sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove selected class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to clicked button
        this.classList.add('selected');
        
        // Store selected size
        selectedSize = this.textContent;
        
        // Update selection message
        selectionMessage.textContent = `Size ${selectedSize} selected`;
    });
});

// Add to Cart functionality
addToCartBtn.addEventListener('click', function() {
    if (!selectedSize) {
        selectionMessage.textContent = 'Please select a size first.';
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product with same ID and size already exists
    const existingProductIndex = cart.findIndex(
        item => item.id === product.id && item.size === selectedSize
    );

    if (existingProductIndex > -1) {
        // Increment quantity if product with same ID and size exists
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product with selected size
        cart.push({ 
            ...product, 
            quantity: 1, 
            size: selectedSize 
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Provide user feedback
    selectionMessage.textContent = `${product.name} (${selectedSize}) added to cart`;
});