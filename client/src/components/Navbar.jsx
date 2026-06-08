"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold text-primary">
          DocAppoint
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/appointments">Appointments</Link></li>
          <li><Link href="/dashboard/bookings">Dashboard</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <img
              src={user.photo}
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={logoutUser}
              className="btn btn-error btn-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;