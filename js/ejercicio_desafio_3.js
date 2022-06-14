let Pedido ='';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
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

    getTotal() {
        for (const A of this.productos) {
            this.total = this.total + A.price
            Pedido=Pedido + A.name +" $"+ A.price   + " \n"
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


function pedirNUMERO(texto) {
    let valor = prompt(texto);
    while (isNaN(parseInt(valor)) ) {
        valor = prompt(texto);
    }
    return valor;
}



function realizarPedido(text1,text2,prod,prod_2)
{

    let eleccion=0;
    let cantidad=0;
    let subtotal=0;

    cantidad = pedirNUMERO(text1);

    if (cantidad>0) 
    {
    for (i=1;i <=cantidad ;i++ )
       { 
        eleccion = pedirNUMERO(text2 + " N°:" + i + " \n 1-" +prod.name + " $" + prod.price + " \n 2-" + prod_2.name + " $"+ prod_2.price );

         while (eleccion != 1 && eleccion != 2 )
             {  
                eleccion = pedirNUMERO(" opción incorrecta, " + text2 + " N°:" + i + " \n 1-" +prod.name  + " $" + prod.price + " \n 2-" + prod_2.name + " $"+ prod_2.price );

            }

         if (eleccion==1) 
             { 
                cliente.addProduct(prod) ;

                }
         else
            {
                cliente.addProduct(prod_2)

                }
        

        }
    }


}



const cliente = new CarritoDeCompras();


const p1 = new Product('Hamburguesa con Queso', 500);
const p2 = new Product('Hamburguesa sin Queso', 400);
const p3 = new Product('Papas con Cheddar', 200);
const p4 = new Product('Papas con cheddar y Bacon', 300);
const p5 = new Product('Coca Cola', 100);
const p6 = new Product('Seven Up', 100);



alert ("Desafio entregable n3 de Pablo Federiconi (Agregando Clases");

let Usuario = prompt("Por favor Ingrese su nombre");

cliente.setName(Usuario);

alert ("Hola " + cliente.name + ", Bienvenido a la hamburguesería, a continuación le tomaremos su pedido");

realizarPedido("Cuantas hamburguesas quiere:","Elegí tu Hamburguesa",p1,p2);

realizarPedido("Cuantos acompañamientos quiere:","Elegí tu Acompañamiento",p3,p4);

realizarPedido("Cuantas bebidas quiere:","Elegí tu bebida",p5,p6);



cliente.getTotal();

