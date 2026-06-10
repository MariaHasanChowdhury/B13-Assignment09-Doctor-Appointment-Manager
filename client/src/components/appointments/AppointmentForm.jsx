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
      console.log(error);
      alert("Booking failed!");
    }

    setLoading(false);
  };

  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <div className="card-body">
        <h2 className="card-title text-2xl">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          <select
            name="time"
            className="select select-bordered w-full"
            required
          >
            <option value="">
              Select Time Slot
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
            className="btn btn-primary w-full"
            disabled={loading}
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