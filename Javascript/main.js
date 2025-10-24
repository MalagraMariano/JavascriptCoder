let cart = [];
//constante para imagen placeholder
const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMjFUMTE6Mzk6NDctMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMjFUMTE6Mzk6NDctMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTIxVDExOjM5OjQ3LTAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5YTFhNjM5LWU5ZTAtNDM0OC04MDQ1LThlZDY2ZWE4ODNjNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk0ZDVhZTQ3LTM5ZmUtZDA0Ny05ZmE0LTQ5MGYzZGJlOWM5MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjk0ZDVhZTQ3LTM5ZmUtZDA0Ny05ZmE0LTQ5MGYzZGJlOWM5MCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0ZDVhZTQ3LTM5ZmUtZDA0Ny05ZmE0LTQ5MGYzZGJlOWM5MCIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0yMVQxMTozOTo0Ny0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yiRJRwAABs5JREFUeJzt3U1y2zgQBtAW5QNkl1NlkyPlKJnbZJ9TJaeZ48QryytLliyrswAp0YL4o9Bo4L03M7U1KQUe2g2QEgm+vL6+CkJ1fwgBEIAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCBGAEAEIEYAQAQgRgBABCPkfNhFCWUYyGHYAAAAASUVORK5CYII=';
let currentPage = 1;
const itemsPerPage = 10;

// Inicialiaza el catalogo en load de la pagina
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    loadCartFromStorage();

    // Agrega event listeners a los checkboxes de filtro
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCatalog);
    });
});

//agrega al carrito un producto y su precio, suma totales y actualiza el DOM
function addToCart(price, type) {
    // Agregamos el producto como un objeto al carrito
    cart.push({ price: price, type: type });

    // Actualizamos el total sin descuento para la vista principal
    const totalSinDescuento = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-total').textContent = 'U$D' + totalSinDescuento;
    document.getElementById('final-amount').textContent = ''; // Limpiamos el total final al agregar un nuevo producto
    saveCartToStorage();
}

function processOrder() {
    if (cart.length === 0) {
        console.log('El carrito está vacío. Agregue productos antes de comprar.');
        return;
    }

    // Calcula el total con descuentos aplicados
    const discount = 0.25;
    let finalTotal = 0;

    cart.forEach(item => {
        if (item.type === 'guitarra') {
            finalTotal += item.price * (1 - discount);
        } else {
            finalTotal += item.price;
        }
    });

    console.log('--- Resumen de la Compra ---');
    console.log(`Total de productos: ${cart.length}`);
    console.log(`Monto final: U$D${finalTotal.toFixed(2)}`);
    console.log('¡Gracias por su compra!');

    // Limpia el carrito después de la compra
    clearCart();
}

function updateCartDisplay() {
    const totalSinDescuento = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-total').textContent = 'U$D' + totalSinDescuento;
}

function clearCart() {
    cart = []; // Vacía el array del carrito
    document.getElementById('cart-count').textContent = '0';
    document.getElementById('cart-total').textContent = 'U$D0';
    document.getElementById('final-amount').textContent = '';
    console.log('El carrito ha sido vaciado.');

    // Elimina el carrito del localStorage
    localStorage.removeItem('musicShopCart');
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

//Clase de Catalogo para cada item
class CatalogItem {
    constructor(id, name, price, type, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.imageUrl = imageUrl;
    }

    createProductElement() {
        const productDiv = document.createElement('div');
        productDiv.className = 'producto';
        productDiv.setAttribute('data-aos', 'zoom-in');

        productDiv.innerHTML = `
        <img 
            src="${this.imageUrl}" 
            alt="${this.name}" 
            onerror="this.onerror=null; this.src='${PLACEHOLDER_IMAGE}'; this.alt='No existe Imagen'; this.classList.add('placeholder-image');"
        >
        <div class="info">
            <h3>${this.name}</h3>
            <p>U$D${this.price}</p>
            <button class="add-to-cart" data-id="${this.id}">Agregar</button>
        </div>
    `;

        const button = productDiv.querySelector('.add-to-cart');
        button.addEventListener('click', () => addToCart(this.price, this.type));

        return productDiv;
    }
}

// datos del catalogo
const catalogItems = [
    new CatalogItem(
        1,
        'Guitarra Gibson Les Pauls',
        2250,
        'guitarra',
        'Images/shop/gibsonlespauls.jpg'
    ),
    new CatalogItem(
        2,
        'Pedal BOSS DS-1',
        80,
        'pedal de guitarra',
        'Images/shop/pedalbossds1.jpeg'
    ),
    new CatalogItem(
        3,
        'Bajo Ibanez',
        800,
        'bajo',
        'Images/shop/bajoIbanez.webp'
    ),
    new CatalogItem(
        4,
        'Guitarra Fender Stratocaster',
        1899,
        'guitarra',
        '../Images/shop/stratocaster.jpg'
    ),
    new CatalogItem(
        5,
        'Pedal Boss BD-2 Blues Driver',
        129,
        'pedal de guitarra',
        '../Images/shop/bluesdriver.jpg'
    ),
    new CatalogItem(
        6,
        'Bajo Fender Precision Bass',
        1499,
        'bajo',
        '../Images/shop/precisionbass.jpg'
    ),
    new CatalogItem(
        7,
        'Guitarra PRS Custom 24',
        2799,
        'guitarra',
        '../Images/shop/prscustom.jpg'
    ),
    new CatalogItem(
        8,
        'Pedal MXR Bass DI+',
        169,
        'pedal de bajo',
        '../Images/shop/mxrbass.jpg'
    ),
    new CatalogItem(
        9,
        'Bajo Music Man StingRay',
        2199,
        'bajo',
        '../Images/shop/stingray.jpg'
    ),
    new CatalogItem(
        10,
        'Guitarra Ibanez RG550',
        999,
        'guitarra',
        '../Images/shop/ibanezrg.jpg'
    ),
    new CatalogItem(
        11,
        'Pedal EHX Big Muff Pi',
        89,
        'pedal de guitarra',
        '../Images/shop/bigmuff.jpg'
    ),
    new CatalogItem(
        12,
        'Bajo Yamaha TRBX504',
        699,
        'bajo',
        '../Images/shop/yamahabass.jpg'
    )
];
// Función para renderizar el catalogo en el dom
function renderCatalog(items = catalogItems) {
    const catalogContainer = document.querySelector('.catalogo');

    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';

    // Calculo la paginación
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Borro el contenido previo
    catalogContainer.innerHTML = '';

    // Renderizo los items de la pagina actual
    items.slice(startIndex, endIndex).forEach(item => {
        const productElement = item.createProductElement();
        catalogContainer.appendChild(productElement);
    });

    if (items.length > 0) {
        // Create pagination buttons
        paginationContainer.innerHTML = `
            <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
                Anterior
            </button>
            <button class="active">${currentPage} de ${totalPages}</button>
            <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
                Siguiente
            </button>
        `;

        // Agregar el paginado
        catalogContainer.parentNode.insertBefore(paginationContainer, catalogContainer.nextSibling);
    }
}

// cambio de pagina 

function changePage(newPage) {
    currentPage = newPage;
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const selectedFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    let itemsToShow = catalogItems;

    if (selectedFilters.length > 0) {
        itemsToShow = catalogItems.filter(item =>
            selectedFilters.includes(item.type)
        );
    }

    renderCatalog(itemsToShow);
}


// Función para filtrar el catalogo basado en los checkboxes seleccionados
function filterCatalog() {
    currentPage = 1; // Resetear a la primera pagina al filtrar
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const selectedFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    let itemsToShow = catalogItems;

    if (selectedFilters.length > 0) {
        itemsToShow = catalogItems.filter(item =>
            selectedFilters.includes(item.type)
        );
    }

    renderCatalog(itemsToShow);
}


// Guardar y cargar el carrito desde localStorage
function saveCartToStorage() {
    localStorage.setItem('musicShopCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('musicShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}