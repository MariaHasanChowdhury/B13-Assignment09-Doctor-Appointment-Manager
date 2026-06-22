"use client";

import { useState } from "react";
import api from "@/services/api";
import toast from "react-hot-toast";

export default function UpdateAppointmentModal({
  appointment,
  onClose,
  onUpdated,
}) {
  const [patientName, setPatientName] =
    useState(
      appointment.patientName || ""
    );

  const [appointmentTime, setAppointmentTime] =
    useState(
      appointment.appointmentTime || ""
    );

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.put(
        `/appointments/${appointment._id}`,
        {
          patientName,
          appointmentTime,
        }
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Update Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Doctor Name */}

          <input
            type="text"
            value={
              appointment.doctorId?.name
            }
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          {/* Email */}

          <input
            type="email"
            value={
              appointment.patientEmail
            }
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          {/* Name */}

          <input
            type="text"
            value={patientName}
            onChange={(e) =>
              setPatientName(
                e.target.value
              )
            }
            className="input input-bordered w-full"
            required
          />

          {/* Time */}

          <input
            type="text"
            value={appointmentTime}
            onChange={(e) =>
              setAppointmentTime(
                e.target.value
              )
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