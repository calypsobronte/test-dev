import {cleanConsole, createAll} from './data';
import {exampleFour} from './example-4'
const companies = createAll();

cleanConsole(5, companies);



export const exampleFive = (users) => {
    let size = users.length
    let average = users.reduce((reduce, user) => reduce + user.age, 0) / users.length
    let hasCar = users.filter(user => user.car).length
    let averageWithCar = users.filter(user => user.car).reduce((reduce, user) => reduce + user.age, 0) / users.filter(user => user.car).length

    return {size, average, hasCar, averageWithCar};
}
console.log('---- EXAMPLE 5 --- ', exampleFive(exampleFour(companies)));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
