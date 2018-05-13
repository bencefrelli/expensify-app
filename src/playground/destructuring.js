/*const person = {
  name: 'Bence',
  age: 21,
  location: {
    city: 'Veszprém',
    temp: 20
  }
};

const { name: firstName = 'Anonymus', age} = person;

console.log( `${firstName} is ${age}.`);

const { city, temp: temperature} = person.location;

if ( city && temperature) {
  console.log( `It's ${temperature} in ${city}`);
}*/

const address = [ 'Solyi utca 2', 'Veszprém', 'Veszprém', '8200'];

const [ street, city, state, zip] = address;

console.log( `You are in ${city}, ${state}`);

const item = [ 'Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice] = item;

console.log( `A medium ${itemName} costs ${mediumPrice}.`);
