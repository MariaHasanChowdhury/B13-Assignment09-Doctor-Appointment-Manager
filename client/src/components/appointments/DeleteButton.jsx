"use client";

import api from "@/services/api";
import toast from "react-hot-toast";

export default function DeleteButton({
  appointmentId,
  onDeleted,
}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/appointments/${appointmentId}`
      );

      toast.success(
        "Appointment deleted successfully!"
      );

      if (onDeleted) {
        onDeleted(appointmentId);
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to delete appointment!"
      );
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
    >
      Delete
    </button>
  );
}