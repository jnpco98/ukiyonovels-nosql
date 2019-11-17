export const debounce = (callback, wait, leading) => {
  let timeout;

  return (...args) => {
    const invokeImmediately = leading && !timeout;

    const invokeTrailing = () => {
      timeout = null;
      !leading && callback(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(invokeTrailing, wait);
    invokeImmediately && callback(...args);
  }
}

export const throttle = (callback, wait) => {
  let timeout;

  return (...args) => {

    if(!timeout) {
      callback(...args);
      timeout = setTimeout(() => timeout = null, wait);
    }
  }
}