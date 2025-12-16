"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../design/constants";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
