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
  const lessThan10EurOrderSurcharge = cartValue < 10 ? 10 - cartValue : 0;

  const deliveryFee = withFridayRushFee(
    baseDeliveryFee +
      deliveryDistanceFee +
      numberOfItemsFee +
      lessThan10EurOrderSurcharge,
    date
  );

  if (deliveryFee > 15) return 15;

  return deliveryFee;
};

export default calculateDeliveryFee;
