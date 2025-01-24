import { InputFieldProps } from "@/types/form";
import React from "react";

const InputField: React.FC<InputFieldProps> = ({ label, id, type, register, error }) => {
  return (
    <div>
      <label htmlFor={id} className="text-secondary text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className="block border border-secondary w-full rounded-md min-w-0 grow py-1 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-1 sm:text-sm/6"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
