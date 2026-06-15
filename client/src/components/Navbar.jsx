"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/doctors">
          All Doctors
        </Link>
      </li>

      <li>
        <Link href="/appointments">
          My Appointments
        </Link>
      </li>

      <li>
        <Link href="/dashboard/bookings">
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-8">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          DocAppoint
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <img
              src={
                user?.photo ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            />

            <button
              onClick={logoutUser}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}