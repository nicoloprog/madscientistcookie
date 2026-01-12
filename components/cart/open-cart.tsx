import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-15 w-15 items-center justify-center rounded-md border border-neutral-200 text-white">
      <ShoppingCartIcon
        className={clsx(
          "h-6 md:h-6 transition-all ease-in-out hover:scale-110"
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-[#9E5A2B] text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
