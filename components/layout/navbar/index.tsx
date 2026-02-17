import { getMenu } from "lib/shopify";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";
import CartModal from "components/cart/modal";
import { NavLinks } from "./nav-links";
import { sansitaSwashed } from "lib/fonts";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <div
      className={`absolute md:top-12 md:inset-x-0
      z-50
      w-full
      pt-7 px-5 md:px-42.5
      ${sansitaSwashed.className}
      flex items-center justify-between
    `}
    >
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      <div className="flex w-full items-center gap-6">
        <div className="flex w-full">
          {/* Client component — receives menu as a prop, no shopify import */}
          <NavLinks menu={menu} />
        </div>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-64">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        <div className="flex justify-end">
          <CartModal />
        </div>
      </div>
    </div>
  );
}
