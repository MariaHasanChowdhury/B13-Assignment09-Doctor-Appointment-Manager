import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: "DocAppoint",
  description: "Doctor Appointment Manager",
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
        </AuthProvider>
      </body>
    </html>
  );
}