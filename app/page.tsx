import { Card, CarouselSlidingInterval } from "@/components";
import Map from "@/components/Map";
import GetCulture from "@/lib/GetCulture";
import { Culture } from "@/typings";

export default async function Home() {
  const culture: Promise<Culture[]> = await GetCulture();

  return (
    <div className="home">
      <header className="w-full md:h-[90vh] h-[60vh]">
        <CarouselSlidingInterval />
      </header>
      <main className="min-h-screen flex flex-col items-center space-y-8 md:space-y-16 pb-24">
        <section className="sm:mt-16 w-full max-w-7xl px-2 py-8 sm:py-24 space-y-4 sm:px-8 sm:grid sm:grid-cols-4 sm:place-items-center">
          <div className="w-full h-full flex items-center justify-center sm:col-span-2 sm:border-r-2 sm:border-gray-800">
            <h1 className="text-2xl sm:text-4xl sm:px-4 font-black text-center">
              TENTANG <br /> PADUKUHAN SEMPU
            </h1>
          </div>
          <div className="sm:col-span-2 w-full h-full flex items-center justify-center">
            <p className="text-center text-base lg:text-xl sm:px-8 text-gray-600">
              ONCE UPON A TIME a girl named Cinderella lived with her stepmother
              and two stepsisters. Poor Cinderella had to work hard all day long
              so the others could rest. It was she who had to wake up each
              morning when it was still dark and cold to start the fire. It was
              she who cooked the meals. It was she who kept the fire going. The
              poor girl could not stay clean, from all the ashes and cinders by
              the fire.
            </p>
          </div>
        </section>
        <section className="w-full px-2 py-8 bg-[#80A08D] space-y-16 grid place-items-center">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl sm:text-4xl sm:px-4 font-black text-center">
              KEGIATAN MASYARAKAT <br />
              SEMPU
            </h1>
          </div>
          <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card promise={culture} />
          </div>
        </section>
        <section className="max-w-7xl flex flex-col md:flex-row px-2">
          <Map />
        </section>
      </main>
    </div>
  );
}
