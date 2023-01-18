import React from "react";

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}
const Toggle: React.FunctionComponent<ToggleProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    //   TODO: fix UI Unsync with state after moving back from preview screen
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={String(value)}
        className="sr-only peer"
        onChange={() => onChange(!value)}
      />
      <div className="w-[42px] h-[25px] bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-[17px] peer-checked:after:border-white after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-[21px] after:w-[21px] after:transition-all peer-checked:bg-sky-400" />
      <span className="ml-3 text-sm font-medium text-gray-600">{label}</span>
    </label>
  );
};
export default Toggle;
