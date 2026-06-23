"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import toast from "react-hot-toast";
import api from "@/services/api";

export default function LoginPage() {
const { loginUser } = useAuth();

const router = useRouter();

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const handleEmailLogin = async (
e
) => {
e.preventDefault();


const user = {
  name: "Demo User",
  email,
  photo:
    "https://i.pravatar.cc/150?img=20",
};

try {
  await api.post("/auth/jwt", {
    email: user.email,
  });

  loginUser(user);

  toast.success(
    "Login Successful!"
  );

  router.push("/");
} catch (error) {
  console.log(error);

  toast.error(
    "Login Failed!"
  );
}


};

const handleGoogleLogin =
async () => {
try {
const user = {
name: "Google User",
email:
"[googleuser@gmail.com](mailto:googleuser@gmail.com)",
photo:
"https://i.pravatar.cc/150?img=12",
};


    await api.post(
      "/auth/jwt",
      {
        email: user.email,
      }
    );

    loginUser(user);

    toast.success(
      "Google Login Successful!"
    );

    router.push("/");
  } catch (error) {
    console.log(error);

    toast.error(
      "Login Failed!"
    );
  }
};


return ( <div className="min-h-screen flex justify-center items-center px-4 bg-slate-100"> <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">


    <h1 className="text-4xl font-bold text-center mb-6">
      Login
    </h1>

    <form
      onSubmit={handleEmailLogin}
      className="space-y-4"
    >
      <input
        type="email"
        placeholder="Email Address"
        className="input input-bordered w-full"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
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

      <div className="text-right">
        <Link
          href="#"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Login
      </button>
    </form>

    <div className="divider">
      OR
    </div>

    <button
      onClick={
        handleGoogleLogin
      }
      className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
    >
      Continue with Google
    </button>

    <p className="text-center mt-6">
      Don't have an account?{" "}
      <Link
        href="/register"
        className="text-blue-600 font-semibold hover:underline"
      >
        Register
      </Link>
    </p>

  </div>
</div>


);
}
