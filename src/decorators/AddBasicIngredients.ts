export function AddBasicIngredients<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      ingredients = ['tomato', 'mozzarella']
    }
}
