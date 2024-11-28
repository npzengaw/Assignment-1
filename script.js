// script.js

// Listen for clicks on the "View Product" buttons
const buttons = document.querySelectorAll('.view-product-btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = getProductById(productId);
        localStorage.setItem('selectedProduct', JSON.stringify(product)); // Save selected product to localStorage
        window.location.href = 'product.html'; // Navigate to product details page
    });
});

// Function to get product details by ID
function getProductById(productId) {
    const products = [
        {
            id: 'official',
            name: 'Official Shirt',
            price: 20,
            image: 'offical.png',
            description: 'A high-quality official shirt from Ngee Ann Polytechnic.'
        },
        {
            id: 'event',
            name: 'Event Shirt',
            price: 25,
            image: 'shirt2.png',
            description: 'Exclusive Event Shirt for Ngee Ann Polytechnic events.'
        }
    ];
    
    return products.find(product => product.id === productId);
}
