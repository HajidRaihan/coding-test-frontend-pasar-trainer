"use client";

import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import { loginFormSchema, LoginFormSchema } from "@/lib/validations/login";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormSchema) => {
    alert(`data sudah tersaubmit ${data.email} ${data.password}`);
    if (data) {
      window.location.href = "/pokemon";
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 p-10 bg-primary rounded-md shadow-solid shadow-secondary">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <InputField
            label="Email"
            type="email"
            id="email"
            register={register}
            error={formState.errors.email?.message}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            register={register}
            error={formState.errors.password?.message}
          />
          <SubmitButton>Submit</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
