const CarritoCompra = require("../index");


describe("Pruebas para carrito de comprar", () =>
    {
        it ("Prueba de carrito de compra", () =>
        {
            const carrito = new CarritoCompra();
           expect(carrito).toBeInstanceOf(CarritoCompra);
           expect(carrito).toHaveProperty("productos");
           expect(carrito).toHaveProperty("descuentos");
           expect(carrito.productos).toHaveLength(0);
           expect(carrito.descuentos).toHaveLength(0);
        });
       
        it ("Prueba de agregar producto", () =>
        {
            const carrito = new CarritoCompra()
            carrito.agregarProducto("Libro", 100);
            expect(carrito.productos).toHaveLength(1);
            expect(carrito.productos[0]).toHaveProperty("producto");
            expect(carrito.productos[0].producto).toBe("Libro");
            expect(carrito.productos[0]).toHaveProperty("precio");
            expect(carrito.productos[0].precio).toBe(100);
        });

        it ("Prueba de sacar total", () =>
        {
            const carrito = new CarritoCompra()
            carrito.agregarProducto("Libro", 100);
            expect(carrito.calcularTotal()).toBe(100);
        });
    }


);

