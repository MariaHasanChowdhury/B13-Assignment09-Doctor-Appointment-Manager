"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/providers/AuthProvider";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <section className="max-w-6xl mx-auto px-4 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              User Name
            </h3>

            <p className="mt-2">
              {user?.name}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              Email
            </h3>

            <p className="mt-2">
              {user?.email}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              Status
            </h3>

            <p className="mt-2 text-green-600 font-semibold">
              Logged In
            </p>
          </div>

        </div>

      </section>
    </ProtectedRoute>
  );
}