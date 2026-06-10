"use client";

import { useState } from "react";
import api from "@/services/api";

export default function AppointmentForm({
  doctor,
}) {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const appointmentData = {
      doctorId: doctor._id,
      patientName: form.name.value,
      patientEmail: form.email.value,
      appointmentTime: form.time.value,
    };

    try {
      await api.post(
        "/appointments",
        appointmentData
      );

      alert(
        "Appointment booked successfully!"
      );

      form.reset();
    } catch (error) {
      console.error(error);

      alert(
        "Failed to book appointment!"
      );
    }

    setLoading(false);
  };

  return (
    <div className="card bg-base-100 shadow-2xl border border-gray-200 mt-10">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold mb-4">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
            required
          />

          <select
            name="time"
            className="select select-bordered w-full"
            required
          >
            <option value="">
              Select Appointment Time
            </option>

            {doctor.availability?.map(
              (slot, index) => (
                <option
                  key={index}
                  value={slot}
                >
                  {slot}
                </option>
              )
            )}
          </select>

          <button
             type="submit"
             disabled={loading}
             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300"
>
              {loading
              ? "Booking..."
             : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}