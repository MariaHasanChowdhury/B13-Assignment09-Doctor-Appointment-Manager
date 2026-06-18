import Link from "next/link";
import TopDoctors from "@/components/doctors/TopDoctors";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
                Book Doctor
                <br />
                Appointments{" "}
                <span className="text-blue-600">
                  Easily
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 max-w-xl">
                Find trusted doctors, view profiles,
                and schedule appointments online in
                just a few clicks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <Link
                  href="/doctors"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition text-center"
                >
                  View All Doctors →
                </Link>

                <a
                  href="#top-doctors"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition text-center"
                >
                  Top Doctors →
                </a>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                alt="Doctor"
                className="rounded-[40px] shadow-2xl w-full max-w-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl mb-4">
              👨‍⚕️
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Trusted Doctors
            </h3>

            <p className="text-slate-600">
              Connect with verified and
              experienced doctors.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl mb-4">
              📅
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Easy Appointments
            </h3>

            <p className="text-slate-600">
              Book appointments in just a
              few simple steps.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl mb-4">
              🛡️
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Secure & Reliable
            </h3>

            <p className="text-slate-600">
              Your health information is
              protected and secure.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Choose{" "}
              <span className="text-blue-600">
                Doc
              </span>
              <span className="text-green-600">
                Appoint
              </span>
              ?
            </h2>

            <p className="mt-4 text-slate-600">
              We make healthcare accessible and
              convenient for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">
                🌎
              </div>
              <h3 className="font-bold text-xl mb-2">
                Wide Network
              </h3>
              <p className="text-slate-600">
                Access specialists near you.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">
                🎧
              </div>
              <h3 className="font-bold text-xl mb-2">
                24/7 Support
              </h3>
              <p className="text-slate-600">
                Anytime help and assistance.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">
                👤
              </div>
              <h3 className="font-bold text-xl mb-2">
                User Friendly
              </h3>
              <p className="text-slate-600">
                Simple and intuitive interface.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">
                ⏰
              </div>
              <h3 className="font-bold text-xl mb-2">
                Save Time
              </h3>
              <p className="text-slate-600">
                Skip waiting and book online.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TOP DOCTORS */}
      <section id="top-doctors">
        <TopDoctors />
      </section>
    </>
  );
}