import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              DocAppoint
            </h2>

            <p className="mt-4 text-gray-300">
              Smart Doctor Appointment
              Management System for easy and
              secure healthcare booking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">
                Home
              </Link>

              <Link href="/doctors">
                Doctors
              </Link>

              <Link href="/appointments">
                Appointments
              </Link>

              <Link href="/login">
                Login
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p>Email: support@docappoint.com</p>
            <p>Phone: +880 1234-567890</p>

            <div className="flex gap-4 mt-4">

              <a
                href="https://facebook.com"
                target="_blank"
              >
                🌐 Facebook
              </a>

              <a
                href="https://github.com"
                target="_blank"
              >
                💻 GitHub
              </a>

              <a
                href="https://x.com"
                target="_blank"
              >
                ✖ X
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 DocAppoint. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}