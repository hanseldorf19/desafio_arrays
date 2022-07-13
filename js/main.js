
// Variables globales
let nombreUsuario = prompt('Bienvenido a Open Culture Club, ¿Cual es tu nombre?');
const tusGenPelis = [];
const tusActores = [];
const tusGenMusica = [];
const tusGustos = tusGenPelis.concat(tusGenMusica.join('\n'));

// Funciones

// Funcion Menu Editar Gen Pelis


// Gen Pelis
function detGenPelis() {

let SelectGenPelis1 = prompt('Indica tu estilo de pelicula favorito:\n Ej, "Acción"');
tusGenPelis.push(SelectGenPelis1);
sugerir1();
let SelectGenPelis2 = prompt('Indica tu Segundo estilo de pelicula favorito:\n Ej, "Comedia"');
tusGenPelis.push(SelectGenPelis2)
let SelectGenPelis3 = prompt('Indica tu Segundo estilo de pelicula favorito:\n Ej, "Romántica"');
tusGenPelis.push(SelectGenPelis3);
// con un forEach quisiera añadir join(', ) pero no me sale
;
alert(`Gracias ${nombreUsuario} estas son tus 3 generos preferidos ${tusGenPelis}`)
menuGenPelis();
}

detGenPelis();

function menuGenPelis() { 

    let opcionMenu = Number(prompt('Eliga una opción: \n\n1 - Añadir más generos.\n2 - Volver a Indicar sus 3 generos favoritos \n3 - Continuar'));;

        do {
            switch (opcionMenu) {
                case 1:
                    agregarGenPelis();
                    break;
                case 2:
                    detGenPelis();
                    break; 
                case 3:
                    detGenMusica();
                    break;        
                default:
                    alert('Error')
                    break;
            }
        } while (opcionMenu !==3)

}

// MENU Editar Generos Pelis

// Agregar más Generos
function agregarGenPelis() {
    for (i = 0; i < 3; i++){
        let GenPeliAgregar = prompt('Escriba aqui su genero a agregar, máximo 3');
        tusGenPelis.push(GenPeliAgregar);
    }
}

// Determinar Guastos Músicales

function detGenMusica() {

    let SelectGenMusica1 = prompt('Indica tu estilo de música favorito:\n Ej, "Rock"');
    tusGenPelis.push(SelectGenMusica1);
    let SelectGenPelis2 = prompt('Indica tu Segundo estilo de música favorito:\n Ej, "Pop"');
    tusGenPelis.push(SelectGenMusica2)
    let SelectGenPelis3 = prompt('Indica tu Segundo estilo de música favorito:\n Ej, "Bachata"');
    tusGenPelis.push(SelectGenMusica3);
    // con un forEach quisiera añadir join(', ) pero no me sale
    ;
    alert(`Gracias ${nombreUsuario} estas son tus 3 generos preferidos ${tusGenMusica}`)
    menuGenMusica();
}


function menuGenMusica() { 

    let opcionMenu = Number(prompt('Eliga una opción: \n\n1 - Añadir más generos.\n2 - Volver a Indicar sus 3 generos favoritos \n3 - Ver todos tus generos de Películas y Música'));;

        do {
            switch (opcionMenu) {
                case 1:
                    agregarGenMusica();
                    break;
                case 2:
                    detGenMusica();
                    break;
                case 3:
                        alert(`Enhorabuena ${nombreUsuario}, estos son tus generos seleccionados:
                         \n ${tusGustos}`);
                        break; 
                
                default:
                    alert('Error')
                    break;
            }

        } while (opcionMenu !==3)
}

function agregarGenMúsica() {
    for (i = 0; i < 3; i++){
        let GenMusiAgregar = prompt('Escriba aqui su genero a agregar, máximo 3');
        tusGenMusica.push(GenMusiAgregar);
    }
}


// Suguerir

function sugerir1() {
if (SelectGenPelis1 == 'Accion' || SelectGenPelis1 == 'accion' || SelectGenPelis1 == 'ACCIÓN'  ) {

let opcion = Number(prompt(`Quizá te guste este artista. elija:
\n 1 - para añadir a su portolio
\n 2 - Para Continuar:
\n
 - Arnold Swarzeneger

`));

switch (opcion) {
    case 1:
        tusActores.push('Arnold Swarzeneger');
        break;
    case 2:
        sugerir2();    
            break;
    default:
        break;
}
}

}

function sugerir2(){ 
    let opcion = Number(prompt(`Quizá te guste este artista. elija:
    \n 1 - para añadir a su portolio
    \n 2 - Para Termina:
    \n
     - Tom Cruise
    
    `));

switch (opcion) {
    case 1:
        tusActores.push('Arnold Swarzeneger');
        break;
    case 2:
        alert('Bye, bye');    
            break;
    default:
        break;
}
}
