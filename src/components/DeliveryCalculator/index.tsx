import Input from "../Input";
import React from "react";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState(false);
  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "8px",
        padding: "24px 16px",
        display: "inline-block",
      }}
    >
      <h1>Delivery Fee Calculator</h1>
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

        {/*  input for time and date*/}

        <input
          type="submit"
          value="Calculate"
          style={{
            backgroundColor: "#118ad8",
            color: "white",
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
