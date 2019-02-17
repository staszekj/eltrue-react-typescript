export const fetchItems = oldData => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(oldData.concat(Array.from({length: 20})));
    }, 1000)
  });
}
