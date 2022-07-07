import { createAll, cleanConsole } from "./data";
const companies = createAll();

cleanConsole(1, companies);


// TODO: Crear una función tomando la variable "companies" como parámetro  
export const exampleOne = (companies) => {
    return companies.map(company => {
        // El nombre de cada "company" debe tener una letra mayúscula al principio
        company.name = company.name.charAt(0).toUpperCase() + company.name.slice(1)
        company.users = company.users.map(user => {
            // reemplazando todos los valores "undefined" en "usuarios" por un string vacío.
            user.firstName === undefined
                ? (user.firstName = "") // El nombre y apellifo de cada "user" debe tener una letra mayúscula al principio
                : user.firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
            user.lastName === undefined
                ? (user.lastName = "")
                : user.lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
            return user;
        }).sort((a, b) => a.firstName.localeCompare(b.firstName)); // Los "users" de cada "company" deben aparecer en orden alfabético.

        return company
    }).sort((a, b) => b.usersLength - a.usersLength); // // Las "companies" deben ordenarse por su total de "user" (orden decreciente)
}

console.log("---- EXAMPLE 1 --- ", exampleOne(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
