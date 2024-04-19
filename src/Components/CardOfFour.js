import React from "react";

const CardOfFour = (props) => {
  return (
    <div className="bg-white w-[20vw] md:h-[28vw] sm:h-[24vw] p-6 flex flex-col items-start text-xs">
      <div className="w-full">{props.title}</div>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <div>
            <img src={props.image1} alt="" className="sm:w-[40vw] md:w-[50vw] lg:w-[7vw] sm:h-[8vh] md:h-[12vh] lg:h-[18vh]" />
          </div>
          <div>
            <img src={props.image2} alt="" className="sm:w-[40vw] md:w-[50vw] lg:w-[7vw] sm:h-[8vh] md:h-[12vh] lg:h-[18vh]" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <img src={props.image3} alt="" className="sm:w-[40vw] md:w-[50vw] lg:w-[7vw] sm:h-[8vh] md:h-[12vh] lg:h-[18vh]" />
          </div>
          <div>
            <img src={props.image4} alt="" className="sm:w-[40vw] md:w-[50vw] lg:w-[7vw] sm:h-[8vh] md:h-[12vh] lg:h-[18vh]" />
          </div>
        </div>
      </div>
      <div className="w-full">{props.link}</div>
    </div>
  );
};

export default CardOfFour;
