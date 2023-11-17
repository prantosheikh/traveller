import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Container from "../../../components/Shared/Container/Container";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Us"
        backgroundImage="https://i.ibb.co/XDrBdgp/view-famous-palombaggia-beach-sunrise.jpg"
      />

      <Container>
        <div className="flex justify-around items-start">
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold  font-sans  text-gray-800">
              Hello. Our agency has been present for  <br /> over 29 years  in the
              market. We make the <br />  most of all our customers.
            </h3>
          </div>
          <div  className="w-[50%] ">
            <p style={{lineHeight: '27px'}} className="text-gray-700 font-sans text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="py-4 px-6 bg-[#ce5a25] text-white font-semibold rounded-lg mt-4">Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
