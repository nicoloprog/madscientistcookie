import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import { HeroSection } from "components/hero";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "Cookies and baked goods crafted with a mad scientist's touch. Explore our unique flavors and innovative desserts!",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
