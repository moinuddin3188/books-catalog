/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect, FormEvent } from "react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/features/auth/authSlice";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [login, { data, isLoading, isError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    void login({ email, password });
  };
  
  console.log(data)
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data) {
      navigate("/");

      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: data.data.accessToken,
          user: { email: email, role: "user" }
        })
      );

      dispatch(
        userLogin({
          accessToken: data.data.accessToken,
          user: { email: email, role: "user" },
        })
      );
    }
  }, [data, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
        <form
          action=""
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-md p-4"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
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
              id="password"
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
