export const debounce = (callback: Function, wait: number, leading: boolean): Function => {
  let timeout: number = -1;

  return (...args: object[]) => {
    const invokeImmediately = leading && timeout !== -1;

    const invokeTrailing = () => {
      timeout = -1;
      !leading && callback(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(invokeTrailing, wait);
    invokeImmediately && callback(...args);
  }
}

export const throttle = (callback: Function, wait: number): Function => {
  let timeout: number = -1;

  return (...args: object[]) => {
    if(timeout != -1) {
      callback(...args);
      timeout = setTimeout(() => timeout = -1, wait);
    }
  }
}