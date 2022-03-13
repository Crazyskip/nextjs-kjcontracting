import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function WhyChooseBanner() {
  return (
    <div className="why-choose-banner">
      <Image
        src="/images/chipper.webp"
        layout="fill"
        className="object-cover"
        alt="chipper"
      />
      <div className="bg-black bg-opacity-60 text-gray-50 font-light h-full w-full pt-6 sm:pt-12 xl:pt-20 pl-6 pr-2 absolute">
        <div className="lg:w-11/12 xl:w-4/5 mx-auto flex flex-col lg:flex-row lg:justify-between">
          <div className="pr-8">
            <span className="text-2xl sm:text-4xl text-gray-50 font-bold">
              WHY CHOOSE KJ CONTRACTING PTY LTD?
            </span>
            <div className="flex flex-col sm:flex-row pt-4">
              <ul className="sm:w-1/2 pb-4">
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">Wide Selection of Equipment</span>
                </li>
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">Affordable Prices</span>
                </li>
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">30 Years experience</span>
                </li>
              </ul>
              <ul className="sm:w-1/2">
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">Professional results</span>
                </li>
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">
                    Macadamia Industry specific services & equipment
                  </span>
                </li>
                <li className="flex items-start py-1">
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 pt-1"
                    icon={faCheck}
                  />
                  <span className="px-3">
                    Property improvement and land clearing advice
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4 lg:py-0 call-us-box">
            <div className="text-2xl sm:text-4xl text-gray-50 font-bold pb-4">
              CALL US TODAY
            </div>
            <div className="text-2xl sm:text-4xl text-yellow-400 font-medium pb-2">
              0427 637 677
            </div>
            <div className="">
              Call us for more information or to discuss your requirements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
