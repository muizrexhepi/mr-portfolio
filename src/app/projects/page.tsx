import Link from "next/link";

interface Project {
  name: string;
  description: string;
  role: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "TvojPazar",
    description:
      "Modern marketplace platform built with Next.js, TypeScript, and Tailwind CSS. Features enhanced UI/UX, advanced search functionality, comprehensive filtering options, and real-time messaging between users. Implemented responsive design principles and optimized image loading for faster browsing experience. The platform offers a significantly improved user experience compared to similar regional marketplaces.",
    role: "Creator",
    url: "https://tvojpazar.vercel.app",
  },
  {
    name: "AskNoel",
    description:
      "Cryptocurrency news and information platform built with Next.js and TypeScript. Integrated live news API for real-time updates and implemented an AI-powered chat system that exclusively answers crypto-related questions. Features include personalized news feeds, market data visualization, and responsive design for all devices. The platform serves as a comprehensive resource for cryptocurrency enthusiasts.",
    role: "Creator",
    url: "https://app.asknoel.ai",
  },
  {
    name: "GoBusly",
    description:
      "A modern bus ticketing platform built with Next.js 14, TypeScript, and Tailwind CSS. Implemented real-time seat availability using WebSocket, multi-currency payments via Stripe, and automated email notifications. The platform supports 4 languages and processes over 500 bookings monthly with a 98% customer satisfaction rate.",
    role: "Creator",
    url: "https://gobusly.com",
  },
  {
    name: "Hakbus",
    description:
      "Full-stack transportation solution using React Native (mobile) and Next.js (web). Integrated real-time GPS tracking, push notifications, and a custom booking algorithm. Implemented offline support using Redux Persist and optimized API calls, reducing load times by 40%. The platform handles 1000+ daily active users.",
    role: "Creator",
    url: "https://hakbus.com",
  },
  {
    name: "Vital Care",
    description:
      "Healthcare platform built with Next.js App Router and TypeScript. Features include real-time appointment scheduling, secure patient portals (HIPAA compliant), and integrated telemedicine capabilities. Implemented role-based access control and reduced appointment scheduling time by 60%. Currently serving 20+ medical facilities.",
    role: "Creator",
    url: "https://vitalcare-jkqc.vercel.app",
  },
  {
    name: "Insyllium",
    description:
      "Corporate website built with Next.js 14 and Contentful CMS. Implemented dynamic page generation, SEO optimization with next-seo, and a custom analytics dashboard. The site achieved a 95+ Lighthouse score and increased organic traffic by 150% within three months of launch.",
    role: "Creator",
    url: "https://insyllium.com",
  },
  {
    name: "Insylink",
    description:
      "Restaurant POS system built with Next.js and Socket.IO for real-time order management. Features include inventory tracking, staff management, and detailed analytics. Implemented offline support using IndexedDB and optimized for tablet devices. Currently processing 2000+ orders daily across 15 restaurants.",
    role: "Creator",
    url: "https://insylink.vercel.app",
  },
  {
    name: "AMGMBH",
    description:
      "Business website developed using Next.js and Sanity.io CMS. Implemented a custom booking system, automated quote calculator, and multi-language support (DE/EN). Achieved 40% increase in lead generation through optimized conversion funnels and mobile-first design.",
    role: "Creator",
    url: "https://www.amgebäudereinigung.hamburg",
  },
  {
    name: "Lans-Gr",
    description:
      "E-commerce platform built with Next.js, MongoDB, and Stripe. Implemented custom product configurator, real-time price calculation, and automated order processing. Enhanced site performance using Next.js Image optimization and Incremental Static Regeneration, achieving a 65% reduction in page load time.",
    role: "Creator",
    url: "https://lansgr.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-sm sm:text-base text-neutral-600 font-semibold mb-8">
        Projects
      </h1>
      <div className="space-y-12">
        <p className="text-sm sm:tracking-wide leading-5 sm:leading-6 sm:text-base text-neutral-500">
          Over the past years, I&apos;ve been fortunate to work on various
          projects, ranging from web applications to mobile solutions.
        </p>
        {projects.map((project) => (
          <section key={project.name} className="space-y-6">
            <Link
              href={project.url!}
              target="_blank"
              className="group inline-flex items-center gap-1.5 text-sm decoration-neutral-400 hover:decoration-neutral-800"
            >
              <h2 className="text-base sm:text-lg font-semibold text-neutral-700 group-hover:text-neutral-900">
                {project.name}
              </h2>
              <span className="text-neutral-400 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                →
              </span>
            </Link>
            <p className="text-sm sm:text-base text-neutral-500">
              {project.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
