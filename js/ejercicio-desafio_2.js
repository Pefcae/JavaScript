
let SubTotal_hamb=0;
let SubTotal_acomp=0;
let SubTotal_bebida=0;
let Total=0;
let Propina=0;
let Pedido ='';

const Valor_Hamb_Queso=500;
const Valor_Hamb=400;
const Valor_PapasCheddar=200;
const Valor_PapasCheddaryBacon=300;
const Valor_bebida = 100;

const prodHamb_1="Hamburguesa con Queso";
const prodHamb_2="Hamburguesa sin Queso";
const prodAcomp_1="Papas con Cheddar";
const prodAcomp_2="Papas con cheddar y Bacon";
const prodBebida_1="Coca Cola";
const prodBebida_2="Seven Up";

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



function realizarPedido(text1,text2,prod_1,Valor_prod1,prod_2,Valor_prod2)
{
   
    let eleccion=0;
    let cantidad=0;
    let subtotal=0;

    cantidad = pedirNUMERO(text1);

    if (cantidad>0) 
    {
    for (i=1;i <=cantidad ;i++ )
       { 
        eleccion = pedirNUMERO(text2 + " N°:" + i + " \n 1-" +prod_1 + " $" + Valor_prod1 + " \n 2-" + prod_2 + " $"+ Valor_prod2 );

         while (eleccion != 1 && eleccion != 2 )
             {  
                eleccion = pedirNUMERO(" opción incorrecta, " + text2 + " N°:" + i + " \n 1-" +prod_1 + " $" + Valor_prod1 + " \n 2-" + prod_2 + " $"+ Valor_prod2 );
            }

         if (eleccion==1) 
             { 
                subtotal=operacion(subtotal,Valor_prod1,"1") ;
                Pedido = operacion(Pedido,prod_1 +" $"+ Valor_prod1 + " \n","1") ;
                }
         else
            {
                subtotal=operacion(subtotal,Valor_prod2,"1") ;
                Pedido = operacion(Pedido,prod_2 + " $"+ Valor_prod2 + " \n","1") ;
                }
        

        }
    }

   return subtotal;

}



alert ("Desafio entregable n2 de Pablo Federiconi");
alert ("Bienvenido a la hamburguesería, a continuación le tomaremos su pedido");


SubTotal_hamb=realizarPedido("Cuantas hamburguesas quiere:","Elegí tu Hamburguesa",prodHamb_1,Valor_Hamb_Queso,prodHamb_2,Valor_Hamb);
Total = operacion(Total,SubTotal_hamb,"1") ;

SubTotal_acomp=realizarPedido("Cuantos acompañamientos quiere:","Elegí tu Acompañamiento",prodAcomp_1,Valor_PapasCheddar ,prodAcomp_2,Valor_PapasCheddaryBacon);
Total = operacion(Total,SubTotal_acomp,"1") ;

SubTotal_bebida=realizarPedido("Cuantas bebidas quiere:","Elegí tu bebida",prodBebida_1,Valor_bebida,prodBebida_2,Valor_bebida);
Total = operacion(Total,SubTotal_bebida,"1") ;

Propina = operacion(Total,0.1,"3");

let Comensales = pedirNUMERO("Cuantas personas son para dividir la cuenta: ");

alert(Pedido + "\n\n                   Subtotal por Hamburguesas: " + SubTotal_hamb + "\n                   Subtotal por Acompañamiento: " + SubTotal_acomp + "\n                   Subtotal por Bebidas: " + SubTotal_bebida + "\n\n                   Total: " + Total +"\n                   Propina: " + Propina +"\n                   Cantidad de Comensales: " + Comensales +"\n\n\n                   Total por cada uno: " + operacion(operacion(Total,Propina,"1"),Comensales,"4") );


