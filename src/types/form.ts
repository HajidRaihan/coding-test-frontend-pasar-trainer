import { LoginFormSchema } from "@/lib/validations/login";
import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  id: keyof LoginFormSchema;
  type: string;
  register: UseFormRegister<LoginFormSchema>;
  error?: string;
}

export interface SubmitButtonProps {
  children: React.ReactNode;
}
