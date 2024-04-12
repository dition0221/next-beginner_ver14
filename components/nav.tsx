"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// UTILITIES
import { cls } from "@/libs/utils";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="sticky top-4 z-[999] my-4 py-4 px-8 bg-gray-700 w-fit mx-auto left-0 right-0 rounded-full">
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={cls(
              "hover:underline",
              path === "/" ? "text-orange-500" : ""
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={cls(
              "hover:underline",
              path === "/about-us" ? "text-orange-500" : ""
            )}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
