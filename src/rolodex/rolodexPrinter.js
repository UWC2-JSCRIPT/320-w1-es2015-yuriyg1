// import people from './people.json';
const people = require('./people.json'); // Seems to work/import the json data

people.forEach(function (person) {
  const {name, email, phone} = person // Object Destructuring
  const [firstName, lastName] = name.split(" "); // Array Destructuring
  // console.log(typeof(name), typeof(firstName), typeof(lastName))

  // const names = person.name.split(' ');
  // const firstName = names[0];
  // const lastName = names[1];
  // const email = person.email;
  // const phone = person.phone;


  // console.log('First name: ' + firstName + '\nLast name: ' + lastName + '\nEmail: ' + email + '\nPhone number: ' + phone + '\n');
  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${email} \nPhone number: ${phone}\n`);

});
