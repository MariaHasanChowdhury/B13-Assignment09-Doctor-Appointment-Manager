import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
}