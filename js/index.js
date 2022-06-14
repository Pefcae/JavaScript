class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto() {
        return this.nombre;
    }
}

const producto1 = new Producto('Pizza Muzzarella', 1020);
const producto2 = new Producto('Sandwich de Bondiola', 900);
const producto3 = new Producto('Papas Chedar', 700);

class DetallePedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcularSubtotal() {
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    mostrarDetalle() {
        return '-- ' + this.cantidad + ' x ' + this.producto.mostrarProducto() + ' ($' + this.calcularSubtotal() + ')';
    }
}

const detallePedido1 = new DetallePedido(producto1, 2);
const detallePedido2 = new DetallePedido(producto2, 3);
const detallePedido3 = new DetallePedido(producto3, 1);

class Pedido {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal() {
        let total = 0;
        for (const dp of this.detalles) {
            total = total + dp.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido() {
        let texto = 'PEDIDO DE LA FECHA: ' + this.fecha + '\n';
        for (const dp of this.detalles) {
            texto += dp.mostrarDetalle() + '\n'
        }
        texto += '---- TOTAL: $' + this.calcularTotal()
        return texto;
    }
}

const array = [];
array.push(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);

const pedido1 = new Pedido(new Date(), array);

console.log(pedido1.mostrarPedido())

