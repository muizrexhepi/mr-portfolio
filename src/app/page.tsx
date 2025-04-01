import Link from "next/link";
import { ArrowRight } from "lucide-react"; // You'll need to install lucide-react

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-sm sm:text-base text-neutral-600 font-semibold mb-8">
        Muiz Rexhepi
      </h1>
      <div className="space-y-8 text-sm sm:tracking-wide leading-5 sm:leading-6 sm:text-base text-neutral-500">
        <p>
          Frontend Developer based in Tetovo. Skilled in Next.js, React,
          TypeScript, and Node.js. I build scalable, maintainable applications
          with a strong emphasis on performance and user experience.
        </p>
        <div className="py-2">
          <h2 className="text-neutral-600 font-medium mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "REST API",
              "MongoDB",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Featured Projects Section */}
        <div className="py-2">
          <h2 className="text-neutral-600 font-medium mb-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/projects#tvojpazar"
              className="group p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium text-neutral-700 group-hover:text-neutral-900">
                TvojPazar
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Modern marketplace platform with enhanced UI/UX
              </p>
              <div className="mt-2 flex items-center text-xs text-neutral-400 group-hover:text-neutral-600">
                <span>View project</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
            <Link
              href="/projects#asknoel"
              className="group p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium text-neutral-700 group-hover:text-neutral-900">
                AskNoel
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Crypto news platform with AI-powered chat
              </p>
              <div className="mt-2 flex items-center text-xs text-neutral-400 group-hover:text-neutral-600">
                <span>View project</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          </div>
        </div>

        {/* Skills Section */}

        <p>
          You can gain further insights into my background and interests through
          my{" "}
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
