import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";

import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

const Support = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <MdHeadsetMic className="text-4xl" />
          <p className="text-xl font-semibold">
            Speak to our expert at{" "}
            <span className="text-orange-500">+880 1737886719</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold">Follow Us</h2>
          <Link className="inline-block p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            <FaFacebookF />
          </Link>
          <Link className="inline-block p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            <FaXTwitter />
          </Link>
          <Link className="inline-block p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            <FaInstagram />
          </Link>
          <Link className="inline-block p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Support;
