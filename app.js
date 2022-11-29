//Declaración de variables


let opcion=prompt("Ingrese la opciones de simulacion que desea:   1- Calcular el costo total del los producto selecionados.  2- Calcular el valor final de un producto con impuestos y descuentos. 3- Calcular pagos en cuotas. 4- Calcular el tiempo de espera promedio en realción a la cantidad de turnos. 5 Calcular la edad promedio de personas registradas. 6. Calculo del promedio de nota de los alumnos ingresados")





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
        alert("Eligio la Opcion 2, de calculo de valor del producto con impuesto y descuentos")
        let valor2 = parseInt(prompt("Ingrese el valor del producto"))
        let impuesto = parseInt(prompt("ingrese el % de impuestos que se suman (ejemplo:5)"))
        let descuento = parseInt(prompt("ingrese el % descuento que se suman (ejemplo:5)"))
        
        let Totalproducto = valor2*(1+impuesto/100)*(1-descuento/100)

        alert("El valor del producto con descuento e impuestos es igual a:"+ Totalproducto)
        break;

    case "3":

        alert("Eligio la Opcion 3, de calculo de pago en cuotas ingrese un valor y despues la cantidad de cuotas")
                let valor1 = parseInt(prompt("Ingrese el valor del producto"))
        let cuotas = parseInt(prompt("ingrese la cantidad de cuotas"))
        let valorcuota = ((valor1)/cuotas)
        alert("El valor de cuota es igual a :"+ valorcuota)
        break;


    case "4":
         alert("Eligio la Opcion 4, de calculo de Calcular el tiempo de espera promedio en realción a la cantidad de turnos")
                 let cantturnos = parseInt(prompt("Ingrese la cantidad de turno"))
             let tiempodeespera = (cantturnos*15)
         alert("El tiempo de espera es  igual a :"+ tiempodeespera+"minutos")
         break;

    case "5":
        alert("Eligio la Opcion 5, de calculo de la edad promedio de personas registradas")
        
         let persona1 = parseInt(prompt("Ingrese la edad de la persona 1"))
         let persona2 = parseInt(prompt("Ingrese la edad de la persona 2"))
         let persona3 = parseInt(prompt("Ingrese la edad de la persona 3"))
         let persona4 = parseInt(prompt("Ingrese la edad de la persona 4"))
         let persona5 = parseInt(prompt("Ingrese la edad de la persona 5"))
         let Promedioedad = ((persona1 + persona2 + persona3 + persona4 + persona5)/5)
         alert("El promedio de edad es :"+ Promedioedad)
         break;
 
    case "6":
            alert("Eligio la Opcion 6, de calculo de la promedio de Notas de los alumnos")
            
             let alumno1 = parseInt(prompt("Ingrese la nota del alumno 1"))
             let alumno2 = parseInt(prompt("Ingrese la nota del alumno 2"))
             let alumno3 = parseInt(prompt("Ingrese la nota del alumno 3"))
             let alumno4 = parseInt(prompt("Ingrese la nota del alumno 4"))
             let alumno5 = parseInt(prompt("Ingrese la nota del alumno 5"))
        
             let Promedionota = ((alumno1 + alumno2 + alumno3 + alumno4 + alumno5)/5)
             alert("El promedio de edad es :"+ Promedionota)
             break;

    default:
            alert("No ingreso ninguna opcion valida. Las opciones validas son: 1,2,3,4,5 y 6")
        break;
     
}

