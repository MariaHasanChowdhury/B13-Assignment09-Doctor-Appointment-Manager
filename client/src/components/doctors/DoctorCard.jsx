import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
      <figure>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-64 md:h-72 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold">
          {doctor.name}
        </h2>

        <p className="text-primary font-semibold">
          {doctor.specialty}
        </p>

        <p>
          <span className="font-semibold">
            Experience:
          </span>{" "}
          {doctor.experience}
        </p>

        <p>
          <span className="font-semibold">
            Hospital:
          </span>{" "}
          {doctor.hospital}
        </p>

        <p>
          <span className="font-semibold">
            Fee:
          </span>{" "}
          ৳{doctor.fee}
        </p>

        <p className="font-semibold">
          ⭐ {doctor.rating}
        </p>

        <div className="card-actions mt-5">
          <Link
           href={`/doctors/${doctor._id}`}
           className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl text-center shadow-lg transition duration-300 block"
          >
              View Details
          </Link>
          
        </div>
      </div>
    </div>
  );
}