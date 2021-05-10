import { Pizza } from './pizza/Pizza';
import { PizzaMargherita } from './pizza/PizzaMargherita';
import { PizzaHam } from './pizza/PizzaHam';

const basicPizza = new Pizza('basic');

const margherita = new PizzaMargherita();

const ham = new PizzaHam();

console.log(margherita);

console.log(ham);
