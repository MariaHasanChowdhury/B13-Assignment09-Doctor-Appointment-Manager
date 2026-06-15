"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { loginUser } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser({
      name: formData.name,
      email: formData.email,
      photo:
        formData.photo ||
        "https://i.pravatar.cc/150?img=12",
    });

    alert("Registration Successful!");

    router.push("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="font-semibold">
              Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="input input-bordered w-full mt-1"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="font-semibold">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Optional photo URL"
              className="input input-bordered w-full mt-1"
              value={formData.photo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  photo: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}