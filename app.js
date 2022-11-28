//Declaración de variables

let opcion=prompt("Ingrese la opciones de simulacion que desea:   1-Calcular el costo total del los producto selecionados.  2-calcular pagos en cuotas. 3-calcular el valor final de un producto con impuestos y descuentos. 4 calcular el tiempo de espera promedio en realcion a la cantidad de turnos . 5 Calcular la edad promedio de personas registradas. 6 nota filan de alumnos ingresados")





switch(opcion){
    case "1":
        alert("eligio la Opcion 1, le va a pedir el valir de los 5 productos")
        
        let producto1 = parseInt(prompt("Ingrese el valor del producto 1"))
        let producto2 = parseInt(prompt("ingrese el valor del producto 2"))
        let producto3 = parseInt(prompt("ingrese el valor del producto 3"))
        let producto4 = parseInt(prompt("ingrese el valor del producto 4"))
        let producto5 = parseInt(prompt("ingrese el valor del producto 5"))
        let PromedioProducto = ((producto1 + producto2 + producto3 + producto4 + producto5)/5)
        alert("el promedio es igual a :"+ PromedioProducto)


        break;

    case "2":
        alert("Opcion 2")
        break;

    case "3":
        alert("Opcion 3")
        break;

    case "4":
         alert("Opcion 4")
        break;

    case "5":
        alert("Opcion 5")
         break;

    default:
        alert("no ingreso ninguna opcion valida. Las opciones validas son: 1,2,3,4,5 y 6")
        break;
     
}

