const isFridayRush = (date: Date): boolean => {
  if (date.getDay() === 5) {
    if (date.getHours() >= 15 && date.getHours() <= 19) {
      return true;
    }
  }
  return false;
};

export default isFridayRush;
