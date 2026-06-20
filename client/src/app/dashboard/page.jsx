"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/providers/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const { user } = useAuth();

  const [appointmentCount, setAppointmentCount] =
    useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(
          `/appointments?email=${user?.email}`
        );

        setAppointmentCount(
          res.data.length
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  return (
    <ProtectedRoute>

      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Welcome back, {user?.name}
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-lg font-medium">
              Total Doctors
            </h3>

            <p className="text-4xl font-bold mt-3">
              8+
            </p>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-lg font-medium">
              My Appointments
            </h3>

            <p className="text-4xl font-bold mt-3">
              {appointmentCount}
            </p>
          </div>

          <div className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-lg font-medium">
              Account Status
            </h3>

            <p className="text-3xl font-bold mt-3">
              Active
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-lg border p-8">

          <h2 className="text-3xl font-bold mb-8">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <Link
              href="/doctors"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl text-center font-semibold transition"
            >
              View Doctors
            </Link>

            <Link
              href="/appointments"
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl text-center font-semibold transition"
            >
              My Appointments
            </Link>

            <Link
              href="/"
              className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-xl text-center font-semibold transition"
            >
              Back To Home
            </Link>

          </div>

        </div>

      </section>

    </ProtectedRoute>
  );
}