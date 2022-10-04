const generateRandomNumber = (min, max) => {
  const mini = min;
  const maxi = max;
  return Math.floor(Math.random() * (maxi - mini)) + mini;
};

export default generateRandomNumber;
