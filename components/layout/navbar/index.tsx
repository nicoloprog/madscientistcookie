import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";
import { sansitaSwashed } from "lib/fonts";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <div
      className={`absolute md:top-12 md:inset-x-0 /* Anchors it to both sides at once */
    z-50
    w-full
    p-7.5 md:px-42.5
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
        <div className="flex w-full ">
          {/* <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link> */}
          {menu.length ? (
            <ul className="hidden gap-6 md:gap-12 text-sm md:text-2xl md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-3 hover:text-black hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex items-center justify-end gap-6 md:gap-34">
          <div className="hidden md:block w-64">
            {" "}
            {/* Fixed width for search so it doesn't jump */}
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end">
            <CartModal />
          </div>
        </div>
      </div>
    </div>
  );
}
