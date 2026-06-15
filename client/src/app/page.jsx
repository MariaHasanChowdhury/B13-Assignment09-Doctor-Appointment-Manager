import Link from "next/link";
import TopDoctors from "@/components/doctors/TopDoctors";

export default function HomePage() {
  return (
    <>
      <section className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              Book Doctor Appointments
              <span className="text-blue-600">
                {" "}
                Easily
              </span>
            </h1>

            <p className="py-6 text-lg">
              Find trusted doctors, view
              profiles, and schedule
              appointments online in just a
              few clicks.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/doctors"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
              >
                View All Doctors
              </Link>

              <a
                href="#top-doctors"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
              >
                Top Doctors
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="top-doctors">
        <TopDoctors />
      </div>
    </>
  );
} 