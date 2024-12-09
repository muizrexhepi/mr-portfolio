import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Muiz Rexhepi</h1>
      <p className="text-xl text-zinc-300">
        Frontend Developer | React & Next.js Specialist
      </p>
      <div className="space-y-4 text-zinc-300">
        <p>
          Welcome to my portfolio. I'm a passionate frontend developer with a
          focus on creating seamless and dynamic user experiences using modern
          web technologies.
        </p>
        <p>
          Explore my{" "}
          <Link href="/projects" className="underline hover:text-white">
            projects
          </Link>{" "}
          or learn more{" "}
          <Link href="/about" className="underline hover:text-white">
            about me
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
