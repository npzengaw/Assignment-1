document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(div);
            total += item.price;
        });

        cartTotal.textContent = `Total: $${total}`;
        checkoutBtn.disabled = false;
    } else {
        cartItemsContainer.textContent = 'Your cart is empty.';
    }
});

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}
