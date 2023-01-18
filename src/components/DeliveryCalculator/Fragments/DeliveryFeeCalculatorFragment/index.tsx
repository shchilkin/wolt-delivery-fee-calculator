import { DeliveryFeeCalculatorChildProps } from "../../../../shared";
import Input from "../../../Input";
import minMaxValueGuard from "../../../../utils/minMaxValueGuard";
import formatDate from "../../../../utils/formatDate";
import React from "react";
import { useSnackbar } from "notistack";

interface DeliveryFeeCalculatorFragmentProps
  extends DeliveryFeeCalculatorChildProps {
  setCartValue: (value: number) => void;
  setDeliveryDistance: (value: number) => void;
  setDate: (value: Date) => void;
  setAmountOfItems: (value: number) => void;
}

export const DeliveryFeeCalculatorFragment: React.FunctionComponent<DeliveryFeeCalculatorFragmentProps> = ({
  amountOfItems,
  date,
  cartValue,
  deliveryDistance,
  setShowResult,
  setCartValue,
  setDeliveryDistance,
  setDate,
  setAmountOfItems,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <>
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
  );
};

export default DeliveryFeeCalculatorFragment;