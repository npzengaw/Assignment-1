// Add Event Listeners for "View Product" buttons
const viewButtons = document.querySelectorAll('.view-product-btn');
viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'product.html'; // Directs to product detail page
    });
});

// Add Event Listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(button.getAttribute('data-product-id'));
        addToCart(productId);
        alert('Product added to cart!');
    });
});
