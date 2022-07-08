import { cleanConsole, createAll } from './data';

const companies = createAll();

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

export const companyById = (id) => {
    return companies.find(company => company.id === id).name;
}

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.
export const companyDeleteById = (id) => {
    return companies.splice(companies.findIndex(company => company.id === id), 1);
}

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

export const companyPatch = (id, payload) => {
    const company = companies.filter((item) => item.id === id);
    if (company) {
        const indice = companies.findIndex((item) => item.id == id);
        Object.keys(payload).map((item) => {
            if (item !== 'users') {
                companies[indice][item] = payload[item];
            }
        });
        return companies[indice];
    }
}

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

export const addUserToCompany = (id, payload) => {
    const company = companies.find((item) => item.id === id);
    if (company) {
        company.users.push({ ...payload, id: Math.random() });
        company.usersLength = company.users.length;
    }
    return company
}

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

export const companyPut = (id, payload) => {
    const aux = companies
    const company = aux.filter((item) => item.id === id);
    if (company) {
        const indice = aux.findIndex((item) => item.id == id);
        aux[indice] = { ...aux[indice], ...payload, users: aux[indice].users };
        return aux[indice];
    }
}

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".
export const deleteUserToCompany = (idCompany, idUser) => {
    const aux = companies;
    const company = aux.findIndex((company) => company.id === idCompany);
    const user = aux[company].users.findIndex((user) => user.id === idUser);
    aux[company].users.splice(user, 1);
    aux[company].usersLength--;
    return aux;
}


// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".
export const userPatchById = (idCompany, idUser, payload) => {
    const company = companies.filter((item) => item.id === idCompany);
    const aux = companies
    if (company) {
        const indiceCompany = aux.findIndex((item) => item.id == idCompany);
        const indiceUser = aux[indiceCompany].users.findIndex((item) => item.id == idUser);
        Object.keys(payload).map((item) => {
            companies[indiceCompany].users[indiceUser][item] = payload[item];
        });

        return aux;
    }
}

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
export const userPutById = (idCompany, idUser, payload) => {
    const company = companies.filter((item) => item.id === idCompany);
    const aux = companies
    if (company) {
        const indiceCompany = aux.findIndex((item) => item.id == idCompany);
        const indiceUser = aux[indiceCompany].users.findIndex((item) => item.id == idUser);
        if (indiceUser !== -1) {
            aux[indiceCompany].users[indiceUser] = { ...aux[indiceCompany].users[indiceUser], ...payload };
        }
        return aux;
    }
}

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.
export const transferidoUsuario = (idCompanyOne, idCompanyTwo, idUser) => {
    const company = companies.filter((item) => item.id === idCompanyOne);
    const aux = companies
    if (company) {
        const companyOne = aux.find((company) => company.id === idCompanyOne);

        const user = companyOne.users.find((user) => user.id === idUser);

        if (user) {
            aux = deleteUserToCompany(idCompanyOne, idUser);
            aux = addUserToCompany(idCompanyTwo, user);
        }
        return aux;
    }
}

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', companies, companyById(7));
console.log('---- EXAMPLE 7 part 2 --- ', companies, companyDeleteById(7));
console.log('---- EXAMPLE 7 part 3 --- ', companies, companyPatch(3, { name: 'Nike-Air', users: [] }));
console.log('---- EXAMPLE 7 part 4 --- ', companies, addUserToCompany(1, { firstName: "Juan", lastName: "Delgado", age: 35, car: true }));
console.log('---- EXAMPLE 7 part 5 --- ', companies, companyPut(3, { id: 200, users: [{ name: 'Juan' }] }));
console.log('---- EXAMPLE 7 part 6 --- ', companies, deleteUserToCompany(6, 5));
console.log('---- EXAMPLE 7 part 7 --- ', companies, userPatchById(1, 9, { lastName: 'Montaño' }));
console.log('---- EXAMPLE 7 part 8 --- ', companies, userPutById(5, 12, { lastName: 'Dolar' }));
console.log('---- EXAMPLE 7 part 9 --- ', companies, transferidoUsuario(5, 1, 12));








// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
