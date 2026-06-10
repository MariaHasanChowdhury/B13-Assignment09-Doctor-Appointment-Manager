import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
      <figure>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-64 md:h-72 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl">
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

        <p>
          ⭐ {doctor.rating}
        </p>

        <div className="card-actions mt-4">
          <Link
            href={`/doctors/${doctor._id}`}
            className="btn btn-primary w-full rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}