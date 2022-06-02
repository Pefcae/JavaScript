

alert ("Desafio entregable n1 de Pablo Federiconi");
let resultado=0;
let valor = prompt("Ingrese el numero de la tabla que quiere repasar:");

    for (i=1;i <=10;i++ )
    {
       if (i!=valor)
        alert(valor +"X" + i +"=" + valor * i);
        else 
         {  
             let resultado = prompt("Ingrese el resultado de " + i + "X" + valor +":" +i*valor);
             while (resultado != i*valor)
            {    resultado=0;     
                 resultado = prompt("Resultado incorrecto, Ingrese el resultado nuevamente de " + i + "X" + valor +":" );
            }
            alert("felicitaciones, sigamos");
		}
	}

