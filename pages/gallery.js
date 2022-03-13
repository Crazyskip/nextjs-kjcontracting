import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Images from "../components/Gallery/Images";
import Videos from "../components/Gallery/Videos";

export default function Gallery() {
  return (
    <div className="font-roboto">
      <Head>
        <title>Gallery - KJ Contracting PTY LTD</title>
        <meta
          name="description"
          content="Northern Rivers Landscaping Business"
        />
        <meta
          name="keywords"
          content="Heavy Equipment, Northern Rivers, Macadamia Industry, Land Clearing"
        />
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
        </div>
        <Images />
        <div>
          <div className="text-2xl font-bold pt-6 pb-2">OUR WORK IN ACTION</div>
          <p className="font-light py-2">
            Here are a couple of videos with our horizontal grinder in action.
          </p>
          <Videos />
        </div>
      </div>
      <Footer />
    </div>
  );
}
