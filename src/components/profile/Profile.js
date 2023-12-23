import React, { useState } from "react";
import { BsArrowLeft, BsCake2, BsCheck2, BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Profile({ setIsUser }) {
  const [flag, setFlag] = useState();
  const [inputValue, setInputValue] = useState(null)

  const handleInputValue = () =>{
    
  }
  
  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft
          className="cursor-pointer text-2xl font-bold"
          onClick={() => setIsUser(false)}
        />
        <p className="cursor-pointer font-semibold">Profile</p>
      </div>
      {/* update profile pic section */}
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput">
          <img
            className="rounded-full w-[15vw] h-[15vw] cursor-pointer"
            src="https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg"
          />
        </label>
        <input type="file" id="imgInput" className="hidden" />
      </div>
      {/* name section  */}
      <div className="p-3">
        <p className="py-3">Your Name</p>
        {!flag ? (
          <div className="w-fil; flex justify-between items-center">
            <p className="py-3">{inputValue || "username"}</p>
            <BsPencil className="cursor-pointer" onClick={()=> setFlag(!flag) }/>
          </div>
        ) : (
          <div className="w-fil; flex justify-between items-center">
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="w-[80%] outline-none border-b-2 border-blue-700 p-2"/>
            <BsCheck2 className="cursor-pointer text-2xl" onClick={()=> setFlag(false)} />
          </div>
        )}
      </div>
      <div className="px-3 my-5">
        <p className="py-10">this is not your username, this name will </p>
      </div>
    </div>
  );
}

export default Profile;
