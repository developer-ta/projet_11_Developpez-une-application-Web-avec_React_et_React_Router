
import { HeroSection } from "../common/HeroSection";
import { GallerySection } from "./Sections/GallerySection";

export const HomeBody = () => {
  return (
    <main id="main">
      <HeroSection
        sectionStyle={{
          backgroundImage:
            "url('/src/presentation_Layer/assets/img_heroSection.jpg')",
        }}
        boxStyle={{ backdropFilter: "brightness(0.5)" }}
      >
        <p> Chez vous, partout et ailleurs</p>
      </HeroSection>
      <GallerySection></GallerySection>
    </main>
  );
};
