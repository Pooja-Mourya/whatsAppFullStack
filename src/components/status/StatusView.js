// import React, { useEffect, useState } from "react";
// import { DummyStory } from "./DummyStory";
// import ProgressBar from "./ProgressBar";
// import { BsArrowLeft } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// function StatusView() {
//     const navigate = useNavigate()
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNextStory = () => {
//     if (currentIndex < DummyStory.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setActiveIndex(activeIndex + 1);
//     } else {
//       setCurrentIndex(0);
//       setActiveIndex(0);
//     }
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNextStory();
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   return (
//     <div>
//       <div className="flex justify-center h-[100vh] bg-slate-900">
//         <div className="relative">
//           <img
//             className="max-h-[90vh] object-contain"
//             src={DummyStory?.[currentIndex].stories}
//             alt=""
//           />
//           <div className="absolute top-0 flex w-full">
//             {DummyStory.map((item, index) => {
//               <ProgressBar
//                 key={index}
//                 index={index}
//                 activeIndex={activeIndex}
//                 duration={200}
//               />;
//             })}
//           </div>
//         </div>
//         <div>
//             <BsArrowLeft onClick={()=>navigate(-1)} className="text-white text-2xl cursor-pointer absolute top-10 left-10"/>
//             <AiOutlineClose onClick={()=>navigate(-1)} className="text-white text-2xl cursor-pointer absolute top-10 right-10"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StatusView;

import React from 'react'

function StatusView() {
  return (
    <div>StatusView</div>
  )
}

export default StatusView