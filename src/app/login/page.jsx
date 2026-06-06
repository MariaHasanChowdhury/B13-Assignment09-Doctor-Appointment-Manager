"use client";

import { authClient } from "@/lib/auth";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { loginUser } = useAuth();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const user = {
        name: "Google User",
        email: "googleuser@gmail.com",
        photo: "https://i.pravatar.cc/150",
      };

      loginUser(user);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">
        Login
      </h1>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary"
      >
        Continue with Google
      </button>
    </div>
  );
}