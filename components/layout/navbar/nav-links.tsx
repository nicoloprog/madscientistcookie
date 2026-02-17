"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lib/shopify/types";

// ─── Single nav link with active underline ───────────────────────────────────
function ActiveNavLink({ item }: { item: Menu }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      prefetch={true}
      className={`text-neutral-200 underline-offset-4 hover:underline transition-all ${
        isActive ? "underline" : ""
      }`}
    >
      {item.title}
    </Link>
  );
}

// ─── Nav links list — receives menu from the server parent ───────────────────
export function NavLinks({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <ul className="hidden gap-6 md:gap-12 text-sm md:text-2xl md:flex md:items-center">
      {menu.map((item: Menu) => (
        <li key={item.title}>
          <ActiveNavLink item={item} />
        </li>
      ))}
    </ul>
  );
}
