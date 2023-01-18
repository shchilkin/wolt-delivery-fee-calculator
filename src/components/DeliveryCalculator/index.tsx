import Input from "../Input";
import React from "react";
import formatDate from "../../utils/formatDate";
import calculateDeliveryFee from "../../utils/calculateDeliveryFee";
import minMaxValueGuard from "../../utils/minMaxValueGuard";
import { useSnackbar } from "notistack";

const DeliveryCalculator = () => {
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const [cartValue, setCartValue] = React.useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = React.useState<number>(0);
  const [amountOfItems, setAmountOfItems] = React.useState<number>(0);

  const { enqueueSnackbar } = useSnackbar();

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
        <div>
          <h3 className={"font-semibold"}>Delivery Price for the order is:</h3>
          <h1 className={"text-5xl font-bold mt-2 mb-4"}>
            {calculateDeliveryFee(
              cartValue,
              deliveryDistance,
              amountOfItems,
              date
            )}
            €
          </h1>
          <p>
            {amountOfItems} items with cart price of {cartValue}€ and delivery
            distance of {deliveryDistance}m
          </p>
          <button
            className={"mt-4 bg-white text-sky-400 hover:bg-sky-50"}
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
      ) : (
        <>
          <h1 className={"font-semibold text-lg mb-3"}>
            Delivery Fee Calculator
          </h1>
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
              min={"0"}
              max={"100000"}
              onChange={(e) => {
                const minCartValue = 0;
                const maxCartValue = 100000;

                if (minCartValue > Number(e.target.value)) {
                  enqueueSnackbar("Minimal cart value is 0 €", {
                    variant: "error",
                  });
                }

                if (maxCartValue < Number(e.target.value)) {
                  enqueueSnackbar("Maximal cart value is 100000 €", {
                    variant: "error",
                  });
                }

                setCartValue(
                  minMaxValueGuard(
                    parseFloat(e.target.value),
                    minCartValue,
                    maxCartValue
                  )
                );
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
                const minDeliveryDistance = 0;
                const maxDeliveryDistance = 50000; // 50km

                if (minDeliveryDistance > Number(e.target.value)) {
                  enqueueSnackbar("Minimal delivery distance is 0 m", {
                    variant: "error",
                  });
                }

                if (maxDeliveryDistance < Number(e.target.value)) {
                  enqueueSnackbar("Maximal delivery distance is 50000 m", {
                    variant: "error",
                  });
                }

                setDeliveryDistance(
                  minMaxValueGuard(
                    parseFloat(e.target.value),
                    minDeliveryDistance,
                    maxDeliveryDistance
                  )
                );
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
                const maxAmountOfItems = 5000;
                const minAmountOfItems = 0;
                if (maxAmountOfItems < parseFloat(e.target.value)) {
                  enqueueSnackbar("The maximum amount of items is 5000", {
                    variant: "error",
                  });
                }
                if (minAmountOfItems > parseFloat(e.target.value)) {
                  enqueueSnackbar("The minimum amount of items is 0", {
                    variant: "error",
                  });
                }
                setAmountOfItems(
                  minMaxValueGuard(
                    parseFloat(e.target.value),
                    minAmountOfItems,
                    maxAmountOfItems
                  )
                );
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

                const newDate = new Date(date + " " + time);

                setDate(newDate);
              }}
            />

            <input
              type="submit"
              value="Calculate delivery fee"
              className={
                "disabled:bg-gray-300 disabled:cursor-not-allowed" +
                " " +
                "font-bold mt-4 bg-sky-400 text-white rounded-md px-4 py-2 border-none" +
                " " +
                "enabled:hover:bg-sky-300"
              }
              disabled={
                amountOfItems === 0 || cartValue === 0 || deliveryDistance === 0
              }
            />
          </form>
        </>
      )}
    </div>
  );
};

export default DeliveryCalculator;
