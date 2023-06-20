class Person{
  constructor(nombre, apellido, edad){
      this.nombre = nombre
      this.apellido=apellido
      this.edad = edad
  }  
  saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
  }
}
const Juan = new Person('Juan', 'García', 20 )
const Marta = new Person('Marta', 'Hernandez', 30)
console.log(Juan.saludar());
console.log(Marta.saludar());