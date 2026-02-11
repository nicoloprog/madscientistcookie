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
      <div className="mx-auto max-w-7xl px-6 py-2 md:py-16 md:px-4 min-[1320px]:px-0">
        {/* MOBILE: LOGO CENTERED */}
        <div className="flex flex-col items-center md:hidden mb-4">
          <Link href="/" className="inline-block my-6">
            <Image
              src="/logomad.jpeg"
              alt={`${SITE_NAME} logo`}
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex items-center justify-center">
            <Image
              src="/warning3.png"
              alt="Warning information"
              width={520}
              height={190}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* DESKTOP: GRID LAYOUT */}
        <div className="hidden md:grid md:grid-cols-13 md:gap-12">
          {/* LEFT – LOGO & TAGLINE */}
          <div className="md:col-span-8">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logomad.jpeg"
                alt={`${SITE_NAME} logo`}
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
            <div className="flex items-center justify-center mt-8">
              <Image
                src="/warning3.png"
                alt="Warning information"
                width={280}
                height={190}
                className="object-contain opacity-90 w-full"
              />
            </div>
          </div>

          {/* CENTER – FOOTER MENU */}
          <div
            className={`border-l border-neutral-800 md:pl-10 md:col-span-5 ${sansitaSwashed.className}`}
          >
            <FooterMenu menu={menu} />
          </div>

          {/* RIGHT – SOCIAL ICONS */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/insta.png" // ← Add your Instagram icon
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                aria-label="Facebook"
              >
                <Image src="/face.png" alt="Facebook" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE: FOOTER MENU */}
        <div className={`md:hidden mb-8 ${sansitaSwashed.className}`}>
          <FooterMenu menu={menu} />
        </div>

        {/* MOBILE: SOCIAL ICONS */}
        <div className="md:hidden mb-8 border-t border-neutral-800 pt-6">
          <h3 className="text-white font-semibold mb-4 text-center">
            Follow Us
          </h3>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              aria-label="Instagram"
            >
              <Image
                src="/insta.png" // ← Add your Instagram icon
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              aria-label="Facebook"
            >
              <Image src="/face.png" alt="Facebook" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 md:flex-row md:gap-0 min-[1320px]:px-0">
          <p className="text-xs">
            © {copyrightDate} {copyrightName}
            {copyrightName && !copyrightName.endsWith(".") ? "." : ""} All
            rights reserved.
          </p>

          <div className="hidden md:block flex-1" />
        </div>
      </div>
    </footer>
  );
}
