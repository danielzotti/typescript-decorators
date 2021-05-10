// Class decorator example
export function PizzaLogger(constructor: Function) {
  console.log(`You initialized a pizza with "${ constructor.name }" constructor`);
}
