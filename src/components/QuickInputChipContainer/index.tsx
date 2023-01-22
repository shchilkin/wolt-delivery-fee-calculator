import React from "react";

interface QuickInputChipProps {
  children: React.ReactNode;
}

const QuickInputChipContainer: React.FunctionComponent<QuickInputChipProps> = ({
  children,
}) => {
  return (
    <div
      className={"mr-7 mb-4 mt-1 flex flex-row-reverse align-right last:mr-5"}
    >
      {children}
    </div>
  );
};

export default QuickInputChipContainer;
