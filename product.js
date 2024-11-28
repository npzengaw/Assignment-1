// product.js

// Retrieve product from localStorage
const product = JSON.parse(localStorage.getItem('selectedProduct'));

if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = `This is a high-quality ${product.name.toLowerCase()} from Ngee Ann Polytechnic.`;
    document.getElementById('product-price').textContent = `Price: $${product.price}`;

    // Set up size buttons for selection
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
} else {
    alert("Product not found.");
}

