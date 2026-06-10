import axios from "axios";

async function getDoctor(id) {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/doctors/${id}`
    );

    return res.data;
  } catch (error) {
    return null;
  }
}

export default async function DoctorDetails({ params }) {
  const doctor = await getDoctor(params.id);

  if (!doctor) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Doctor Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {doctor.name}
          </h1>

          <p className="text-xl text-primary mb-4">
            {doctor.specialty}
          </p>

          <p className="mb-2">
            <strong>Experience:</strong>{" "}
            {doctor.experience}
          </p>

          <p className="mb-2">
            <strong>Hospital:</strong>{" "}
            {doctor.hospital}
          </p>

          <p className="mb-2">
            <strong>Location:</strong>{" "}
            {doctor.location}
          </p>

          <p className="mb-2">
            <strong>Consultation Fee:</strong> ৳
            {doctor.fee}
          </p>

          <p className="mb-4">
            <strong>Rating:</strong> ⭐
            {doctor.rating}
          </p>

          <p className="mb-6">
            {doctor.description}
          </p>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">
              Available Time Slots
            </h3>

            <div className="flex flex-wrap gap-2">
              {doctor.availability?.map(
                (slot, index) => (
                  <span
                    key={index}
                    className="badge badge-outline p-4"
                  >
                    {slot}
                  </span>
                )
              )}
            </div>
          </div>

          <button className="btn btn-primary">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}