 import axios from "axios";
import AppointmentForm from "@/components/appointments/AppointmentForm";

async function getDoctor(id) {
try {
const res = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`
);


return res.data;


} catch (error) {
console.error(
"Error fetching doctor:",
error
);


return null;


}
}

export async function generateMetadata({
params,
}) {
const { id } = await params;

const doctor = await getDoctor(id);

return {
title: doctor
? `${doctor.name} | DocAppoint`
: "Doctor Details | DocAppoint",
description:
doctor?.description ||
"View doctor profile and book appointment.",
};
}

export default async function DoctorDetails({
params,
}) {
const { id } = await params;

const doctor = await getDoctor(id);

if (!doctor) {
return ( <div className="text-center py-20"> <h1 className="text-4xl font-bold">
Doctor Not Found </h1> </div>
);
}

return ( <section className="max-w-6xl mx-auto px-4 py-16"> <div className="grid md:grid-cols-2 gap-10"> <div> <img
         src={doctor.image}
         alt={doctor.name}
         className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
       /> </div>


    <div>
      <h1 className="text-4xl font-bold mb-4">
        {doctor.name}
      </h1>

      <p className="text-xl font-semibold text-blue-600 mb-4">
        {doctor.specialty}
      </p>

      <p className="mb-3">
        <strong>Experience:</strong>{" "}
        {doctor.experience}
      </p>

      <p className="mb-3">
        <strong>Hospital:</strong>{" "}
        {doctor.hospital}
      </p>

      <p className="mb-3">
        <strong>Location:</strong>{" "}
        {doctor.location}
      </p>

      <p className="mb-3">
        <strong>Consultation Fee:</strong> ৳
        {doctor.fee}
      </p>

      <p className="mb-4">
        <strong>Rating:</strong> ⭐
        {doctor.rating}
      </p>

      <p className="text-gray-600 mb-6">
        {doctor.description}
      </p>

      <div>
        <h3 className="text-xl font-bold mb-3">
          Available Time Slots
        </h3>

        <div className="flex flex-wrap gap-3">
          {doctor.availability?.map(
            (slot, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium"
              >
                {slot}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="mt-12">
    <AppointmentForm doctor={doctor} />
  </div>
</section>

);
}
