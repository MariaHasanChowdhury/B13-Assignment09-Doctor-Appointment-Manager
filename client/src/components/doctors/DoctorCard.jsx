import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-72 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {doctor.name}
        </h2>

        <p>{doctor.specialty}</p>

        <p>{doctor.experience}</p>

        <p>Fee: ৳{doctor.fee}</p>

        <Link
          href={`/doctors/${doctor._id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}