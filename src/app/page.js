import doctors from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO */}
      <div className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              Find & Book Your Doctor
            </h1>

            <p className="py-6">
              Smart doctor appointment system with fast booking and secure management.
            </p>

            <button className="btn btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* TOP DOCTORS */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
           Top Rated Doctors
        </h2>

      <div className="grid grid-cols-1      sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
      <DoctorCard key={doc.id} doctor={doc} />
         ))}
      </div>
   </div>

    </div>
  );
}