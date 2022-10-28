const generateRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * max) + min;
  return number;
};

export default generateRandomNumber;
