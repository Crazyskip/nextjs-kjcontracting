import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/Home/HomeBanner";
import Separator from "../components/Home/Separator";
import HomeContent from "../components/Home/HomeContent";
import HomeIconSeparator from "../components/Home/HomeIconSeparator";
import HomeMoreInfoForm from "../components/Home/HomeMoreInfoForm";
import HomeWhyChooseBanner from "../components/Home/HomeWhyChooseBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-roboto">
      <Head>
        <title>KJ Contracting PTY LTD</title>
        <meta name="description" content="Landscaping Business" />
        <meta name="keywords" content="Heavy Equipment, Northern Rivers, Macadamia Industry, Land Clearing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar page="Home" />
      <HomeBanner />
      <Separator />
      <HomeContent />
      <HomeIconSeparator />
      <HomeMoreInfoForm />
      <HomeWhyChooseBanner />

      <Footer />
    </div>
  );
}
