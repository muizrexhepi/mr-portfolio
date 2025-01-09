"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="w-full sm:w-fit pb-6 sm:pb-0">
      <ul className="flex flex-row sm:flex-col justify-end gap-2 sm:gap-0 sm:pr-12 font-serif text-base sm:text-lg font-medium text-right">
        <li>
          <Link
            href="/"
            className={`${
              path !== "/" ? "text-neutral-400" : "text-neutral-700"
            } hover:text-neutral-700`}
          >
            about
          </Link>
        </li>
        {/* <li>
                <Link
                  href="/thoughts"
                  className="text-neutral-400 hover:text-neutral-700"
                >
                  thoughts
                </Link>
              </li> */}
        <li>
          <Link
            href="/projects"
            className={`${
              path !== "/projects" ? "text-neutral-400" : "text-neutral-700"
            } hover:text-neutral-700`}
          >
            projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};
