const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const products = {
        'official-shirt': { name: 'Official Shirt', price: 20 },
        'event-shirt': { name: 'Event Shirt', price: 25 }
    };

    const product = products[productId];
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    } else {
        alert('Product not found!');
    }
}
