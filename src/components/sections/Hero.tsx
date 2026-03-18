import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Welcome to{" "}
          <span className="text-blue-600">VeyroWeb</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          A modern, fast, and scalable web application built with Next.js,
          React, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get started
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-6 py-3 text-base font-semibold text-gray-900 ring-1 ring-gray-300 transition-colors hover:bg-gray-50 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-900"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
