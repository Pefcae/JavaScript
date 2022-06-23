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

let contenedor = document.getElementById("contenedor")
const boton = document.getElementById("sendData");
const fName = document.getElementById("name")
const lage = document.getElementById("age")

boton.disabled=true




fName.onkeydown = () => {
                        fName.className="sizeXL"
                         fName.classList.add("fblue")
                     }
fName.onkeyup = () => {fName.className="sizeM"}


lage.onkeydown = () => {
                            lage.className="sizeXL"
                         lage.classList.add("fblue")
                    }
lage.onkeyup = () => {lage.className="sizeM"}

lage.onchange = () => { 
                        if(lage.value<18) {
                            let MensajeError = document.createElement('p')
                            MensajeError.innerHTML="No puede ser menor d edad"
                            MensajeError.id="error"
                            boton.disabled=true
                            contenedor.appendChild(MensajeError)
                            }
                        else
                            {  
                            const MensajeError = document.getElementById("error")
                            MensajeError.remove() 
                            }
                        }

fName.onmousemove = () => {
        boton.disabled=false 
        boton.className="bglgreen"
        }

boton.addEventListener("click", () => {


    let valFirstName = fName.value;
    let valAge = lage.value

     cliente.setName(valFirstName);
     boton.remove()

     let titulo = document.getElementById('titulo')
     let subtitulo = document.getElementById('subtitulo')

    titulo.innerHTML=`Hola ${valFirstName} `
    subtitulo.innerHTML='Hacé tu compra, ingresá las cantidades'

    fName.remove()
    lage.remove()
    mostrarProductos()

    })   

function mostrarProductos(){

    ListHamburguesas.forEach((product) => {


        const contenedor = document.getElementById('formulario')
        const titulo = document.createElement('h3')
        const input = document.createElement('input')

        titulo.textContent = ` Producto  ${product.name }  al precio de $ ${product.price} `
        input.type = "number"
        input.id = "cantidad"

        input.onmousemove = () => {  input.className="bglgreen"        }
   

        contenedor.appendChild(titulo)
        contenedor.appendChild(input)

      })




       const contenedorCompra = document.getElementById('compra')

        const botonCompra = document.createElement('input')
        botonCompra.type = "submit"
        botonCompra.innerHTML='Enviar'
        contenedorCompra.append(botonCompra)

        
        botonCompra.addEventListener("click", () => {
            botonCompra.disabled=true

            HacerPedido()
            })  
    
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

        

        for (i=0;i < ListHamburguesas.length ;i++ )
        {
        subtotal = operacion(parrafo[i].value ,ListHamburguesas[i].price,'3')

        total =operacion(total,subtotal,'1')
        pedido=`${pedido} Producto elegido ${ListHamburguesas[i].name}  cantidad  ${parrafo[i].value}  precio unitario: ${ListHamburguesas[i].price} Subtotal:  ${subtotal}
            
            `
        }
        pedido = `

            ${pedido} El total es: ${total}
        
        `
        console.log(pedido)
        
        const textPedido = document.createElement('h5')
    
        textPedido.innerText = pedido

        contenedorCompra.append(textPedido)
}

