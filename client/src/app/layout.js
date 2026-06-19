import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DocAppoint",
  description:
    "Doctor Appointment Booking System",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />

          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}