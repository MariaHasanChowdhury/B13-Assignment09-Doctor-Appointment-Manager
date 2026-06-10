import TopDoctors from "@/components/doctors/TopDoctors";

export default function HomePage() {
  return (
    <>
      <section className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              Book Doctor Appointments
              <span className="text-primary">
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

            <button className="btn btn-primary btn-lg rounded-xl">
              Find Doctors
            </button>
          </div>
        </div>
      </section>

      <TopDoctors />
    </>
  );
}