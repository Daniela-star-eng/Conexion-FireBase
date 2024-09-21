//Formas de crear objetos. Esto es llamado diccionario de datos. 
//Tiene una clave y un valor

var objeto={  //se inicializa la variable y se agregan los atributos
nombre:"Erick", //un objeto lleva dos puntos
puesto:"Gerente"
}
console.log(objeto); 
objeto.nombre="Juancho"; //aparece la misma información pero con el atributo ya modificado
console.log(objeto); 
objeto.sueldo=1000;
console.log(objeto); 
objeto.correos={
    correo1:"juancho@gmail.com",
    correo2:"juanito@gmail.com"
}
console.log(objeto); 
console.log(objeto.correos.correo2); //para mandar a llamar solamente el correo2. Se describe el objeto, la clase y el atributo