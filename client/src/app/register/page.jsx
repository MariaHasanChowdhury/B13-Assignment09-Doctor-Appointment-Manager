"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useState,
} from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [error, setError] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (
      !passwordRegex.test(
        password
      )
    ) {
      setError(
        "Password must contain uppercase, lowercase and minimum 6 characters."
      );

      return;
    }

    toast.success(
      "Registration Successful!"
    );

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={
            handleRegister
          }
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}