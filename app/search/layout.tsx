import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";
import { sansitaSwashed } from "lib/fonts";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pt-30 md:pt-50 text-white md:flex-row ">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <h2
            className={`${sansitaSwashed.className} text-3xl mt-5 md:text-5xl lg:text-7xl text-[#F9A36A] italic mb-6 md:mb-18`}
          >
            Where obsession is backed into every batch
          </h2>

          {/* Description text - left on mobile, centered on desktop */}
          <p className="text-[#F9A36A] mb-10 text-md md:text-3xl leading-relaxed max-w-full md:min-w-[100%] lg:max-w-5xl text-left md:text-center md:mx-auto">
            Let&apos;s embody your beautiful ideas together, simplify the way
            you visualize your next big things. Let&apos;s embody your beautiful
            ideas together, simplify the way you visualize your next big things.
            Let&apos;s embody your beautiful ideas together, simplify the way
            you visualize your next big things.visualize your next big things.
            Let&apos;s embody your beautiful ideas together, simplify the way
            you visualize your next big things. Let&apos;s embody your beautiful
            ideas together, simplify the way you visualize your next big
            things.visualize your next big things. Let&apos;s embody your
            beautiful ideas together, simplify the way you visualize your next
            big things. Let&apos;s embody your beautiful ideas together,
            simplify the way you visualize your next big things.
          </p>
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>

      <Footer />
    </>
  );
}
