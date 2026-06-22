"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import UpdateProfileModal from "@/components/UpdateProfileModal";

export default function ProfilePage() {
  const { user } = useAuth();

  const [open, setOpen] =
    useState(false);

  return (
    <ProtectedRoute>

      <section className="max-w-4xl mx-auto px-4 py-16">

        <div className="bg-white rounded-2xl shadow-lg border p-8">

          <div className="flex flex-col items-center">

            <img
              src={
                user?.photo ||
                "https://i.pravatar.cc/150"
              }
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />

            <h1 className="text-3xl font-bold mt-6">
              {user?.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {user?.email}
            </p>

            <button
              onClick={() =>
                setOpen(true)
              }
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Update Profile
            </button>

          </div>
        </div>

        {open && (
          <UpdateProfileModal
            onClose={() =>
              setOpen(false)
            }
          />
        )}

      </section>

    </ProtectedRoute>
  );
}