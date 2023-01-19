import calculateDeliveryFee from "../../../../utils/calculateDeliveryFee";
import React from "react";
import { DeliveryFeeCalculatorChildProps } from "../../../../shared";

const DeliveryFeePreviewFragment: React.FunctionComponent<DeliveryFeeCalculatorChildProps> = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  setShowResult,
}) => {
  return (
    <div>
      <h3 className={"font-semibold"}>Delivery Price for the order is:</h3>
      <h1 className={"text-5xl font-bold mt-2 mb-4"}>
        {calculateDeliveryFee(cartValue, deliveryDistance, amountOfItems, date)}
        €
      </h1>
      <p>
        {amountOfItems} items with cart price of {cartValue}€ and delivery
        distance of {deliveryDistance}m
      </p>
      <button
        id={"goToTheCalculator"}
        className={
          "mt-4 bg-white text-sky-400 hover:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-700"
        }
        style={{
          borderRadius: "8px",
          padding: "8px 16px",
          border: "none",
          fontWeight: "bold",
        }}
        onClick={() => setShowResult(false)}
      >
        Back to the calculator
      </button>
    </div>
  );
};
export default DeliveryFeePreviewFragment;
