import Input from "../Input";
import React from "react";
import formatDate from "../../utils/formatDate";
import calculateDeliveryFee from "../../utils/calculateDeliveryFee";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const [cartValue, setCartValue] = React.useState(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState(0);
  const [amountOfItems, setAmountOfItems] = React.useState(0);

  //  TODO: add guard, because inputs should only contain positive values, return the number if the number is positive, otherwise return 0

  return (
    <div
      className={"bg-white drop-shadow-2xl"}
      style={{
        borderRadius: "12px",
        padding: "24px 24px",
        display: "inline-block",
      }}
    >
      <h1 className={"font-semibold text-lg mb-3"}>Delivery Fee Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
        }}
      >
        <Input
          id={"cartValue"}
          name={"cartValue"}
          step={"0.01"}
          type={"number"}
          label={"Cart Value"}
          htmlFor={"cartValue"}
          supportingText={"€"}
          value={cartValue.toString()}
          onChange={(e) => {
            setCartValue(parseFloat(e.target.value));
            setShowResult(false);
          }}
        />
        <Input
          id={"deliveryDistance"}
          name={"deliveryDistance"}
          supportingText={"m"}
          step={"0.01"}
          type={"number"}
          label={"Delivery Distance"}
          htmlFor={"deliveryDistance"}
          value={deliveryDistance.toString()}
          onChange={(e) => {
            setDeliveryDistance(parseFloat(e.target.value));
            setShowResult(false);
          }}
        />
        <Input
          id={"amountOfItems"}
          name={"amountOfItems"}
          step={"1"}
          type={"number"}
          label={"Amount of Items"}
          htmlFor={"amountOfItems"}
          value={amountOfItems.toString()}
          onChange={(e) => {
            setAmountOfItems(parseFloat(e.target.value));
            setShowResult(false);
          }}
        />
        <Input
          id={"dateTime"}
          name={"dateTime"}
          step={"60"}
          type={"datetime-local"}
          value={formatDate(date)}
          label={"Time"}
          htmlFor={"dateTime"}
          onChange={(e) => {
            const [date, time] = e.target.value.split("T");
            console.log(e.target.value);
            const newDate = new Date(date + " " + time);
            console.log(date, newDate.toLocaleDateString());
            console.log(time, newDate.toLocaleTimeString());
            setDate(newDate);
          }}
        />

        {/*  TODO: Set min date for Date time input  as current date*/}

        <input
          type="submit"
          value="Calculate delivery fee"
          className={"mt-4 bg-sky-400 text-white hover:bg-sky-300"}
          style={{
            borderRadius: "8px",
            padding: "8px 16px",
            border: "none",
            fontWeight: "bold",
          }}
        />
      </form>
      {showResult && (
        <div>
          <h1>
            Delivery Price:
            {calculateDeliveryFee(
              cartValue,
              deliveryDistance,
              amountOfItems,
              date
            )}
            €
          </h1>
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
