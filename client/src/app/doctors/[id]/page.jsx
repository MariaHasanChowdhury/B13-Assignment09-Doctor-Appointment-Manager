import axios from "axios";
import DoctorCard from "@/components/doctors/DoctorCard";

async function getDoctors() {
  const res = await axios.get(
    "http://localhost:5000/api/doctors"
  );

  return res.data;
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Doctors
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
          />
        ))}
      </div>
    </section>
  );
}