// Definir una lista de productos con nombre y precio
const productos = [
    { nombre: 'Play 5', precio: 100000 },
    { nombre: 'Mouse inalambrico', precio: 20000 },
    { nombre: 'Teclado razer', precio: 39000 },
    { nombre: 'Mousepad', precio: 4000 },
    { nombre: 'Cargador iphone', precio: 1900 }
];

function filtrarProductos() {
    // Obtener los precios ingresados por el usuario
    const precioMin = document.getElementById('precioMin').value;
    const precioMax = document.getElementById('precioMax').value;

    // Verificar que los precios sean números
    if (!isNaN(precioMin) && !isNaN(precioMax)) {
    // Convertir los precios a números enteros
    const precioMinNum = parseInt(precioMin);
    const precioMaxNum = parseInt(precioMax);

    // Filtrar los productos cuyos precios estén dentro del rango
    const productosFiltrados = productos.filter(producto => producto.precio >= precioMinNum && producto.precio <= precioMaxNum);

    // Mostrar los productos encontrados en un mensaje de alerta
    if (productosFiltrados.length > 0) {
        let mensaje = 'Productos encontrados:\n';
        productosFiltrados.forEach(producto => {
            mensaje += `${producto.nombre} - Precio: ${producto.precio}\n`;
        });
        alert(mensaje);
        } else {
        alert('No se encontraron productos dentro del rango de precios especificado.');
        }
    } else {
        alert('Por favor, ingrese valores numéricos para los precios.');
    }
}