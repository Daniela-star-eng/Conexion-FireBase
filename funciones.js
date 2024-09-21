function saludar(){ 
    console.log("Hola"); 
}
saludar(); 

function saludar2(nombre="anonimo"){ //por default toma el nombre de anónimo debido a que no se ha indicado un nombre en el console log
    console.log("Hola " +nombre); 
}

saludar2("Erick Martínez"); 

function saludar3(nombre="anonimo"){ 
    var s="Hola " +nombre;
    return s;  
}

console.log(saludar3("Daniela Ortiz"));

//Funcion de flecha
//Se ejecuta en el momento de tal manera que se debe saber que hacer con el resultado
//Realizará una acción. Siendo una acción, siempre es un sustantivo como "saludar"
//Cuando se recibe una sola variable, no se necesitan los paréntesis
var saludo=(nombre)=>{ //se crea una variable para poder mandar llamar el console log. 
    console.log("hola "+nombre); 
}
saludo("Meganito"); //Para la función de flecha, se manda a llamar el nombre de la variable, junto con sus paréntesis


var saludo2=(nombre)=>{
    console.log("Hola "+nombre); 
}
saludo2("Felipe");

var saludo3=(nombre)=>{
    var s="Hola "+nombre; //Ya no se utiliza la variable "s". Si no se vuelve a ocupar la variable y la siguiente linea es la unica que lo ocupa, ya no es necesario escribir la variable y solo un "return"
    return s;  
}
console.log(saludo3("Ulises")); 

var saludo4=nombre=>"Hola "+nombre; 
console.log(saludo4("Pancracio")); 

//Función Anónima
var saludo5=function(){
    console.log("hola");
}
saludo5(); 

var saludo6=()=>{
    console.log("Saludo6");
}

var saludo7=(nombre, s)=>{
    console.log("Hola " +nombre);
    s(); 
}

saludo7("Beethoven", saludo6); 

//hacer un servidor que tenga dos rutas. Crear dos middlewares. Uno imprimirá fecha y hora. Siempre que se entré a la raíz mostrará la fecha y hora
//Otro middleware que mande algún mensaje. Esos middlewares estarán en su propio archivo. 
