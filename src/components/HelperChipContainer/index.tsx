import React from "react";

interface HelperChipContainerProps {
  children: React.ReactNode;
}

const HelperChipContainer: React.FunctionComponent<HelperChipContainerProps> = ({
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

export default HelperChipContainer;
