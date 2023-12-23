import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";

function NewGroup() {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [groupName, setGroupName] = useState("");
  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft className="cursor-pointer text-2xl font-bold" />
        <p className="text-xl font-semibold">New Group</p>
      </div>
      <div className="flex flex-col justify-center item-center my-12">
        <label htmlFor="imgInput" className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2023/12/09/10/10/woman-8439003_640.png"
            alt=""
            className="rounded-full w-[50%] h-[50%] ml-[25%]"
          />
          {isImageUploading && (
            <CircularProgress className="absolute top-[5rem] left-[6rem]" />
          )}
        </label>
        <input
          type="file"
          id="ImgInput"
          className="hidden"
          //   value={isImageUploading}
          onChange={(e) => setIsImageUploading(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-between items-center py-2 px-5">
        <input
          value={groupName}
          className="w-full outline-none border-b-2 border-green-700 px-2 bg-transparent"
          placeholder="Group Subject"
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
        />
      </div>
      {groupName && (
        <div className="py-10 bg-slate-200 flex items-center justify-center">
          <Button>
            <div className="bg-[#0c977d] rounded-full p-4">
              <BsCheck2 className="text-white font bold text-3xl" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}

export default NewGroup;
