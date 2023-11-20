import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useFormAction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserAsync } from "./userSlice";
import { useForm } from "react-hook-form";

export default function Add() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <section>
      <div className="flex items-center justify-center px-1 py-2 sm:px-2 sm:py-6 lg:px-6 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Add Users Here
          </h2>
          <form
            className="mt-8"
            onSubmit={handleSubmit((data) => {
              dispatch(createUserAsync(data));
              nav("/");
            })}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Username{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="username"
                    id="username"
                    {...register("username", {
                      required: "username required !!!",
                    })}
                  ></input>
                  {errors.username && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="email"
                    id="email"
                    {...register("email", {
                      required: "email required !!!",
                    })}
                  ></input>
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register("password", {
                      required: "password required !!!",
                    })}
                  ></input>
                  {errors.password && (
                    <p className="text-red-500 mt-2 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Add user <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
