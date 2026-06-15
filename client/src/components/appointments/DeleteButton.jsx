"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  appointmentId,
}) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/appointments/${appointmentId}`
      );

      alert(
        "Appointment cancelled successfully!"
      );

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to cancel appointment");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
    >
      Cancel Appointment
    </button>
  );
}