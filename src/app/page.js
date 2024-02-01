import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div
          className="text-gray-500 max-w-md mx-auto mt-4
        flex flex-col gap-4"
        >
          <p>
            Embark on a culinary journey with STREET PIZZA. Born from a passion
            for exceptional food, our commitment is to craft memorable dining
            experiences, offering a fusion of flavors that reflect our
            dedication to quality and customer satisfaction.
          </p>
          <p>
            At STEET PIZZA, we are more than just a kitchen; we are creators of
            moments. With a focus on authenticity and innovation, our culinary
            team strives to elevate your dining experience, ensuring that each
            dish tells a story of passion and precision. Welcome to a place
            where food meets artistry.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hasitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+1234567890">
            +9999 999 999
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center
      text-gray-500 mt-16">
        &copy; 2024 All right reserved
      </footer>
    </>
  );
}
