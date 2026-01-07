import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        Free ATS Resume Checker
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-xl">
        Upload your resume and compare it with any job description
        to see how well you match.
      </p>

      <Link
        href="/ats-checker"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Check My Resume
      </Link>
    </main>
  );
}
