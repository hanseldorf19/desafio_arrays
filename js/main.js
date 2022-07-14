// Variables globales
let naneUser = prompt('Bienvenido a Open Culture Club, ¿Cual es tu nombre?');
const tusGenPelis = [];
const tusActores = [];
const tusGenMusica = [];
const tusGustos = tusGenPelis.concat(tusGenMusica).join('\n');

let SelectGenPelis1;
let SelectGenPelis2;
let SelectGenPelis3;

let SelectGenMusica1;
let SelectGenMusica2;
let SelectGenMusica3;


// Funciones

//PELÍCULAS

// Función Menu Determinar los generos de peliculas del usuario

function detGenPelis() {

    SelectGenPelis1 = prompt('Indica tu estilo de pelicula favorito:\n Ej: "Acción"');
    tusGenPelis.push(SelectGenPelis1);
    sugerir1();

    SelectGenPelis2 = prompt('Indica tu Segundo estilo de pelicula favorito:\n Ej: "Comedia"');
    tusGenPelis.push(SelectGenPelis2)
    
    SelectGenPelis3 = prompt('Indica tu Segundo estilo de pelicula favorito:\n Ej: "Romántica"');
    tusGenPelis.push(SelectGenPelis3);

    alert(`Gracias estos son tus 3 generos preferidos ${tusGenPelis.join(', ')}`)
    menuGenPelis();
}

detGenPelis();

// Función Menu para editar o continuar Generos de Películas

function menuGenPelis() { 

    let opcionMenu = Number(prompt('Eliga una opción: \n\n 1 - Añadir más generos.\n 2 - Volver a Indicar sus 3 generos favoritos \n 3 - Continuar'));;

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

// Agregar más Generos de Películas
function agregarGenPelis() {
        let GenPeliAgregar = prompt('Escriba aqui su genero a agregar');
        tusGenPelis.push(GenPeliAgregar);
        alert(`Tus generos de Películas actualizados son ${tusGenPelis.join(', ')}`);
        menuGenPelis();
}

// MÚSICA

// Función Menu Determinar los generos de Música del usuario

function detGenMusica() {

    SelectGenMusica1 = prompt('Indica tu estilo de música favorito:\n Ej, "Rock"');
    tusGenMusica.push(SelectGenMusica1);
    SelectGenMusica2 = prompt('Indica tu Segundo estilo de música favorito:\n Ej, "Pop"');
    tusGenMusica.push(SelectGenMusica2)
    SelectGenMusica3 = prompt('Indica tu Segundo estilo de música favorito:\n Ej, "Bachata"');
    tusGenMusica.push(SelectGenMusica3);
    alert(`Gracias, estas son tus 3 generos preferidos ${tusGenMusica.join(', ')}`)
    menuGenMusica();
}

// Función Menu para editar o continuar Generos Músicales

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
                        alert(`Enhorabuena, estos son tus generos seleccionados:
                         \n ${tusGustos}`);
                        break; 
                
                default:
                    alert('Error')
                    break;
            }

        } while (opcionMenu !==3)
}

// Agregar más Generos de Películas

function agregarGenMúsica() {
        let GenMusiAgregar = prompt('Escriba aqui su genero a agregar');
        tusGenMusica.push(GenMusiAgregar);
        console.log(`Tus generos de Música actualizados son ${tusGenPelis.join(', ')}`);
        menuGenPelis();
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
        console.log(tusActores);
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
        console.log(tusActores);
        break;
    case 2:
        alert('Bye, bye');    
            break;
    default:
        break;
}
}
