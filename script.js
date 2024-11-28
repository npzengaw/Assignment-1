// script.js

document.addEventListener('DOMContentLoaded', () => {
    const products = {
        official: {
            image: 'offical.png',
            name: 'Official Shirt',
            price: 20,
            sizes: ['S', 'M', 'L', 'XL'],
        },
        event: {
            image: 'shirt2.png',
            name: 'Event Shirt',
            price: 25,
            sizes: ['S', 'M', 'L', 'XL'],
        }
    };

    const viewButtons = document.querySelectorAll('.view-product-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const product = products[productId];

            if (product) {
                localStorage.setItem('selectedProduct', JSON.stringify(product));
                window.location.href = 'product.html';
            }
        });
    });
});
