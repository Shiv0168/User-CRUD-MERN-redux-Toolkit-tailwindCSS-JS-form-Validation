import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAsync, selectUser } from "./userSlice";

export default function Home() {
  // const [people, setPeople] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  useEffect(() => {
    dispatch(getAllUserAsync());
    // getAllPeople();
  }, []);

  // const getAllPeople = async () => {
  //   try {
  //     const data = await fetch("http://localhost:8080/api/user");
  //     const response = await data.json();
  //     setPeople(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDeleteUser = async (_id) => {
    try {
      await fetch(`http://localhost:8080/api/user/${_id}`, {
        method: "DELETE",
      });
      getAllPeople();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Users. You can add new Users, edit or delete
              existing ones.
            </p>
          </div>
          <div>
            <Link to={"/add"}>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new employee
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Username</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Password
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((person) => (
                      <tr key={person._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.email}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-700">
                            {person.password}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person._id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link
                            to={`/edit/${person._id}`}
                            className="-ms-5 me-3"
                          >
                            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleteUser(person._id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
