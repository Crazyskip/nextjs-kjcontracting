import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div className="font-roboto">
      <Head>
        <title>Gallery - KJ Contracting PTY LTD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Gallery" />
      <h3 className="text-center text-4xl font-bold pt-6 pb-2">GALLERY</h3>
      <hr className="w-28 mx-auto border-yellow-400 mb-8" />
      <div className="text-center w-11/12 xl:w-9/12 mx-auto">
        <div>
          <p className="font-light">
            Shown here are some onsite images that demonstrate some of our
            machinery available.
          </p>
          <p className="pb-6 font-light">More photos to be added soon.</p>
          <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4">
            <div>
              <Image
                src="/images/horizontal-grinder-thumb.jpg"
                alt="horizontal grinder"
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
            <div className="h-32">
              <Image src="/images/chipper-thumb.jpg" alt="wood chipper" width={800} height={600} />
            </div>
            <div>
              <Image
                src="/images/dump-truck-thumb.jpg"
                alt="dump truck"
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
            <div>
              <Image
                src="/images/trailer-thumb.jpg"
                alt="trailer"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/images/excavator-thumb.jpg"
                alt="excavator"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/images/vertical-grab-thumb.jpg"
                alt="vertical grab"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold pt-6 pb-2">OUR WORK IN ACTION</div>
          <p className="font-light py-2">
            Here are a couple of videos with our horizontal grinder in action.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="py-2 md:w-1/2 md:px-2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/e2Si_5oocIw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="py-2 md:w-1/2 md:px-2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/lg922sHv0Wk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
