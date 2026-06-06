export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      
      {/* HERO SECTION */}
      <div className="hero min-h-[70vh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Find Your Doctor Easily
            </h1>

            <p className="py-6">
              Book appointments with top doctors in Bangladesh.
              Fast, secure and easy management system.
            </p>

            <button className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-bold">Top Doctors</h2>
          <p>Find highly rated specialists.</p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-bold">Easy Booking</h2>
          <p>Book appointment in 1 click.</p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-bold">Secure System</h2>
          <p>Your data is safe with JWT auth.</p>
        </div>
      </div>

    </div>
  );
}