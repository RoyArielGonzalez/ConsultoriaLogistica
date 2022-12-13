//Declaración de variables
/*
const array1 =[ "coder", 28, 34]
const array2 =[ "House", 29, 34]
console.log(array1);
console.log(array2);

array2[4]= 54
array2[6]= "argentina"
array2[8]= "uruguayo"
array2[9]= "argentino"
console.log(array2[1]);

console.log(array2);


for (let index= 0; index <=9; index++){
    console.log(array2[index])

}
console.log("HOLA")
console.log(array2.length)

array1.unshift("NUEVOS DATOS ")
array2.push("brasilero")
console.log(array2.length)

console.log(array2);


array2.unshift("HOLA")

for (let index= 0; index <=11; index++){
    console.log(array2[index])

}

array2.shift()
array2.pop()
array2.splice(2,3)

console.log(array2.join("<+>"));

let total = array1.concat(array2)

console.log(total);



const listaNombre=[];
let cantidad=5;

do{
    let entrada = prompt("Ingrese Nombre: ")
    listaNombre.push(entrada.toUpperCase());
    }while(listaNombre.length != cantidad)


console.log(listaNombre);


const eliminar = (Nombre) => {
    let index = listaNombre.indexof(Nombre)
    if (listaNombre.index != -1){
        listaNombre.slice(index,1);
    }

}

*/

let total =0

const carrito =[
    {nombre: "Horas de Desarrollo", precio: 80, cantidad: 0},
    {nombre: "Horas de Ingenieria", precio: 150, cantidad: 0},
    {nombre: "Horas de Gestion humana", precio: 70, cantidad: 0},
    {nombre: "Horas de PM", precio: 120, cantidad: 0},
    {nombre: "Horas de Asistente", precio: 40, cantidad: 0},
]


let opcion=prompt("Ingrese la opciones de presupuesto que desea agregar:   1- Calcular un presupuesto.  2- Filtrar hora de mas de $100. 3- Precio mayor. 4- Precio menor.")
switch(opcion){
    case "1":
        alert("EL PRESUPUESTO ES :  ")
        
        carrito.forEach((producto) => {
            total += producto.precio
        });
        
        alert(carrito[0].nombre+"  $"+ carrito[0].precio );
        alert(carrito[1].nombre+"  $"+ carrito[1].precio);
        alert(carrito[2].nombre+"  $"+ carrito[2].precio);
        alert(carrito[3].nombre+"  $"+ carrito[2].precio);
        alert("El total del presupuesto es "+ total)
        
                      
        break;

    case "2":
        alert("Eligio la Opcion 2, Filtro de horas de mayor de $100")
        
        let filtrop= carrito.filter((p)=>{ return p.precio>=100});

        console.log(filtrop)



        break;

    case "3":
        alert("Eligio la Opcion 3, DA el Precio Maximo")
       
    console.log(carrito);
        let maxprecio = carrito.reduce((accum, producto) => {
            return Math.max (producto.precio); 
        },0);

        console.log(maxprecio)

      break;


    case "4":
        
        
        alert("Eligio la Opcion 4, DA el Precio Mas bajo")    
    
        console.log(carrito);
            let minprecio = carrito.reduce((accum, producto) => {
                return Math.min (producto.precio); 
            },0);

        console.log(minprecio)
    break;

    
    default:
            alert("No ingreso ninguna opcion valida. Las opciones validas son: 1,2,3,4,5 y 6")
        break;
     
}