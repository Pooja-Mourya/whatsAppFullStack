import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function SelectedMember({handleRemoveMember, member}) {
  console.log("member" , member)
  return (
    <div className="flex items-center bg-slate-300 rounded-full">
      <img
        className="w-7 h-7 rounded-full"
        src="https://cdn.pixabay.com/photo/2023/11/26/15/18/snowman-8413769_1280.jpg"
        alt=""
      />
      <p className="px-2">{member}</p>
      <AiOutlineClose  onClick={handleRemoveMember} className="pr-1 cursor-pointer"/>
    </div>
  );
}

export default SelectedMember;
