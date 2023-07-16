/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent, useEffect, useState } from "react";
import book from "../assets/book.png";
import {
  useLoginMutation,
  useSignUpMutation,
} from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/features/auth/authSlice";

export default function Signup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signUp, { data, isLoading, isSuccess }] = useSignUpMutation();
  const [login, { data: loginData, isSuccess: loginSuccess }] =
    useLoginMutation();

  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void signUp({
      name: {
        firstName,
        lastName,
      },
      email,
      password,
    });
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      void login({ email, password });
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (loginSuccess) {
      dispatch(
        userLogin({
          accessToken: loginData?.data?.accessToken,
          user: { email, role: "user" },
        })
      );
    }

    localStorage.setItem(
      "auth",
      JSON.stringify({
        accessToken: data.data.accessToken,
        user: { email: email, role: "user" },
      })
    );

    navigate("/");
  }, [loginSuccess, loginData]);

  return (
    <>
      <div className="grid grid-cols-2 gap-0 h-screen">
        <div className="flex items-center justify-center bg-white">
          <img className="h-screen py-10" src={book} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <h1 className="text-center text-2xl font-bold mb-4">Sign up</h1>
            <form
              onSubmit={handleSignUp}
              className="bg-white shadow-lg rounded-md p-4"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="name"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="name"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-focus"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
