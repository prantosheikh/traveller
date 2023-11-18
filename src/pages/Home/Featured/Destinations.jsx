import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import { PiCalendarCheckLight } from "react-icons/pi";
import Container from "../../../components/Shared/Container/Container";

const Destinations = () => {
  return (
    <Container className='bg-white'>
      <div className="flex justify-center md:justify-between gap-2 items-center  w-full lg:w-[70%] mx-auto border rounded-full py-4 px-8 bg-white border-orange-500">
        <div className="flex items-center gap-4">
          <div className="md:border border-gray-300  md:p-3 rounded-full">
            <CiLocationOn className="text-sm hidden md:block md:text-2xl" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-lg font-semibold text-gray-600">Where</h2>
            <select className="selectw-full max-w-xs">
              <option disabled selected>
                Destinations
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>
        <div>
          <div className="md:border border-gray-300  md:p-3 rounded-full">
            <PiCalendarCheckLight className="text-sm hidden md:block md:text-2xl" />
          </div>
          {/* To Do Make Calendar  */}
        </div>
        <div className="flex items-center gap-4">
          <div className="md:border border-gray-300  md:p-3 rounded-full">
            <IoFlagOutline className="text-sm hidden md:block md:text-2xl" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-lg font-semibold text-gray-600">Tours Type</h2>
            <select className="selectw-full max-w-xs">
              <option disabled selected>
                ALL Tours
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <div>
            <div className="border bg-orange-500   p-3 md:ms-8 rounded-full">
              <IoMdSearch className="cursor-pointer text-lg md:text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Destinations;
