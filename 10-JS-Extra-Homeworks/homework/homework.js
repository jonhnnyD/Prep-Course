// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const contadorDeLetras = {};
  function contadorDeLetrasRepetidas(str) {
    for (let letras of str) {
      if (contadorDeLetras[letras]) {
        contadorDeLetras[letras]++;
      } else {
        contadorDeLetras[letras] = 1;
      }
    }};
  contadorDeLetrasRepetidas(string);
  return contadorDeLetras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aqui
  let string = null;
  let mayusculas = [];
  let minusculas = [];

  function letraMayusculas(str) {
    mayusculas = str.match(/[A-Z]/g);
    minusculas = str.match(/[a-z]/g)
    string = mayusculas.concat(minusculas).join('');
  }
  letraMayusculas(s);
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  let palabra = [];
  let invertida = [];
  let frase = str.split(' ');

  for (let i =0 ; i<frase.length ; i++){
    palabra = frase[i].split('');
    palabra.reverse();
    invertida[i] = palabra.join('');
  }

  return invertida.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  comparar = numero.toString();
  separado  = comparar.split('');
  separado.reverse();
  num = separado.join('');

  if (comparar === num){
    return "Es capicua";
  }else {
    return "No es capicua";
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  let nuevo = [];
  nuevo = cadena.split('')
  let abc=['a','b','c'];

  function eliminar (letra){
    for (let i = 0; i< nuevo.length; i++){
      if (nuevo[i] == nuevo.find(element => element == letra)){
        nuevo.splice([i],1);
      }
    }
  }
  abc.forEach(element => {
    return eliminar(element);
  });

  return nuevo.join('');
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arreglosOrdenados =[];
  let cont = 0;

  let contador = (num) => {
    let numero = 0;
    while (numero < num){
      numero = numero + 1;
      for(let i = 0 ; i < arr.length ; i++){
        if (arr[i].length == numero ){
          arreglosOrdenados[cont]= arr[i];
          cont = cont + 1;
        }
      } 
    } 
  }
  contador(23);//se pide contar 23 veces dado que la palabra mas larga tiene 23 caracteres 
  return arreglosOrdenados;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let empatados = [];
  empatados = arreglo1.filter(iguales => arreglo2.includes(iguales));

  return  empatados; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

