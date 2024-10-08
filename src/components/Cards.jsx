import { FaUserGraduate } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdFlightClass } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const Cards = () => {
  return (
    <div className="cards  mt-5 px-4">
      <div className="row justify-between">
        <div className="col-md-6 col-lg-2 col-sm-12 card-items p-4 rounded-lg my-4">
          <div className="archivements mb-3 flex gap-2 items-center">
            <span className="text-[gold] text-2xl">
              <FaUserGraduate />
            </span>
            <h2 className="text-white font-semibold text-2xl">94</h2>
          </div>
          <p className="text-white">Total students</p>
        </div>
        <div className="col-md-6 col-lg-2 col-sm-12 card-items p-4 rounded-lg my-4">
          <div className="archivements mb-3 flex gap-2 items-center">
            <span className="text-[blue] text-2xl">
              <FaChalkboardTeacher />
            </span>
            <h2 className="text-white font-semibold text-2xl">32</h2>
          </div>
          <p className="text-white">Total teachers</p>
        </div>
        <div className="col-md-6 col-lg-2 col-sm-12 card-items p-4 rounded-lg my-4">
          <div className="archivements mb-3 flex gap-2 items-center">
            <span className="text-[#7aff38] text-2xl">
              <MdFlightClass />
            </span>
            <h2 className="text-white font-semibold text-2xl">56</h2>
          </div>
          <p className="text-white">Total classes</p>
        </div>
        <div className="col-md-6 col-lg-2 col-sm-12 card-items p-4 rounded-lg my-4">
          <div className="archivements mb-3 flex gap-2 items-center">
            <span className="text-[#ff2d2d] text-2xl">
              <RiAdminFill />
            </span>
            <h2 className="text-white font-semibold text-2xl">56</h2>
          </div>
          <p className="text-white">Adminstrative stuff</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
