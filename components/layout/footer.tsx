import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { sansitaSwashed } from "lib/fonts";

import FooterMenu from "components/layout/footer-menu";
import { getMenu } from "lib/shopify";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="bg-black text-sm text-neutral-400">
      {/* TOP FOOTER */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-neutral-800 px-6 py-16 md:grid-cols-3 md:px-4 min-[1320px]:px-0">
        {/* LEFT – MENU */}
        <div
          className={`
            ${sansitaSwashed.className} flex justify-left md:justify-start`}
        >
          <div className="w-full flex flex-row gap-58 md:gap-334">
            <FooterMenu menu={menu} />
            {/* RIGHT – EMPTY / FUTURE SOCIALS */}

            <Image
              src="/logomad.jpeg" // ← replace with your image path
              alt={`${SITE_NAME} logo`}
              width={60}
              height={60}
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>

        {/* CENTER – IMAGE */}
      </div>
      <div className="flex items-center justify-center py-6">
        <Image
          src="/warning.png" // ← replace with your image path
          alt={`${SITE_NAME} logo`}
          width={320}
          height={220}
          className="object-contain opacity-90"
          priority
        />
      </div>
      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 md:flex-row md:gap-0 min-[1320px]:px-0">
          <p>
            © {copyrightDate} {copyrightName}
            {copyrightName && !copyrightName.endsWith(".") ? "." : ""} All
            rights reserved.
          </p>

          <hr className="mx-4 hidden h-4 w-px border-l border-neutral-600 md:block" />

          <p className="md:ml-auto">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
