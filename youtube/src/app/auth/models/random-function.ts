const getRandomNumber = (max: number): number => {
  const minIndex = Math.ceil(0);
  const maxIndex = Math.floor(max);
  return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
};

export default getRandomNumber;
