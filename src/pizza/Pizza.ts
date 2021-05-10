import { PizzaLogger } from '../decorators/PizzaLogger';
import { AppendEmoji } from '../decorators/AppendEmoji';
import { MeasurePerformance } from '../decorators/MeasurePerformance';

@PizzaLogger
export class Pizza {

  // @AppendEmoji('🍕') // TODO: problem with "inheritance"!
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @MeasurePerformance('on')
  async bake(seconds: number) {
    return await new Promise<boolean>((resolve, reject) => {
      console.log(`I'm baking ${this.name}...`);
      setTimeout(() => {
        console.log(`\nPizza ${this.name} is ready!`);
        resolve(true);
      }, (seconds * 1000));
    });
  }
}
