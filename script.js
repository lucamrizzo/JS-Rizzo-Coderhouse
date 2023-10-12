//Array de productos
const productos = [
    {
        producto: 'Bochas',
        composicion: 'plastico',
        stock: true,
        precio: 500,
    },
    {
        producto: 'Baldes',
        composicion: 'plastico',
        stock: true,
        precio: 1000,
    }
];

// Function para agregar productos
const mostrarProductos = () => {

    let mensaje = "\n Productos disponibles: \n";

    productos.map((productos) => {
        mensaje += `\n producto: ${productos.producto} \n composicion: ${productos.composicion} \n Precio: $${productos.precio} pesos ars. \n -------------------------------- \n`;
    });

    alert(mensaje);
}

//function AGREGAR producto

const agregarProducto = () => {

    let producto = prompt('Ingresa el producto del viaje, por favor.');
    let composicion = prompt('Ingrese la composicion del viaje. \n Ejemplo: 3 dias y 2 noches.');
    let precio = prompt('Ingrese el precio por favor.');


    const obtenerproducto = () => {
        let producto = prompt('Ingrese el producto deseado:');
        if (producto === '') {
            alert('Debe elegir un producto.');
            return obtenerProducto()
        }
        return producto;
    }

    const obtenerComposicion = () => {
        let composicion = prompt('Ingrese el material del cual esta compuesto el producto:');
        if (composicion === '') {
            alert('Debe elegir un material del producto');
            return obtenercomposicion()
        }
        return composicion;
    }

    const obtenerPrecio = () => {
        let precio = prompt('Ingresa el precio del producto:');
        if (precio === '') {
            alert('Debe ingresar un precio para el producto');
            return obtenerPrecio()
    }
    return precio;
    }

    const nuevoViaje = {
        producto: producto,
        composicion: composicion,
        precio: precio,
    };

    productos.push(nuevoViaje);


mostrarproductos();

}