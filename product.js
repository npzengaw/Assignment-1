const addToCartBtn = document.getElementById('add-to-cart-btn');
const selectionMessage = document.querySelector('.selection-message');
const sizeButtons = document.querySelectorAll('.size-btn');
let selectedSize = null;

// Highlight the selected size
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedSize = button.textContent;
        selectionMessage.textContent = `Selected size: ${selectedSize}`;
    });
});

function addToCart(productId) {
    if (!selectedSize) {
        selectionMessage.textContent = 'Please select a size before adding to the cart.';
        selectionMessage.style.color = 'red';
        return;
    }

    const products = {
        'official-shirt': { name: 'Official Shirt', price: 20, size: selectedSize }
    };

    const product = products[productId];
    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} (${product.size}) has been added to your cart.`);
    } else {
        alert('Product not found!');
    }
}
