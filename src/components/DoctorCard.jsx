import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">

      <figure className="h-56 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg">
          {doctor.name}
        </h2>

        <p className="text-sm text-gray-500">
          {doctor.specialty}
        </p>

        <div className="flex justify-between text-sm mt-2">
          <span>Exp: {doctor.experience}</span>
          <span>⭐ {doctor.rating}</span>
        </div>

        <p className="font-bold mt-2">
          Fee: {doctor.fee} BDT
        </p>

        <div className="card-actions justify-end mt-3">
          <Link
            href={`/doctor/${doctor.id}`}
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}