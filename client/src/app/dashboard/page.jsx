import Link from "next/link";

export default function DashboardPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-3">
          Manage your appointments and doctors from one place.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-lg font-medium">
            Total Doctors
          </h3>

          <p className="text-4xl font-bold mt-3">
            8
          </p>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-lg font-medium">
            Appointments
          </h3>

          <p className="text-4xl font-bold mt-3">
            View
          </p>
        </div>

        <div className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-lg font-medium">
            Status
          </h3>

          <p className="text-4xl font-bold mt-3">
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
  );
}