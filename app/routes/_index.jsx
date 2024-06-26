import CardGrid from "../components/cardGrid";
import ClientBar from "../components/clientBar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Testamonial from "../components/testimonial";

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
        <Hero />
        <ClientBar />
        <CardGrid />
        <Testamonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
