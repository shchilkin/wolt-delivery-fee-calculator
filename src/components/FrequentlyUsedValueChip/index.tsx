import React from "react";

interface FrequentlyUsedValueChipProps {
  value: number;
  setValue: (value: number) => void;
  type: "cartValue" | "deliveryDistance" | "amountOfItems";
}

const typeToLabel = {
  cartValue: "€",
  deliveryDistance: "m",
  amountOfItems: "",
};

const FrequentlyUsedValueChip: React.FunctionComponent<FrequentlyUsedValueChipProps> = ({
  value,
  setValue,
  type,
}) => {
  return (
    <div
      className={`bg-sky-400 py-1 ${
        type === "amountOfItems" ? "px-5" : "px-3"
      } rounded-full inline-block mx-0.5 cursor-pointer`}
      onClick={() => setValue(value)}
    >
      <span className={"text-sm text-white cursor-inherit"}>
        {value}
        {typeToLabel[type]}
      </span>
    </div>
  );
};

export default FrequentlyUsedValueChip;
