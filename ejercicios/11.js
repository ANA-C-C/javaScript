function esMayorDeEdad(fechaNacimiento) {
  //La funcion recibe un argumento "fechaNacimiento" correspondiente a la fecha
  //de nacimiento de una persona.
  //Determina si esta persona es mayor de edad (tiene 18 años o mas)
  //devuelve true si lo es, caso contrario, retorna false
  //PISTA: Investiga el metodo getFullYear() de la clase Date para obtener el año actual
  //Tu codigo:
  
  // Obtener la fecha actual
  var fechaActual = new Date();
  
  // Obtener el año actual
  var añoActual = fechaActual.getFullYear();
  
  // Obtener el año de nacimiento de la fecha de nacimiento
  var añoNacimiento = fechaNacimiento.getFullYear();
  
  // Calcular la edad restando el año de nacimiento del año actual
  var edad = añoActual - añoNacimiento;
  
  // Verificar si la edad es mayor o igual a 18

  if (edad >=18) {
    return true;
    
  } else {
    return false;
    
  } 
  

}

module.exports = esMayorDeEdad;