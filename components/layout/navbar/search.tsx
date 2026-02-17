"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form
      action="/search"
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-white placeholder:text-neutral-300 md:text-md dark:border-neutral-700 dark:bg-transparent dark:text-white "
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center text-sm text-white placeholder:text-white">
        <MagnifyingGlassIcon className="h-4 md:pr-2" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full text-white placeholder:text-white">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-white placeholder:text-white md:text-md"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-neutral-200" />
      </div>
    </form>
  );
}
