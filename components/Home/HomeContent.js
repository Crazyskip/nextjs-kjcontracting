import Image from "next/image";

export default function HomeContent() {
  return (
    <section>
      <div className="mx-auto flex flex-col lg:flex-row justify-center w-11/12 sm:w-4/5 mt-12 mb-8">
        <div className="lg:pr-16 lg:w-1/2 font-light py-4">
          <h3 className="text-3xl sm:text-4xl font-bold">
            HEAVY EQUIPMENT READY FOR YOUR JOB
          </h3>
          <p className="my-4 text-gray-600 text-lg">
            With 30 years experience contracting in the Northern Rivers area, we
            have equipment ready to get the job done.
          </p>
          <ul className="list-disc pl-6 text-gray-800">
            <li className="py-1">Selective macadamia tree removal/thinning</li>
            <li className="py-1">
              Mechanical macadamia tree limb removal and chipping
            </li>
            <li className="py-1">Wind break removal including stumps</li>
            <li className="py-1">
              IOM implementation including design & construction of orchard
              drainage
            </li>
            <li className="py-1">
              Onsite tree processing to various coarse mulching
            </li>
            <li className="py-1">
              Unwanted timber removal services with cost offsets
            </li>
            <li className="py-1">
              Supply and delivery of mulch, manure and pre-blended products,
              road bases & aggregates
            </li>
            <li className="py-1">
              Land clearing and property development projects
            </li>
            <li className="py-1">
              Road/driveway maintenance & construction including all civil works
            </li>
            <li className="py-1">Dam construction & cleaning</li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex flex-col md:flex-row text-xl font-bold">
          <div className="flex flex-col md:w-1/2">
            <div className="px-4 pb-4">
              <Image src="/images/excavator.jpg" alt="excavator" width={800} height={600} />
              <h4>EXCAVATORS 8T TO 40T</h4>
            </div>
            <div className="px-4 pb-4">
              <Image
                src="/images/horizontal-grinder.jpg"
                alt="horizontal grinder"
                width={1000}
                height={600}
              />
              <h4>GRADER, GRINDER & CHIPPER</h4>
            </div>
          </div>

          <div className="flex flex-col md:w-1/2">
            <div className="px-4 pb-4">
              <Image src="/images/dump-truck.jpg" alt="dump truck" width={750} height={600} />
              <h4>TRUCKS, TRAILERS & ROLLERS</h4>
            </div>

            <div className="px-4 pb-4">
              <Image
                src="/images/vertical-grab.jpg"
                alt="vertical grab"
                width={1000}
                height={700}
              />
              <h4>VERTICAL GRAB</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
