// Method decorator example
export const MeasurePerformance = (status: 'on' | 'off' = 'off') => {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    if(status == 'on') {
      descriptor.value = async function(...args: Array<any>) {
        const start = new Date(); // use performance.now() in browser
        const result = await originalMethod.apply(this, args);
        const finish = new Date(); // use performance.now() in browser
        console.log(`Execution time: ${ ((finish.getTime() - start.getTime()) / 1000).toFixed(1) } seconds`);
        return result;
      };
    }

    return descriptor;
  };
};
