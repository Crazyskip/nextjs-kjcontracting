import Head from "next/head";
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
            <h4 className="font-bold text-2xl">CONTACTS</h4>
            <div className="font-medium pt-2 pb-3">
              <div>DARRYN: 0427 637 677</div>
              <div>KERRI: 0400 041 169</div>
              <div className="pt-2">EMAIL: kjcontracting2@gmail.com</div>
            </div>
            <div className="font-light">
              Servicing the entire Northern Rivers NSW
            </div>
          </div>
          <div className="my-4 lg:ml-7 enquiry-form">
            <h4 className="font-bold text-2xl">ENQUIRY FORM</h4>
            <form>
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-3 font-light focus:outline-none my-2"
                id="name"
                type="text"
                placeholder="Name"
                required="required"
              />
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-3 font-light focus:outline-none my-2"
                id="phone"
                type="tel"
                placeholder="Phone"
              />
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-3 font-light focus:outline-none my-2"
                id="email"
                type="email"
                placeholder="Email"
                required="required"
              />
              <textarea
                className="appearance-none border border-gray-400 resize-none w-full py-2 px-3 my-2 h-32 font-light focus:outline-none"
                placeholder="Equipment needed and days required"
                required="required"
              ></textarea>
              <input
                type="submit"
                value="SUBMIT"
                className="w-full md:w-auto py-3 px-8 font-medium bg-yellow-400"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
