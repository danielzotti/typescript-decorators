import { Pizza } from './Pizza';
import { PizzaLogger } from '../decorators/PizzaLogger';
import { AddBasicIngredients } from '../decorators/AddBasicIngredients';

@PizzaLogger
@AddBasicIngredients
export class PizzaMargherita extends Pizza {
  constructor(name?: string) {
    super(name ? name : 'margherita');
  }
}
