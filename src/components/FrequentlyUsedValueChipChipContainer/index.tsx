import React from "react";

interface FrequentlyUsedValueChipContainerProps {
  children: React.ReactNode;
}

const FrequentlyUsedValueChipContainer: React.FunctionComponent<FrequentlyUsedValueChipContainerProps> = ({
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

export default FrequentlyUsedValueChipContainer;
