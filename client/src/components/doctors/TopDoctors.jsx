"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import DoctorCard from "./DoctorCard";

export default function TopDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await api.get("/doctors");

        const topRatedDoctors = res.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setDoctors(topRatedDoctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Top Rated Doctors
        </h2>

        <p className="text-gray-500 mt-3">
          Find and book appointments with experienced specialists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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