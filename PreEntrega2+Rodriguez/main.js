let productos = [];

alert("Bienvenido al administrador de productos.");
alert("Primero, necesitamos saber tu nombre.");
let nombreUsuario = prompt("Ingrese su Nombre");

alert("Bienvenido " + nombreUsuario + ", esperamos que pases un buen momento con nosotros.");

while (true) {
    let opcion = prompt("Secciona el proceso que desea hacer:\n" +
        "1. Agregar productos.\n" +
        "2. Ver productos en stock.\n" +
        "3. Ver cantidad de capital invertido. \n" +
        "4. Realizar una búsqueda. \n" +
        "5. Salir. \n");

    switch (opcion) {
        case "1":
            function ProductoNuevo(nombre, precio, color, cantidad) {
                this.nombre = nombre;
                this.precio = precio;
                this.color = color;
                this.cantidad = cantidad;
            }

            const nuevoProducto = new ProductoNuevo(
                prompt("Ingrese el nombre del producto"),
                prompt("Ingrese el precio del producto"),
                prompt("Ingrese el color del producto"),
                prompt("Ingrese la cantidad disponible del producto")
            );

            productos.push(nuevoProducto);
            console.log(productos);
            alert("Producto agregado con éxito.");
            break;

        case "2":
            if (productos.length === 0) {
                alert("No hay productos en stock.");
            } else {
                let listaProductos = productos.map((producto, index) =>
                    `Producto ${index + 1}:\n` +
                    `Nombre: ${producto.nombre}\n` +
                    `Precio: ${producto.precio}\n` +
                    `Color: ${producto.color}\n` +
                    `Cantidad: ${producto.cantidad}\n`
                );

                alert("Productos en stock:\n\n" + listaProductos.join("\n"));
            }
            break;
    
        case "3":

        let totalCapital = productos.reduce((acumulador, producto) =>
        acumulador + parseFloat(producto.precio), 0);
    
        alert("El total de capital invertido en productos es: ${totalCapital}");
        break;
    
        
        case "4":
            const terminoBusqueda = prompt("Ingresa el producto que deseas encontrar.");
            const busqueda = productos.filter(producto =>
                producto.nombre.includes(terminoBusqueda)
            );
        
            if (busqueda.length === 0) {
                alert(`No se encontraron productos que coincidan con "${terminoBusqueda}".`);
            } else {
                let resultadosBusqueda = busqueda.map(producto =>
                    `Nombre: ${producto.nombre}\n` +
                    `Precio: ${producto.precio}\n` +
                    `Color: ${producto.color}\n` +
                    `Cantidad: ${producto.cantidad}\n`
                );
        
                alert("Resultados de la búsqueda:\n\n" + resultadosBusqueda.join("\n"));
            }
            break;
    
    

    default:
        alert("error, ingresa un numero del 1 al 5.");
        break;

    }

    if (opcion === "5") {
        break;
    }
}