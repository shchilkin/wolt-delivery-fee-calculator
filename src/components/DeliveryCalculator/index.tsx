import Input from "../Input";
import React from "react";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState(false);
  const [date, setDate] = React.useState<Date>(new Date());

  // format date to "yyyy-MM-ddThh:mm"
  const formatDate = (date: Date): string => {
    return (
      "" +
      date.getFullYear() +
      "-" +
      //    add zero before month number if month is less than 10
      (date.getMonth() + 1 < 10 ? "0" : "") +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      "T" +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  };

  // Logic
  //  TODO: add guard, because inputs should only contain positive values, return the number if the number is positive, otherwise return 0
  // Specification
  //
  // Rules for calculating a delivery fee
  //
  // If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
  //     A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
  //     Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
  // Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
  // Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
  // If the number of items is five or more, an additional 50 cent surcharge is added for each item above five. An extra "bulk" fee applies for more than 12 items of 1,20€
  // Example 1: If the number of items is 4, no extra surcharge
  // Example 2: If the number of items is 5, 50 cents surcharge is added
  // Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
  // Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
  // The delivery fee can never be more than 15€, including possible surcharges.
  //     The delivery is free (0€) when the cart value is equal or more than 100€.
  //     During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).

  const calculateDeliveryFee = (
    cartValue: number,
    distance: number,
    numberOfItems: number
  ): number => {
    return 0;
  };

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
          console.log("form submitted");
        }}
      >
        <Input
          id={"cartValue"}
          name={"cartValue"}
          step={"0.01"}
          type={"number"}
          label={"Cart Value"}
          htmlFor={"cartValue"}
        />
        <Input
          id={"deliveryDistance"}
          name={"deliveryDistance"}
          step={"0.01"}
          type={"number"}
          label={"Delivery Distance"}
          htmlFor={"deliveryDistance"}
        />
        <Input
          id={"amountOfItems"}
          name={"amountOfItems"}
          step={"1"}
          type={"number"}
          label={"Amount of Items"}
          htmlFor={"amountOfItems"}
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
          <h1>Delivery Price:</h1>
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
