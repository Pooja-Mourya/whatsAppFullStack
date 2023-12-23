import React from "react";

function ChatCard() {
  return (
    <div className="flex item-center justify-center py-2 group cursor-pointer">
      <div className="W-[20%]">
        <img className="h-14 w-14 rounded-full" src="https://cdn.pixabay.com/photo/2014/03/25/15/24/santa-claus-296717_640.png" />
      </div>
      <div className="pl-5 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-lg">Emily</p>
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
