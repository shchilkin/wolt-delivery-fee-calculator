import React from "react";

interface QuickInputChipProps {
  value: number;
  setValue: (value: number) => void;
  type: "cartValue" | "deliveryDistance" | "amountOfItems";
}

const typeToLabel = {
  cartValue: "€",
  deliveryDistance: "m",
  amountOfItems: "",
};

const QuickInputChip: React.FunctionComponent<QuickInputChipProps> = ({
  value,
  setValue,
  type,
}) => {
  return (
    <div
      className={`border-sky-400 border-2 ${
        type === "amountOfItems" ? "px-5" : "px-3"
      } rounded-full inline-block mx-0.5 cursor-pointer flex justify-center items-center`}
      onClick={() => setValue(value)}
    >
      <span className={"text-sm font-bold text-sky-400 cursor-inherit py-0.5"}>
        {value}
        {typeToLabel[type]}
      </span>
    </div>
  );
};

export default QuickInputChip;
