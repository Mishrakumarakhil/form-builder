export const debounce = (fn: Function, time: number) => {
  let timerRef: any;
  return function (...args: any) {
    console.log("tmer ref", timerRef);
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
