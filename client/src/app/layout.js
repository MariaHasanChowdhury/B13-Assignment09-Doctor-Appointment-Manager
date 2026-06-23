import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DocAppoint",
  description:
    "Doctor Appointment Booking Platform",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </AuthProvider>

      </body>
    </html>
  );
}