import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function Separator() {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto flex flex-col sm:flex-row bg-gray-100 p-6 mb-8 home-icon-separator">
      <div className="flex justify-around flex-grow flex-col lg:flex-row">
        <div className="py-4">
          <div className="w-20 p-4 mx-auto">
            <FontAwesomeIcon className="text-yellow-400" icon={faBriefcase} />
          </div>
          <h5 className="text-center">EXPERIENCE</h5>
        </div>
        <div className="py-4">
          <div className="w-20 p-4 mx-auto">
            <FontAwesomeIcon className="text-yellow-400" icon={faCertificate} />
          </div>
          <h5 className="text-center">HIGH QUALITY</h5>
        </div>
      </div>
      <div className="flex justify-around flex-grow flex-col lg:flex-row">
        <div className="py-4">
          <div className="w-20 p-4 mx-auto">
            <FontAwesomeIcon className="text-yellow-400" icon={faClock} />
          </div>
          <h5 className="text-center">EFFICIENT</h5>
        </div>
        <div className="py-4">
          <div className="special-icon p-4 mx-auto">
            <FontAwesomeIcon className="text-yellow-400" icon={faCalendarAlt} />
          </div>
          <h5 className="text-center">PROJECT PLANNING</h5>
        </div>
      </div>
    </div>
  );
}
