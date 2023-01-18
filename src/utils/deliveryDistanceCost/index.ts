// A delivery fee for the first 1000 meters (=1km) is 2€.
// If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination.
// Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
// Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
// Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
// Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€

const deliveryDistanceCost = (distance: number) => {
  if (distance <= 500) {
    return 1;
  }

  if (distance <= 1000) {
    return 2;
  }

  const additionalDistance = distance - 1000;
  const additionalDistanceFee = Math.ceil(additionalDistance / 500);
  return 2 + additionalDistanceFee;
};

export default deliveryDistanceCost;
