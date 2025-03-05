import React from "react";

interface InputProps {
  type: "checkbox" | "radio"; // Supports both types
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  name?: string; // Required for radio buttons to group them
}

const RadioCheckboxInput: React.FC<InputProps> = ({
  type,
  label,
  checked,
  onChange,
  name,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
      />
      <span className="text-lg font-medium text-gray-900">{label}</span>
    </label>
  );
};

export default RadioCheckboxInput;
