import deliveryDistanceCost from "../deliveryDistanceCost";
import numberOfItemsCost from "../numberOfItemsCost";
import withFridayRushFee from "../withFridayRushFee/Index";

const calculateDeliveryFee = (
  cartValue: number,
  distance: number,
  numberOfItems: number,
  date: Date
): number => {
  if (cartValue >= 100) return 0;

  const baseDeliveryFee = 1;
  const deliveryDistanceFee = deliveryDistanceCost(distance);
  const numberOfItemsFee = numberOfItemsCost(numberOfItems);

  const deliveryFee = withFridayRushFee(
    baseDeliveryFee + deliveryDistanceFee + numberOfItemsFee,
    date
  );

  if (deliveryFee > 15) return 15;

  return deliveryFee;
};

export default calculateDeliveryFee;
