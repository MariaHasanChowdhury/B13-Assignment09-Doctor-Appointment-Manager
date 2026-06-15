import axios from "axios";
import DoctorCard from "@/components/doctors/DoctorCard";

async function getDoctors() {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/doctors"
    );

    return res.data;
  } catch (error) {
    console.error(
      "Error fetching doctors:",
      error
    );

    return [];
  }
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          All Doctors
        </h1>

        <p className="text-lg text-gray-500">
          Browse all available doctors and
          book your appointment easily.
        </p>
      </div>

      {doctors.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold">
            No Doctors Found
          </h2>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      )}
    </section>
  );
}