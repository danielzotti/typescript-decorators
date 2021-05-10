import { Pizza } from './Pizza';
import { PizzaLogger } from '../decorators/PizzaLogger';

@PizzaLogger
export class PizzaMargherita extends Pizza {
  constructor(name?: string) {
    super(name ? name : 'margherita');
    this.name = name ? name : 'margherita';
  }
}
