let Pedido ='';
const ListHamburguesas = [];
const ListAcom = [];
const ListBebidas = [];

class Product {
    constructor(name, price,categoria) {
        this.name = name;
        this.price = price;
        this.categoria=categoria;
    }
    
}

class CarritoDeCompras {
    constructor() {
        this.productos = []
        this.name = ''
        this.total = 0
    }
    setName(value) {
        this.name = value
    }

    addProduct(product) {
        this.productos.push(product)
    }

    vaciarCarrito() {
        this.productos = [];
            
        //while (this.productos.length != 0  )
        //{
         //   this.productos.pop()
        //}
        
    }

    eliminarProducto(valor) {
            //alert("vamos a eliminar el producto"  + this.productos.splice (valor,1);
            
            //this.productos.splice(0, 2);
            //Listproducts.splice(valor-1, 1);
            this.productos.splice(valor-1, 1);
            alert("Producto Eliminado");
      }

    eliminarUltProducto(valor) {   
            this.productos.pop()
            alert("Producto Eliminado");
      }

    getTotal() 
        {
        Pedido ='';
        let cont=0;
        this.total = 0;

         for (const A of this.productos) 
            {
            cont++;
            this.total = this.total + A.price
            Pedido=Pedido + cont + " - " + A.name +" $"+ A.price   + "\n"
            }
        
        alert ( "Hola " + this.name + " su pedido es: \n" + Pedido + "\n Total: " + this.total);
         
        }


}

function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case "1":
                return valor1 + valor2;
                break;
            case "2":
                return valor1 - valor2;
                break;
            case "3":
                return valor1 * valor2;
                break;
            case "4":
                return valor1 / valor2;
                break;
            default:
            return 0;
                break;

        }
}


const cliente = new CarritoDeCompras();

ListHamburguesas.push (new Product('Hamburguesa con Queso', 500,1));
ListHamburguesas.push (new Product('Hamburguesa sin Queso', 400,1));
ListHamburguesas.push (new Product('Papas con Cheddar', 200,2));
ListHamburguesas.push (new Product('Papas con cheddar y Bacon', 300,2));
ListHamburguesas.push (new Product('Coca Cola', 100,3));
ListHamburguesas.push (new Product('Seven Up', 100,3));

//const Listproducts = (ListHamburguesas.concat(ListAcom)).concat(ListBebidas);

const boton = document.getElementById("sendData");
    
boton.addEventListener("click", () => {


let fName = document.getElementById("name")
let valFirstName = fName.value;
let lage = document.getElementById("age")
let valAge = lage.value

 let contenedor = document.getElementById("contenedor")
 let parrafo = document.createElement('p')

 //contenedor.append(parrafo)
 cliente.setName(valFirstName);
 boton.remove()

 let titulo = document.getElementById('titulo')
 let subtitulo = document.getElementById('subtitulo')

titulo.innerHTML=`Hola ${valFirstName} `
subtitulo.innerHTML='Hacé tu compra, ingresá las cantidades'

fName.remove()
lage.remove()
mostrarProductos()

}
)   

function mostrarProductos(){

    ListHamburguesas.forEach((product) => {


    const contenedor = document.getElementById('showAllProducts')
    /* Agregar titulo  */
    const titulo = document.createElement('h3')
    const input = document.createElement('input')

    titulo.textContent = ` Producto  ${product.name }  al precio de $ ${product.price} `
    input.type = "number"
    input.id = "cantidad"
    input.value=product.price

    contenedor.appendChild(titulo)
    contenedor.appendChild(input)

  })
    const contenedorCompra = document.getElementById('compra')

    const botonCompra = document.createElement('button')
    botonCompra.innerHTML='Comprar'
    contenedorCompra.append(botonCompra)
    
    botonCompra.addEventListener("click", () => {
       
        HacerPedido()
        })  


//let parrafo = document.querySelector("showAllProducts input")
//let contenedor = document.querySelector("showAllProducts")

//parrafo = document.querySelector(".texto")

//    const contenedorCompraitem = document.getElementById('cantidad')

}


function HacerPedido()
{ 
 
        const contenedorCompra = document.getElementById('compra')

        const textCompra = document.createElement('h3')
        textCompra.textContent = `Compra Efectuada`
        contenedorCompra.append(textCompra)

        let parrafo = document.querySelectorAll("#cantidad")
        let pedido=''
        let subtotal=0
        let total=0

        const textPedido = document.createElement('h5')
    

        for (i=0;i < ListHamburguesas.length ;i++ )
        {


        subtotal = parrafo[i].value * ListHamburguesas[i].price
        total =total+subtotal
        pedido=`${pedido} Producto elegido ${ListHamburguesas[i].name}  cantidad  ${parrafo[i].value}  precio unitario: ${ListHamburguesas[i].price} Subtotal:  ${subtotal}
        `

        }
        pedido = `
        ${pedido} El total es: ${total}
        `
        console.log(pedido)
        textPedido.textContent = pedido

        contenedorCompra.append(textPedido)
}