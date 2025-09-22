let cart = [];

//agrega al carrito un producto y su precio, suma totales y actualiza el DOM
function addToCart(price, type) {
    // Agregamos el producto como un objeto al carrito
    cart.push({ price: price, type: type });

    // Actualizamos el total sin descuento para la vista principal
    const totalSinDescuento = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-total').textContent = 'U$D' + totalSinDescuento;
    document.getElementById('final-amount').textContent = ''; // Limpiamos el total final al agregar un nuevo producto
}

//calcular el total considerando los productos que tienen 25% de descuento y los que no despues muestra el total en consola.log
function calculateFinalAmount() {
    const discount = 0.25; // 25% de descuento
    let finalTotal = 0;

    // Recorremos el carrito para calcular el total final
    cart.forEach(item => {
        if (item.type === 'guitarra') {
            // Aplicamos descuento si es una guitarra
            finalTotal += item.price * (1 - discount);
        } else {
            // Si no, sumamos el precio normal
            finalTotal += item.price;
        }
    });

    if (cart.length > 0) {
        console.log('Total Final (con descuento aplicado): U$D' + finalTotal.toFixed(2));
    } else {
        console.log('Tu carrito está vacío.');
    }
}

function clearCart() {
    cart = []; // Vacía el array del carrito
    document.getElementById('cart-count').textContent = '0';
    document.getElementById('cart-total').textContent = 'U$D0';
    document.getElementById('final-amount').textContent = '';
    console.log('El carrito ha sido vaciado.');
}

// Muestra en consola el detalle de los productos en el carrito, indicando precios con y sin descuento
function showCartDetails() {
    console.log('--- Detalle de Productos en el Carrito ---');

    if (cart.length === 0) {
        console.log('El carrito está vacío.');
        return; // Termina la función si no hay productos
    }

    const discount = 0.25;

    cart.forEach(item => {
        if (item.type === 'guitarra') {
            const discountedPrice = item.price * (1 - discount);
            console.log(`Producto: Guitarra | Precio Original: U$D${item.price} | Con Descuento: U$D${discountedPrice.toFixed(2)}`);
        } else {
            console.log(`Producto: ${item.type} | Precio: U$D${item.price}`);
        }
    });

    console.log('-----------------------------------------');
}