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
            image: 'official.jpg',  // Ensure the image extension matches the actual file
            description: 'A high-quality official shirt from Ngee Ann Polytechnic.'
        },
        {
            id: 'event',
            name: 'Event Shirt',
            price: 25,
            image: 'shirt1.png',  // Ensure the image extension matches the actual file
            description: 'Exclusive Event Shirt for Ngee Ann Polytechnic events.'
        },
        {
            id: 'green',
            name: '3 Fold (Ngee Ann, Ngee Ann, Ngee Ann)',
            price: 25,
            image: 'green.png',  // Adjust image path if needed
            description: 'A unique 3-fold shirt with Ngee Ann Polytechnic branding.'
        },
        {
            id: 'red',
            name: 'Red Shirt',
            price: 25,
            image: 'red.png',  // Adjust image path if needed
            description: 'A red shirt with the Ngee Ann Polytechnic logo.'
        }
    ];
    
    return products.find(product => product.id === productId);
}
