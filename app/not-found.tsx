import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 font-nacelle text-6xl font-semibold text-gray-200">
          404
        </h1>
        <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-300">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}


