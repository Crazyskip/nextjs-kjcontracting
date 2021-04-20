export default function HomeMoreInfoForm() {
  return (
    <section className="my-8 w-11/12 sm:w-4/5 mx-auto flex flex-col lg:flex-row">
      <div className="py-4 lg:mr-16">
        <h4 className="text-3xl sm:text-4xl font-bold">MORE INFORMATION</h4>
        <div className="text-gray-600 font-light">
          <p className="py-4">
            Our broad range of machinery assets enables us to provide our
            clients with an excellent range of services for an easy start to
            finish process that takes the stress out of your project.
          </p>
          <p className="py-1">
            If you need to know more information about what we can provide,
            email us using the request form, or call us today on:
          </p>
          <p>0427 637 677 (Darryn) or 0400 041 169 (Kerri)</p>
        </div>
      </div>
      <div className="bg-yellow-400 px-6 py-8">
        <h4 className="text-xl font-bold py-2">SEND US AN EMAIL</h4>
        <form>
          <input
            className="appearance-none border w-full py-2 px-3 font-light focus:outline-none my-2"
            id="name"
            type="text"
            placeholder="Name"
            required="required"
          />
          <input
            className="appearance-none border w-full py-2 px-3 font-light focus:outline-none my-2"
            id="phone"
            type="tel"
            placeholder="Phone"
          />
          <input
            className="appearance-none border w-full py-2 px-3 font-light focus:outline-none my-2"
            id="email"
            type="email"
            placeholder="Email"
            required="required"
          />
          <textarea
            className="appearance-none resize-none w-full py-2 px-3 my-2 h-32 font-light focus:outline-none"
            placeholder="Equipment needed and days required"
            required="required"
          ></textarea>
          <input
            type="submit"
            value="SUBMIT"
            className="w-full border md:w-auto py-3 px-8 font-medium bg-gray-900 text-gray-50"
          />
        </form>
      </div>
    </section>
  );
}
