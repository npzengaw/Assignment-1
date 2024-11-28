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
        selectionMessage.style.color = '';
        toggleAddToCartButton();
    });
});

function toggleAddToCartButton() {
    addToCartBtn.disabled = !selectedSize;
}

// Initially disable button
toggleAddToCartButton();

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
        try {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(
                item => item.name === product.name && item.size === selectedSize
            );

            if (existingProductIndex !== -1) {
                selectionMessage.textContent = 'This product is already in your cart.';
                selectionMessage.style.color = 'orange';
                return;
            }

            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            selectionMessage.textContent = `${product.name} (${product.size}) was added to your cart!`;
            selectionMessage.style.color = 'green';
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            alert('There was an error adding the product to your cart.');
        }
    } else {
        alert('Product not found!');
    }
}
