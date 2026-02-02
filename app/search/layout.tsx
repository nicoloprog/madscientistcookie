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
      <div className="mx-auto max-w-[100%] pt-30 pb-7.5 md:mt-20 md:mb-15 md:max-w-[85%] px-4 text-left md:text-left">
        <h2
          className={`${sansitaSwashed.className} text-3xl md:text-4xl lg:text-5xl text-[#F9A36A] italic mb-6`}
        >
          Where obsession is backed into every batch
        </h2>

        <p className="text-[#F9A36A] text-md md:text-2xl leading-relaxed">
          Let&apos;s embody your beautiful ideas together, simplify the way you
          visualize your next big things. Let&apos;s embody your beautiful ideas
          together, simplify the way you visualize your next big things.
          Let&apos;s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pt-0  text-white md:flex-row ">
        <div className="order-first w-full flex-none md:max-w-[100px]">
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
