"use client";

import { useState } from "react";
import api from "@/services/api";
import toast from "react-hot-toast";

export default function UpdateAppointmentModal({
  appointment,
  onClose,
  onUpdated,
}) {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const updatedData = {
      patientName:
        form.patientName.value,
      appointmentTime:
        form.appointmentTime.value,
    };

    try {
      const res = await api.put(
        `/appointments/${appointment._id}`,
        updatedData
      );

      toast.success(
        "Appointment updated successfully!"
      );

      onUpdated(res.data);

      onClose();
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to update appointment"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Update Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            value={
              appointment.doctorId?.name
            }
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <input
            type="email"
            value={
              appointment.patientEmail
            }
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <input
            type="text"
            name="patientName"
            defaultValue={
              appointment.patientName
            }
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="appointmentTime"
            defaultValue={
              appointment.appointmentTime
            }
            className="input input-bordered w-full"
            required
          />

          <div className="flex gap-3 pt-2">

            <button
              type="submit"
              disabled={loading}
              className="btn btn-success flex-1"
            >
              {loading
                ? "Updating..."
                : "Save Changes"}
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