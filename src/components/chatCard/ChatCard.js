import React from "react";

function ChatCard({displayImage, name}) {
  return (
    <div className="flex item-center justify-center py-2 group cursor-pointer">
      <div className="W-[20%]">
        <img className="h-14 w-14 rounded-full" src={displayImage || "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png" } />
        </div>
      <div className="pl-5 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-lg">{name || "user-name"}</p>
          <p className="text-sm">06:30</p>
        </div>
        <div className="flex justify-between items-center">
          <p>what are you doing , I am waiting for your message</p>
          <div className="flex space-x-2 items-center">
            <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
