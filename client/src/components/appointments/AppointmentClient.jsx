"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function AppointmentsClient({
  appointments,
}) {
  const [search, setSearch] =
    useState("");

  const filteredAppointments =
    appointments.filter(
      (appointment) =>
        appointment?.doctorId?.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by Doctor Name..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="input input-bordered w-full"
        />
      </div>

      {filteredAppointments.length ===
      0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold">
            No Appointments Found
          </h2>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredAppointments.map(
            (appointment) => (
              <div
                key={
                  appointment._id
                }
                className="bg-white border rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-blue-600">
                  {
                    appointment
                      .doctorId?.name
                  }
                </h2>

                <p>
                  <strong>
                    Specialty:
                  </strong>{" "}
                  {
                    appointment
                      .doctorId
                      ?.specialty
                  }
                </p>

                <p>
                  <strong>
                    Patient:
                  </strong>{" "}
                  {
                    appointment.patientName
                  }
                </p>

                <p>
                  <strong>
                    Email:
                  </strong>{" "}
                  {
                    appointment.patientEmail
                  }
                </p>

                <p>
                  <strong>
                    Time:
                  </strong>{" "}
                  {
                    appointment.appointmentTime
                  }
                </p>

                <DeleteButton
                  appointmentId={
                    appointment._id
                  }
                />
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}