import React from "react";
import DeliveryFeePreview from "./Fragments/DeliveryFeePreviewFragment";
import DeliveryFeeCalculator from "./Fragments/DeliveryFeeCalculatorFragment";
import Toggle from "../Toggle";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const [cartValue, setCartValue] = React.useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState<number>(0);
  const [amountOfItems, setAmountOfItems] = React.useState<number>(0);
  const [showHelpers, setShowHelpers] = React.useState<boolean>(false);

  return (
    <div className={"flex flex-col gap-3"}>
      <div
        className={`${
          showResult ? "bg-sky-400 text-white" : "bg-white"
        } drop-shadow-2xl p-[24px] rounded-[12px] inline-block  min-w-[400px]`}
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
            showHelpers={showHelpers}
          />
        )}
      </div>
      {!showResult && (
        <div
          className={
            "bg-white drop-shadow-2xl rounded-[12px] px-[24px] py-[24px] inline-block min-w-[400px]"
          }
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Toggle
              label={"Show helper chips"}
              value={showHelpers}
              onChange={setShowHelpers}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
