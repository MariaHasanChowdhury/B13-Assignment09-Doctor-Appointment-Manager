import TopDoctors from "@/components/doctors/TopDoctors";

export default function Home() {
  return (
    <main>
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold">
              Book Trusted Doctors
            </h1>

            <p className="py-6">
              Find specialists and book appointments
              instantly.
            </p>
          </div>
        </div>
      </section>

      <TopDoctors />
    </main>
  );
}