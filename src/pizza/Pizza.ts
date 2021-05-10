import { PizzaLogger } from '../decorators/PizzaLogger';

@PizzaLogger
export class Pizza {

  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
