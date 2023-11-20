import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [people, setPeople] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const nav = useNavigate();

  const onChangeEvent = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const createUser = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!people.username.trim()) {
      errors.username = "username required !!!";
    }
    if (!people.email.trim()) {
      errors.email = "email required !!!";
    }
    if (!people.password.trim()) {
      errors.password = "password required !!!";
    }
    setError(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await fetch("http://localhost:8080/api/user", {
          method: "POST",
          body: JSON.stringify(people),
          headers: { "content-type": "application/json" },
        });
        nav("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-1 py-2 sm:px-2 sm:py-6 lg:px-6 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Add Users Here
          </h2>
          <form className="mt-8" onSubmit={(e) => createUser(e)}>
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
                    value={people.username}
                    name="username"
                    onChange={onChangeEvent}
                  ></input>
                  {error.username && (
                    <p className="text-red-500 mt-2 text-sm">
                      {error.username}
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
                    name="email"
                    value={people.email}
                    onChange={onChangeEvent}
                  ></input>
                  {error.email && (
                    <p className="text-red-500 mt-2 text-sm">{error.email}</p>
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
                    name="password"
                    value={people.password}
                    onChange={onChangeEvent}
                  ></input>
                  {error.password && (
                    <p className="text-red-500 mt-2 text-sm">
                      {error.password}
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
