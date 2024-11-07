class CarritoCompra {
    constructor() {
        this.productos = [];
        this.descuentos = [];
    }

    agregarProducto(producto, precio) {
        this.productos.push({ producto: producto, precio: precio });
    }

    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.precio, 0);
    }

    aplicarDescuentos(descuentos) {
        this.descuentos = descuentos;
        let totalDescuentos = 0;
        for (let descuento of descuentos) {
            if (descuento.porcentaje) {
                totalDescuentos += this.calcularTotal() * (descuento.porcentaje / 100);
            } else if (descuento.cantidad) {
                totalDescuentos += descuento.cantidad;
            }
        }
        return totalDescuentos;
    }

    calcularTotalConDescuentos() {
        const total = this.calcularTotal();
        const totalDescuentos = this.aplicarDescuentos(this.descuentos);
        return total - totalDescuentos;
    }
}

module.exports = CarritoCompra; 

