export interface DeliveryFeeCalculatorChildProps {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: Date;
  setShowResult: (showResult: boolean) => void;
}
