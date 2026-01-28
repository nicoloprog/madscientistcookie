// components/FeaturedImage.tsx
import React from "react";

export function FeaturedImage() {
  return (
    <div className="absolute w-full h-[600px] md:h-[800px]">
      <div className="absolute top-[223.25%] left-[0%] md:top-[227.7%] md:left-25 w-[100%] md:w-[120rem] z-50">
        <div>
          <img
            src="/sciencemobile.png"
            alt="MadScientistCookie bakery interior mobile"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/sciencedesktop.png"
            alt="MadScientistCookie bakery interior desktop"
            className="hidden w-full h-full object-contain md:block"
          />
        </div>
      </div>
    </div>
  );
}
