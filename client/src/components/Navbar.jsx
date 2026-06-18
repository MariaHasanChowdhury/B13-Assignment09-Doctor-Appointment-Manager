"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import {
  Menu,
  User,
} from "lucide-react";

export default function Navbar() {
  const { user, logoutUser } =
    useAuth();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Mobile Menu */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost"
            >
              <Menu size={26} />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-xl w-64 gap-2"
            >
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/doctors">
                  Doctors
                </Link>
              </li>

              <li>
                <Link href="/appointments">
                  Appointments
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>

              {!user && (
                <>
                  <li>
                    <Link href="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link href="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-start lg:flex-1">
          <Link
            href="/"
            className="text-3xl font-extrabold"
          >
            <span className="text-blue-600">
              Doc
            </span>
            <span className="text-green-600">
              Appoint
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 text-base font-medium">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/doctors">
                Doctors
              </Link>
            </li>

            <li>
              <Link href="/appointments">
                Appointments
              </Link>
            </li>

            <li>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">

          {user ? (
            <>
              <img
                src={
                  user.photo ||
                  "https://i.pravatar.cc/150"
                }
                alt="user"
                className="w-10 h-10 rounded-full border"
              />

              <button
                onClick={logoutUser}
                className="hidden lg:flex px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden lg:flex px-5 py-2 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="hidden lg:flex px-5 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Register
              </Link>

              <div className="lg:hidden">
                <User size={24} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}