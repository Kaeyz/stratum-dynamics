import React from "react";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = (props: TextInputProps) => {
  const { placeholder, value, onChange } = props;
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border-b border-dashed pt-8 text-dark_gray outline-none"
    />
  );
};
