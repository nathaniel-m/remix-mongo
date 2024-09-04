import CardGrid from "../components/cardGrid";
import ClientBar from "../components/clientBar";
import Contact from "../components/contact";
import Cta from "../components/cta";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroAlt from "../components/heroAlt";
import Testamonial from "../components/testimonial";
import ProductImage from "../components/product-image";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main id="content">
        <HeroAlt />
        <ProductImage
          LightImageSrc={"/dashboard-lt.jpg"}
          DarkImageSrc={"/dashboard-dk.jpg"}
          ImageAlt={"Detective FAQ screen shot"}
        />
        <Hero />
        <ClientBar />
        <Features />
        <Testamonial />
        <Cta />
        <CardGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
