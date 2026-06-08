"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import DoctorCard from "./DoctorCard";

export default function TopDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const res = await api.get("/doctors");

    const topRated = res.data
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);

    setDoctors(topRated);
  };

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Top Rated Doctors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
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