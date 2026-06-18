import Link from "next/link";
import TopDoctors from "@/components/doctors/TopDoctors";

export default function HomePage() {
  return (
    <>
      <section className="hero min-h-[85vh] bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Book Doctor
              <br />
              Appointments{" "}
              <span className="text-blue-600">
                Easily
              </span>
            </h1>

            <p className="py-8 text-lg md:text-xl text-gray-600">
              Find trusted doctors, view profiles,
              and schedule appointments online in
              just a few clicks.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/doctors"
                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                View All Doctors
              </Link>

              <a
                href="#top-doctors"
                className="px-8 py-4 rounded-xl bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
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