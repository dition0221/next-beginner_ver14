"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// LIBS
import { cls } from "@/libs/utils";
// COMPONENTS
import MenuBar from "@/components/menu-bar";

interface IProps {
  id: string;
}

export default function MovieMenu({ id }: IProps) {
  const path = usePathname();

  return (
    <MenuBar>
      <ul className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
        <li
          className={cls(
            "hover:underline",
            path === `/movies/${id}` ? "text-orange-500" : ""
          )}
        >
          <Link href={`/movies/${id}`}>Videos</Link>
        </li>
        <li
          className={cls(
            "hover:underline",
            path === `/movies/${id}/credits` ? "text-orange-500" : ""
          )}
        >
          <Link href={`/movies/${id}/credits`}>Credits</Link>
        </li>
        <li
          className={cls(
            "hover:underline",
            path === `/movies/${id}/providers` ? "text-orange-500" : ""
          )}
        >
          <Link href={`/movies/${id}/providers`}>Providers</Link>
        </li>
        <li
          className={cls(
            "hover:underline",
            path === `/movies/${id}/similar` ? "text-orange-500" : ""
          )}
        >
          <Link href={`/movies/${id}/similar`}>Similar</Link>
        </li>
      </ul>
    </MenuBar>
  );
}
