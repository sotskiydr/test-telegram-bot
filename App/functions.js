const randomNum = (num) => {
  return Math.floor(Math.random() * Number(num)) + 1;
};

module.exports = { randomNum };
