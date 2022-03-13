import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner">
      <Image
        src="/images/horizontal-grinder-full.webp"
        layout="fill"
        className="object-cover"
        alt="horizontal grinder"
        priority
      />
      <div className="banner-box text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-50 bg-gray-900 bg-opacity-90 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 py-8 sm:py-10 pl-4 sm:pl-10 pr-4 sm:pr-12">
        <h1>KJ CONTRACTING PTY LTD</h1>
        <h2 className="mt-6 sm:mt-12">HEAVY EQUIPMENT CONTRACTING</h2>
        <p className="mt-6 text-base sm:text-lg font-normal">
          We Can Help You Get the Job Done!
        </p>
      </div>
    </div>
  );
}
