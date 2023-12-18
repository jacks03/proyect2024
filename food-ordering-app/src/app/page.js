import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
/**link uso para mandar a otro sitio web o pagina */
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div
          className="text-gray-500 max-w-md mx-auto mt-4 flex
        flex-col gap-4"
        >
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit tortor ante
            ut convallis, porttitor euismod nam mi. Et fames ultricies dis
            rhoncus aenean faucibus tincidunt, tempus fringilla facilisis netus
            sodales potenti.
          </p>
          <p>
            diam urna tellus mi at interdum, etiam velit aenean eu torquent
            sociis. Nunc non mauris habitant iaculis, dis rhoncus justo, fames
            ornare penatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis
            cubilia mus, dui tellus hendrerit. </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'} 
          mainHeader={'Contact us'} 
        />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500 " href="+51937025631">
        +51 937 025 631
        </a>
        </div>
      </section>

    </>
  );
}
