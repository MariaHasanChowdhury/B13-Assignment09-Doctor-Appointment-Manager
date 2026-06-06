import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          DocAppoint
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/appointments">
              All Appointments
            </Link>
          </li>

          <li>
            <Link href="/dashboard/bookings">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <Link
          href="/login"
          className="btn btn-outline btn-primary"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="btn btn-primary"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;