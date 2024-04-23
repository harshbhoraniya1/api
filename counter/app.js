const items = document.querySelectorAll('.number');

const updateCount = (v) => {
  const value = +(v.dataset.value);
 
  

  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      v.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    v.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};


items.forEach((item) => {
  updateCount(item);
});