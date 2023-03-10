import { DeliveryFeeCalculatorChildProps } from "../../../../shared";
import Input from "../../../Input";
import formatDate from "../../../../utils/formatDate";
import React, { ChangeEvent } from "react";
import { useSnackbar } from "notistack";
import FrequentlyUsedValueChip from "../../../QuickInputChip";
import FrequentlyUsedValueChipContainer from "../../../QuickInputChipContainer";
import isValidValue from "../../../../utils/isValidValue";

interface DeliveryFeeCalculatorFragmentProps
  extends DeliveryFeeCalculatorChildProps {
  setCartValue: (value: number) => void;
  setDeliveryDistance: (value: number) => void;
  setDate: (value: Date) => void;
  setAmountOfItems: (value: number) => void;
  showFrequentlyUsed: boolean;
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
  showFrequentlyUsed,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const cartAmountHelperValues = [10, 15, 25, 50, 100];
  const deliveryDistanceHelpersValues = [500, 1000, 1500, 2000];
  const amountOfItemsHelperValues = [1, 4, 5, 12, 99];

  const handleCartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    isValidValue(Number(e.target.value), minCartValue, maxCartValue) &&
      setCartValue(Number(e.target.value));
    setShowResult(false);
  };

  const handleDeliveryDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    isValidValue(
      parseFloat(e.target.value),
      minDeliveryDistance,
      maxDeliveryDistance
    ) && setDeliveryDistance(parseFloat(e.target.value));
    setShowResult(false);
  };

  const handleAmountOfItemsChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    isValidValue(
      parseFloat(e.target.value),
      minAmountOfItems,
      maxAmountOfItems
    ) && setAmountOfItems(parseFloat(e.target.value));

    setShowResult(false);
  };

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
          onChange={handleCartValueChange}
        />
        {showFrequentlyUsed && (
          <FrequentlyUsedValueChipContainer>
            {cartAmountHelperValues.reverse().map((value) => (
              <FrequentlyUsedValueChip
                value={value}
                setValue={setCartValue}
                type={"cartValue"}
              />
            ))}
          </FrequentlyUsedValueChipContainer>
        )}

        <Input
          id={"deliveryDistance"}
          name={"deliveryDistance"}
          supportingText={"m"}
          step={"1"}
          type={"number"}
          min={"0"}
          max={"50000"}
          label={"Delivery Distance"}
          htmlFor={"deliveryDistance"}
          value={deliveryDistance.toString()}
          onChange={handleDeliveryDistanceChange}
        />

        {showFrequentlyUsed && (
          <FrequentlyUsedValueChipContainer>
            {deliveryDistanceHelpersValues.reverse().map((value) => (
              <FrequentlyUsedValueChip
                value={value}
                setValue={setDeliveryDistance}
                type={"deliveryDistance"}
              />
            ))}
          </FrequentlyUsedValueChipContainer>
        )}

        <Input
          id={"amountOfItems"}
          name={"amountOfItems"}
          step={"1"}
          min={"0"}
          max={"1000"}
          type={"number"}
          label={"Amount of Items"}
          htmlFor={"amountOfItems"}
          value={amountOfItems.toString()}
          onChange={handleAmountOfItemsChange}
        />
        {showFrequentlyUsed && (
          <FrequentlyUsedValueChipContainer>
            {amountOfItemsHelperValues.reverse().map((value) => (
              <FrequentlyUsedValueChip
                value={value}
                setValue={setAmountOfItems}
                type={"amountOfItems"}
              />
            ))}
          </FrequentlyUsedValueChipContainer>
        )}

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
