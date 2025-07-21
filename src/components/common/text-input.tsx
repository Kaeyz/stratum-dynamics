import React from "react";

type TextInputProps = {
  placeholder: string;
};

export const TextInput = (props: TextInputProps) => {
  const { placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className="w-full border-b border-dashed pt-8 text-dark_gray outline-none"
    />
  );
};
