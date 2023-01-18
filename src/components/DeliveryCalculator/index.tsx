import React from "react";
import DeliveryFeePreview from "./Fragments/DeliveryFeePreviewFragment";
import DeliveryFeeCalculator from "./Fragments/DeliveryFeeCalculatorFragment";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const [cartValue, setCartValue] = React.useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState<number>(0);
  const [amountOfItems, setAmountOfItems] = React.useState<number>(0);

  return (
    <div
      className={`${
        showResult ? "bg-sky-400 text-white" : "bg-white"
      } drop-shadow-2xl`}
      style={{
        borderRadius: "12px",
        padding: "24px 24px",
        display: "inline-block",
        minWidth: "400px",
      }}
    >
      {showResult ? (
        <DeliveryFeePreview
          amountOfItems={amountOfItems}
          deliveryDistance={deliveryDistance}
          cartValue={cartValue}
          date={date}
          setShowResult={setShowResult}
        />
      ) : (
        <DeliveryFeeCalculator
          amountOfItems={amountOfItems}
          deliveryDistance={deliveryDistance}
          cartValue={cartValue}
          date={date}
          setShowResult={setShowResult}
          setDeliveryDistance={setDeliveryDistance}
          setAmountOfItems={setAmountOfItems}
          setCartValue={setCartValue}
          setDate={setDate}
        />
      )}
    </div>
  );
};

export default DeliveryCalculator;
