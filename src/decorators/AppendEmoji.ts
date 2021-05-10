// Property decorator example
export const AppendEmoji = (emoji: string) => {
  return function(target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = (): string => {
      return value;
    };

    const setter = (newValue: string) => {
      value = `${ newValue } ${ emoji }`;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  };
};
