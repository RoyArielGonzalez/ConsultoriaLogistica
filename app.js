//Declaración de variables


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