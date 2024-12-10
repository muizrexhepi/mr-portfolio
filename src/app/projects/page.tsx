"use client";

import { useState } from "react";

interface Project {
  name: string;
  description: string;
  role: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "GoBusly",
    description:
      "Online Bus Ticket Booking System inspired by FlixBus. Features include real-time availability, multi-lingual support, secure payment integration, and a user-friendly, three-click booking experience.",
    role: "Creator",
    url: "https://gobusly.com",
  },
  {
    name: "Hakbus",
    description:
      "Bus Ticket Booking App (Web and Mobile) with real-time schedules, payment integration, and streamlined UX, resulting in a 30% increase in user engagement.",
    role: "Creator",
    url: "https://hakbus.com",
  },
  {
    name: "Vital Care",
    description:
      "Medical Appointment System (Web and Mobile) offering seamless clinic discovery, appointment booking, and patient profile management. Features include real-time availability, intuitive UX, and secure data handling, enhancing patient engagement and clinic efficiency.",
    role: "Creator",
    url: "https://vitalcare-jkqc.vercel.app",
  },

  {
    name: "Insyllium",
    description:
      "Designed and launched a professional website to showcase Insyllium's services, improve online presence, and attract client leads with an easy-to-update CMS.",
    role: "Creator",
    url: "https://insyllium.com",
  },
  {
    name: "Insylink",
    description:
      "POS System for European Restaurants, improving operational efficiency with real-time order management and a user-friendly interface for mobile and tablet devices.",
    role: "Creator",
    url: "https://insylink.com",
  },
  {
    name: "AMGMBH",
    description:
      "CMS-Enabled Website for Cleaning Company, enhancing digital reach and allowing for easy content management.",
    role: "Creator",
    url: "https://www.amgebäudereinigung.de",
  },
  {
    name: "Lans-Gr",
    description:
      "Customized Web Solution for Slovakian Business, enhancing customer engagement and driving increased sales inquiries for a shutters business.",
    role: "Creator",
    url: "https://lans-gr.com",
  },
];

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-zinc-300">
        Here are the projects that I have been involved in creating and/or
        maintaining:
      </p>
      <div className="space-y-[1px]">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 -mb-[1px] border-b border-zinc-800 group  transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium group-hover:text-white transition-colors">
                  {project.name}
                </span>
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {project.role}
                </span>
              </div>
              {hoveredIndex === index && (
                <div className="absolute z-10 left-0 top-full mt-2 p-3 rounded-lg bg-zinc-800/90 text-sm text-zinc-100 max-w-[280px] shadow-xl">
                  {project.description}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
