// components/FeaturedImage.tsx
import React from "react";

export function FeaturedImage() {
  return (
    <div className="absolute w-full h-[600px] md:h-[800px]">
      {/* Main featured image - absolutely positionable */}
      <div className="absolute top-[136.25%] left-[-65%] md:top-[182.65%] md:left-20 w-[60rem] md:w-[120rem] z-50">
        <div className="aspect-[3/4] md:aspect-[4/3]">
          <img
            src="/science.png"
            alt="Featured image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
