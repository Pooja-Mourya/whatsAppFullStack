import React from "react";
import StatusCard from "./StatusCard";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Status() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center px-[14vw] py-[7vh]">
        {/* left side part */}
        <div className="left h-[85vh] bg-[#1e262c] lg:[30%] w-[50%] px-5">
          <div className="pt-5 h-[13%]">
            <StatusCard />
          </div>
          <hr/>
          <div className="overflow-y-scroll h-[80%] pt-2">
            {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=><StatusCard/>)}
          </div>
        </div>
        {/* right side part */}
        <div className="relative h-[85vh] lg:w-[70%] w-[50%] bg-[#0b141a]">
            <AiOutlineClose onClick={()=>navigate(-1)} className="text-white cursor-pointer absolute top-5 right-10 text-xl"/>
        </div>
      </div>
    </div>
  );
}

export default Status;
