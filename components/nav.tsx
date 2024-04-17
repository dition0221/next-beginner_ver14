"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// LIBS
import { cls } from "@/libs/utils";
// COMPONENTS
import MenuBar from "@/components/menu-bar";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="sticky top-4 z-[999]">
      <MenuBar>
        <ul className="flex space-x-6">
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
              About-Us
            </Link>
          </li>
        </ul>
      </MenuBar>
    </nav>
  );
}
