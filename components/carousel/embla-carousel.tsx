"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "lib/shopify/types";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GridTileImage } from "../grid/tile";

interface EmblaCarouselProps {
  products: Product[];
}

export default function EmblaCarousel({ products }: EmblaCarouselProps) {
  // Memoize duplicated products to prevent recalculation on every render
  const carouselProducts = useMemo(
    () => [...products, ...products, ...products],
    [products],
  );

  // Initialize Embla with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Navigation callbacks
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  // Initialize scroll snaps and selection
  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  // Handle scrollbar click navigation
  const handleScrollbarClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      const targetIndex = Math.round(percentage * (scrollSnaps.length - 1));
      scrollTo(targetIndex);
    },
    [scrollSnaps.length, scrollTo],
  );

  // Calculate scrollbar thumb position
  const thumbPosition = useMemo(() => {
    if (scrollSnaps.length <= 1) return 0;
    return (selectedIndex / (scrollSnaps.length - 1)) * (256 - 48);
  }, [selectedIndex, scrollSnaps.length]);

  // Setup Embla event listeners
  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative overflow-hidden pt-8 md:pt-12">
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden pb-6 pt-1 mb-6 px-4">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {carouselProducts.map((product, i) => (
              <CarouselSlide
                key={`${product.handle}-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <NavigationButton
          direction="prev"
          onClick={scrollPrev}
          className="left-8"
        />
        <NavigationButton
          direction="next"
          onClick={scrollNext}
          className="right-4"
        />

        {/* Scrollbar Pagination */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-64 h-2 bg-white/20 rounded-full cursor-pointer"
          onClick={handleScrollbarClick}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={scrollSnaps.length - 1}
          aria-valuenow={selectedIndex}
          aria-label="Carousel navigation"
        >
          <div
            className="h-full w-12 bg-[#9E5A2B] rounded-full transition-all duration-300 ease-out pointer-events-none"
            style={{ transform: `translateX(${thumbPosition}px)` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

// Extracted slide component for better performance
interface CarouselSlideProps {
  product: Product;
  index: number;
}

function CarouselSlide({ product, index }: CarouselSlideProps) {
  return (
    <div
      className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] relative aspect-square max-h-[575px] mr-4"
      style={{ backfaceVisibility: "hidden" }}
    >
      <Link
        href={`/product/${product.handle}`}
        className="block h-full w-full relative"
      >
        <GridTileImage
          alt={product.title}
          src={product.featuredImage?.url}
          fill
          className="object-cover rounded-lg"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 85vw"
          priority={index < 3}
        />
      </Link>
    </div>
  );
}

// Extracted navigation button component
interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

function NavigationButton({
  direction,
  onClick,
  className,
}: NavigationButtonProps) {
  const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group ${className}`}
      onClick={onClick}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
    >
      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
}
