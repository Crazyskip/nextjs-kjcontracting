import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="font-roboto">
      <Head>
        <title>About Us - KJ Contracting PTY LTD</title>
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
      <Navbar page="About Us" />
      <h3 className="text-center text-4xl font-bold pt-6 pb-2">WHO WE ARE</h3>
      <hr className="w-28 mx-auto border-yellow-400 mb-8" />
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center my-4">
        <div className="w-3/4 mx-auto logo-image">
          <Image
            src="/images/kjcontracting.webp"
            alt="kj contracting logo"
            width="350"
            height="323"
            layout="responsive"
          />
        </div>
        <div className="w-full mx-auto sm:pl-8">
          <h3 className="text-2xl font-medium py-4">THE HISTORY</h3>
          <div className="font-light mb-8">
            <p className="pb-4">
              KJ Contracting Pty Ltd has an enormous 30 years industry
              experience, including specialising in the Macadamia Industry. Our
              client base commands anything from small jobs involving tree
              limbing and maintenance, right through to large clearing and
              property improvement projects, utilizing our heavier equipment.
            </p>
            <p>
              Our business has continued to grow over the past 30 years and is
              well-known throughout the Northern Rivers for delivering quality,
              timely and on-budget projects to completion. We pride ourselves on
              understanding our clients needs and ensuring that we deliver on
              our promise of satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="call-us-banner w-full h-56 md:h-64 xl:h-80">
        <div className="bg-black bg-opacity-60 text-gray-50 font-light h-full p-6 pt-10 sm:pt-14 xl:pt-24 text-center">
          <div className="font-medium text-2xl md:text-3xl lg:text-4xl">
            CALL US TODAY 0427 637 677
          </div>
          <div className="w-48 mx-auto bg-yellow-400 text-black font-medium mt-10 xl:mt-14">
            <Link href="/contact-us">
              <a>
                <div className="py-3">ENQUIRE TODAY</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
