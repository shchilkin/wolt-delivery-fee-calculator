const isValidValue = (value: number, min: number, max: number) => {
  if (value === 0) return false;
  return !(value < min || value > max);
};

export default isValidValue;
