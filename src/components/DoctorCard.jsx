import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {doctor.name}
        </h2>

        <p>{doctor.specialty}</p>

        <p>Experience: {doctor.experience}</p>

        <p className="font-bold">
          Fee: {doctor.fee} BDT
        </p>

        <div className="card-actions justify-end">
          <Link
            href={`/doctor/${doctor.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}