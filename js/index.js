let repetir = false;
do{
let camino = prompt('Bienvenidos a Casita de Barro! Escriba la opcion que desea: "Comprar", "Informacion", "Contacto"')
switch (camino) {
    case 'comprar':
        let objeto = prompt('Escriba el articulo que desea: "Taza", "Mate", "Pava"')   
        if(objeto === 'taza'){
            let ValorTaza = confirm('El precio de nuestras tazas es de 3000 dolares, si desea comprar pulse "Aceptar"')
            if(ValorTaza === true){
                confirm('Muchas gracias por su compra!')
            } else confirm ('No hay problema, Vuelva prontos!')
        }else  if(objeto === 'mate'){
            let ValorTaza = confirm('El precio de nuestros mates es de 2000 dolares, si desea comprar pulse "Aceptar"')
            if(ValorTaza === true){
                confirm('Muchas gracias por su compra!')
            } else confirm ('No hay problema, Vuelva prontos!')
        }else  if(objeto === 'pava'){
            let ValorTaza = confirm('El precio de nuestras pavas es de 1000 dolares, si desea comprar pulse "Aceptar"')
            if(ValorTaza === true){
                confirm('Muchas gracias por su compra!')
            } else confirm ('No hay problema, Vuelva prontos!')
        }  
        break;
    case 'informacion':
        console.log('Nido de barro nacio a fines del 2017. Surgió timidamente , sin hacer muchas piezas y experimentando un poco. Cuando vi que lo que estaba haciendo me daba satisfacción empece a darle mas importancia. Entonces decidi tirarme a la pileta! dejar mi trabajo principal para poder dedicarme a full a este proyecto al que tanto amor le tengo y me hace muy feliz, espero que a ustedes tambien!')
        break; 
    case 'contacto':
       
         do {
        let mensaje = prompt('Dejanos tu mensaje y te contactamos a la brevedad!')
        bucle = confirm('Se guardara este mesaje: "' + mensaje + '" ¿Estas de acuerdo?' );
        }   while (bucle == false)
        console.log('Muchas gracias por tu aporte!conta')        
        break;
    default: 
    repetir = confirm('No ingresaste una opcion valida, ¿Quieres Volver a intentarlo? ')
        break;
    } 
}while (repetir == true)

