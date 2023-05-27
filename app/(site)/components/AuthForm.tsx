"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "login" | "register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  const [isLoading, setLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === "login") {
      setVariant("register");
    } else {
      setVariant("login");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    if (variant === "login") {
      // login
    }

    if (variant === "register") {
      // register
    }
  };

  const scicallyLogin = (provider: string) => {
    setLoading(true);
    // login with provider
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "register" && (
            <Input
              label="Name"
              id="name"
              resister={register}
              required
              errors={errors}
              disabled={isLoading}
            ></Input>
          )}
          <Input
            label="Email address"
            id="email"
            type="email"
            resister={register}
            required
            errors={errors}
            disabled={isLoading}
          ></Input>
          <Input
            label="Password"
            id="password"
            type="password"
            resister={register}
            required
            errors={errors}
            disabled={isLoading}
          ></Input>
          <div>
            <Button type="submit" disabled={isLoading} fullWidth>
              {variant === "login" ? "Sign in" : "Sign up"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
            absolute
            inset-0
            flex
            items-center
            "
            >
              <div
                className="
            w-full
            border-t
            border-gray-300
            "
              ></div>
            </div>
            <div
              className="
                relative
                flex
                justify-center
                text-sm
            "
            >
              <span
                className="
                bg-white
                px-2
                text-gray-500
                "
              >
                Or continue with
              </span>
            </div>
          </div>

          <div
            className="
          mt-6
          flex
            gap-2
          "
          >
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => scicallyLogin("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => scicallyLogin("google")}
            />
          </div>
        </div>

        <div
          className="
        flex
        gap-2
        justify-center
        text-sm
        mt-6
        px-2
        text-gray-500
        "
        >
          <div>
            {variant === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "login" ? "Create an account" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
