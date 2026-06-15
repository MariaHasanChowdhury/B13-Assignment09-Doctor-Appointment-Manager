import axios from "axios";

async function getAppointments() {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/appointments"
    );

    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function AppointmentsPage() {
  const appointments =
    await getAppointments();

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-10">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl">
            No Appointments Found
          </h2>
        </div>
      ) : (
        <div className="grid gap-6">
          {appointments.map(
            (appointment) => (
              <div
                key={appointment._id}
                className="bg-white shadow-lg rounded-xl p-6 border"
              >
                <h2 className="text-2xl font-bold">
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
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}