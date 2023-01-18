import isFridayRush from "../isFridayRush";

const withFridayRushFee = (deliveryFee: number, date: Date): number => {
  const rushFridayMultiplier = 1.2;
  return isFridayRush(date) ? deliveryFee * rushFridayMultiplier : deliveryFee;
};

export default withFridayRushFee;
