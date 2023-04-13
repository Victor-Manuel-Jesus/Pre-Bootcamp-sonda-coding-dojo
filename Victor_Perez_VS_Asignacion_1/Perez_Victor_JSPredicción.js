function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//Al llamar la funcion mostrara por console el texto "Naci en 1980"

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
//Al llamar la funcion mostrara por consola el texto "Naci en " concadenando el dato puesto en la variable EntradaAñoNacimiento

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
//Al llamar la funcion, se mostrara en consola el primer texto "Sumando numeros", luego mostrara el primer numero y el segundo numero, para al final mostrar una suma entre los dos numeros.


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

["Bambi", "Beetlejuice", "Toy Story","Zoro"]