"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import DeleteButton from "@/components/appointments/DeleteButton";
import UpdateAppointmentModal from "@/components/appointments/UpdateAppointmentModal";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/providers/AuthProvider";

export default function AppointmentsPage() {
const { user } = useAuth();

const [appointments, setAppointments] =
useState([]);

const [filteredAppointments, setFilteredAppointments] =
useState([]);

const [searchTerm, setSearchTerm] =
useState("");

const [loading, setLoading] =
useState(true);

const [
selectedAppointment,
setSelectedAppointment,
] = useState(null);

useEffect(() => {
const fetchAppointments =
async () => {
try {
const res = await api.get(
`/appointments?email=${user?.email}`
);


      setAppointments(res.data);
      setFilteredAppointments(
        res.data
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

if (user?.email) {
  fetchAppointments();
}


}, [user]);

useEffect(() => {
const filtered =
appointments.filter(
(appointment) =>
appointment?.doctorId?.name
?.toLowerCase()
.includes(
searchTerm.toLowerCase()
)
);


setFilteredAppointments(
  filtered
);


}, [searchTerm, appointments]);

return ( <ProtectedRoute> <section className="max-w-6xl mx-auto px-4 py-16">


    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold">
        My Appointments
      </h1>

      <p className="mt-4 text-gray-500">
        Manage your booked appointments.
      </p>
    </div>

    {/* Search */}

    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by Doctor Name..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="input input-bordered w-full"
      />
    </div>

    {loading ? (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    ) : filteredAppointments.length ===
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
              key={appointment._id}
              className="bg-white border rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-blue-600">
                {
                  appointment
                    .doctorId?.name
                }
              </h2>

              <p className="mt-2">
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
                  Patient Name:
                </strong>{" "}
                {
                  appointment.patientName
                }
              </p>

              <p>
                <strong>
                  Patient Email:
                </strong>{" "}
                {
                  appointment.patientEmail
                }
              </p>

              <p>
                <strong>
                  Appointment Time:
                </strong>{" "}
                {
                  appointment.appointmentTime
                }
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  {
                    appointment.status
                  }
                </span>
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() =>
                    setSelectedAppointment(
                      appointment
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Update
                </button>

                <DeleteButton
                  appointmentId={appointment._id}
                  onDeleted={(id) =>
                  setAppointments(
                  appointments.filter(
                  (item) => item._id !== id
                   )
                  )
                  }
                />
   

              </div>
            </div>
          )
        )}

      </div>
    )}

    {selectedAppointment && (
      <UpdateAppointmentModal
        appointment={
          selectedAppointment
        }
        onClose={() =>
          setSelectedAppointment(
            null
          )
        }
        onUpdated={(
          updatedAppointment
        ) => {
          setAppointments(
            appointments.map(
              (item) =>
                item._id ===
                updatedAppointment._id
                  ? updatedAppointment
                  : item
            )
          );
        }}
      />
    )}

  </section>
</ProtectedRoute>


);
}
