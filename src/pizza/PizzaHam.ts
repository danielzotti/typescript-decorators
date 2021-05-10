import { PizzaLogger } from '../decorators/PizzaLogger';
import { PizzaMargherita } from './PizzaMargherita';

@PizzaLogger
export class PizzaHam extends PizzaMargherita {
  constructor() {
    super('ham');
    (this as any).ingredients.push('ham')
  }
}
