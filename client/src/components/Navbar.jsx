"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import {
Menu,
X,
User,
} from "lucide-react";

export default function Navbar() {
const { user, logoutUser } =
useAuth();

const pathname =
usePathname();

const [open, setOpen] =
useState(false);

const navLinks = [
{
name: "Home",
path: "/",
},
{
name: "Doctors",
path: "/doctors",
},
{
name: "Appointments",
path: "/appointments",
},
{
name: "Dashboard",
path: "/dashboard",
},
];

return (
<> <nav className="sticky top-0 z-50 bg-white shadow-md"> <div className="max-w-7xl mx-auto px-4">


      <div className="h-20 flex items-center justify-between">

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>

        {/* Logo */}
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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`pb-1 border-b-2 font-semibold transition-all duration-300 ${
                  pathname === link.path
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <img
                src={
                  user.photo ||
                  "https://i.pravatar.cc/150"
                }
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />

              <button
                onClick={logoutUser}
                className="hidden lg:block px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`hidden lg:block px-5 py-2 rounded-xl border-2 font-semibold transition-all duration-300 ${
                  pathname === "/login"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Login
              </Link>

              <Link
                href="/register"
                className={`hidden lg:block px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  pathname === "/register"
                    ? "bg-green-700 text-white"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Register
              </Link>

              <User
                size={24}
                className="lg:hidden"
              />
            </>
          )}
        </div>

      </div>
    </div>
  </nav>

  {/* Mobile Sidebar */}
  {open && (
    <div className="fixed inset-0 bg-black/50 z-50">

      <div className="bg-white w-72 h-full p-6">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            <span className="text-blue-600">
              Doc
            </span>
            <span className="text-green-600">
              Appoint
            </span>
          </h2>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X size={28} />
          </button>

        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() =>
                setOpen(false)
              }
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Login/Register */}

        {user && (
          <button
          onClick={() => {
          logoutUser();
          setOpen(false);
         }}
           className="mt-8 w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
          Logout
          </button>
        )}

        {!user && (
          <div className="mt-8 flex flex-col gap-3">

            <Link
              href="/login"
              onClick={() =>
                setOpen(false)
              }
              className={`text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                pathname === "/login"
                  ? "bg-blue-600 text-white"
                  : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() =>
                setOpen(false)
              }
              className={`text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                pathname === "/register"
                  ? "bg-green-700 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Register
            </Link>

          </div>
        )}

      </div>
    </div>
  )}
</>


);
}
