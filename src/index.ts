import { Pizza } from './pizza/Pizza';
import { PizzaMargherita } from './pizza/PizzaMargherita';
import { PizzaHam } from './pizza/PizzaHam';

const basicPizza = new Pizza('basic');
const margherita = new PizzaMargherita();
const ham = new PizzaHam();

console.log(basicPizza);
console.log(margherita);
console.log(ham);

console.log('\n\n');

console.log({ margheritaName: margherita.name, hamName: ham.name, basicName: basicPizza.name });

console.log('\n\n');

console.log(basicPizza.bake(3));

console.log('\n\n');

console.log(margherita.bake(2));
