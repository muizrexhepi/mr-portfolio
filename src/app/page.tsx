import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-sm sm:text-base text-neutral-600 font-semibold mb-8">
        Muiz Rexhepi
      </h1>
      <div className="space-y-6 text-sm sm:tracking-wide leading-5 sm:leading-6 sm:text-base text-neutral-500">
        <p>
          Hi! I&apos;m Muiz Rexhepi, a passionate Frontend Developer with a
          talent for creating seamless and dynamic user experiences. I&apos;m
          focused on delivering high-performance applications using modern
          technologies such as React, Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p>
          Currently, I&apos;m pursuing my B.Sc. in Computer Science at the
          University of Tetovo, with an expected graduation in 2025. My
          expertise lies in managing end-to-end projects, balancing technical
          expertise with strategic planning.
        </p>
        <p>
          You can gain further insights into my background and interests through
          my{" "}
          <Link
            href="/thoughts"
            className="underline decoration-neutral-400 hover:decoration-neutral-800"
          >
            thoughts
          </Link>
          ,{" "}
          <Link
            href="/projects"
            className="underline decoration-neutral-400 hover:decoration-neutral-800"
          >
            projects
          </Link>
          , find me on{" "}
          <Link
            href="https://github.com/muizrexhepi"
            className="underline decoration-neutral-400 hover:decoration-neutral-800"
          >
            GitHub
          </Link>
          ,{" "}
          <Link
            href="https://linkedin.com/in/muiz-rexhepi"
            className="underline decoration-neutral-400 hover:decoration-neutral-800"
          >
            LinkedIn
          </Link>
          , or contact me at{" "}
          <Link
            href="mailto:muiz.rexhepi1@gmail.com"
            className="underline decoration-neutral-400 hover:decoration-neutral-800"
          >
            muiz.rexhepi1@gmail.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
