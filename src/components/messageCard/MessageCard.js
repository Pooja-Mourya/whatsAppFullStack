import React from "react";
function MessageCard({ isReqUserMessage, content }) {

  return (
    <div
      className={`py-2 px-2 rounded-md max-w-[100%] ${
        isReqUserMessage ? "self-start bg-white" : "self-end bg-[#d9fdd3]"
      }`}
    >
      <p className={`${isReqUserMessage ? "text-black" : "text-green-700"}`}>
        {content.name || "this is dynamic message"}
      </p>
    </div>
  );
}

export default MessageCard;
