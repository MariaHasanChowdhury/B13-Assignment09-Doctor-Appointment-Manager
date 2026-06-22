"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

export default function UpdateProfileModal({
  onClose,
}) {
  const { user, updateUser } =
    useAuth();

  const [name, setName] =
    useState(user?.name || "");

  const [photo, setPhoto] =
    useState(user?.photo || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      toast.error(
        "Name must be at least 3 characters"
      );
      return;
    }

    const updatedUser = {
      ...user,
      name,
      photo:
        photo.trim() ||
        "https://i.pravatar.cc/150",
    };

    updateUser(updatedUser);

    toast.success(
      "Profile updated successfully!"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Profile
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="input input-bordered w-full"
            placeholder="Full Name"
            required
          />

          <input
            type="text"
            value={photo}
            onChange={(e) =>
              setPhoto(e.target.value)
            }
            className="input input-bordered w-full"
            placeholder="Photo URL"
          />

          <div className="flex gap-3 pt-2">

            <button
              type="submit"
              className="btn btn-success flex-1"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline flex-1"
            >
              Cancel
            </button>

          </div>
        </form>

      </div>

    </div>
  );
}