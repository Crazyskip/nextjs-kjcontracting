export default function Form() {
  return (
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
  );
}
