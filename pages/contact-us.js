import Head from "next/head";
import Form from "../components/Contact-Us/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div className="font-roboto">
      <Head>
        <title>Contact Us - KJ Contracting PTY LTD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Contact Us" />
      <div className="content">
        <h3 className="text-center text-4xl font-bold pt-6 pb-2">CONTACT US</h3>
        <hr className="w-28 mx-auto border-yellow-400 mb-8" />
        <div className="w-11/12 md:w-10/12 xl:w-8/12 mx-auto flex flex-col lg:flex-row lg:justify-between">
          <div className="my-4 lg:w-10/12 xl:w-8/12">
            <h4 className="font-bold text-3xl lg:text-4xl">CONTACTS</h4>
            <div className="font-medium pt-2 pb-3 pl-1">
              <div>DARRYN: 0427 637 677</div>
              <div>KERRI: 0400 041 169</div>
              <div className="pt-2">EMAIL: kjcontracting2@gmail.com</div>
            </div>
            <div className="font-light">
              Servicing the entire Northern Rivers NSW
            </div>
          </div>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
