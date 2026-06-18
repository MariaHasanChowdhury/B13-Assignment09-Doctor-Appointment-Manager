import axios from "axios";
import DeleteButton from "@/components/appointments/DeleteButton";
import ProtectedRoute from "@/components/ProtectedRoute";

async function getAppointments() {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/appointments"
    );

    return res.data;
  } catch (error) {
    console.error(
      "Error fetching appointments:",
      error
    );

    return [];
  }
}

export default async function AppointmentsPage() {
  const appointments =
    await getAppointments();

  return (
    <ProtectedRoute>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            My Appointments
          </h1>

          <p className="mt-4 text-gray-500">
            Manage your booked appointments.
          </p>
        </div>

        {appointments.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold">
              No Appointments Found
            </h2>
          </div>
        ) : (
          <div className="grid gap-6">
            {appointments.map(
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
      </section>
    </ProtectedRoute>
  );
}