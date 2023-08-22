import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";

declare type TextInputProps = {
  name: string;
  control: Control;
  type?: React.HTMLInputTypeAttribute;
  defaulValues?: any;
  rules?: RegisterOptions;
  placeholder?: string;
  className?: string;
};

export default function TextInput({
  name,
  control,
  type = "text",
  defaulValues,
  rules,
  placeholder,
  className = "",
}: TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaulValues}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <input
          type={type}
          onChange={(text) => onChange(text)}
          value={value}
          placeholder={placeholder}
          className={`p-2 mb-4 rounded opacity-80 border border-gray-300 focus:border-gray-500 outline-none ${className}`}
        />
      )}
    />
  );
}
