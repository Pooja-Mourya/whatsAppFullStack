import React, { useEffect, useState } from "react";
import { TbCircleDotted } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsEmojiLaughing, BsFilter, BsMicFill } from "react-icons/bs";
import ChatCard from "./chatCard/ChatCard";
import { BsThreeDotsVertical } from "react-icons/bs";
import MessageCard from "./messageCard/MessageCard";
import { ImAttachment } from "react-icons/im";
import Profile from "./profile/Profile";
import { useNavigate } from "react-router-dom";
import { MenuItem, Menu } from "@mui/material";
import CreateGroup from "./group/CreateGroup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, searchUser } from "../redux/auth/Action";
import { createUserChat } from "../redux/chat/Action";

function HomePage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const {auth , chat} = useSelector((state) => state);
  const token = localStorage.getItem("token");
  const [querys, setQuerys] = useState("");
  const [currentChat, setCurrentChat] = useState(false);
  const [content, setContent] = useState("");
  const [isUser, setIsUser] = useState(null);
  const [isGroup, setIsGroup] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("")

  const handleCurrentChat = async (userId) => {
    setCurrentChat(true);
    // dispatch(createChat({token , data:{userId}}))
    try {
      await axios.post(
        "http://localhost:8080/api/chats/single",
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearch = (keyword) => {
    setLoading(true);
    dispatch(searchUser({ keyword, token }));
    setLoading(false);
  };
  const handleUserProfile = () => {
    setIsUser(true);
  };
  const handleCreateNewMessage = () => {};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateGroup = () => {
    setIsGroup(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/chats/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);
 
  useEffect(()=>{
    dispatch(currentUser(token))
  },[dispatch])

  return (
    <div>
      <div className="py-14 bg-[#00a884] w-full"></div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-6 w-[97%]">
        <div className="left w-[30%] bg-[#e8e9ec] h-full">
          <div className="w-full">
            {isUser && <Profile setIsUser={(e) => setIsUser(e)} />}
            {isGroup && <CreateGroup />}
            {!isUser && !isGroup && (
              <div className="flex justify-between items-center p-3">
                <div
                  onClick={handleUserProfile}
                  className="flex items-center space-x-3"
                >
                  <img
                    className="rounded-full w-10 h-10 cursor-pointer"
                    src="https://cdn.pixabay.com/photo/2023/12/07/23/12/black-spotted-longhorn-beetle-8436478_1280.jpg"
                    alt=""
                  />
                  <p>Pooja Mourya</p>
                </div>
                <div className="space-x-3 text-2xl flex">
                  <TbCircleDotted onClick={() => navigation("/status")} />
                  <BiCommentDetail />
                  <div>
                    <BsThreeDotsVertical
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => navigation("/profile")}>
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handleCreateGroup}>
                        Create Group
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            )}

            <div className="relative flex justify-center items-center bg-white py-4 px-3">
              <input
                className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                type="text"
                placeholder="Search or start new Chat"
                value={querys}
                onChange={(e) => {
                  setQuerys(e.target.value);
                  handleSearch(e.target.value);
                }}
              />
              <AiOutlineSearch className="left-5 top-7 absolute" />
              <div>
                <BsFilter className="ml-4 text-3xl" />
              </div>
            </div>
            {/* all user who is in the chat App */}
            <div className="bg-white overflow-y-scroll h-[76.8vh] px-3">
              {loading && <p>Loading...</p>}
              {querys &&
                auth?.searchUser?.map((item, index) => {
                  // console.log(item);
                  return (
                    <div key={index} onClick={() => handleCurrentChat(item.id)}>
                      <hr />
                      <ChatCard data={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="right flex justify-center items-center w-[70%]">
          {!currentChat && (
            <div className="w-[60%] flex flex-col items-center">
              <div className="max-w-[70%] text-center">
                <img
                  className=""
                  src="https://cdn.pixabay.com/photo/2017/01/17/20/03/whatsapp-1987859_1280.png"
                  alt=""
                />
                <h1 className=" text-4xl text-gray-600">WhatsApp Web</h1>
                <p className="text-gray-600">
                  Send the reveive message without keeping Your phone ONLINE
                </p>
              </div>
            </div>
          )}

          {/* message part */}
          {currentChat && (
            <div className="w-[100%]">
              <div className="header absolute top-0 w-[70%]  bg-[#f0f2f5]">
                <div className="flex justify-between">
                  <div className="py-3 space-x-4 flex px-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_640.png"
                      alt="/"
                    />
                    <p>Sanshkar</p>
                  </div>
                  <div className="py-3 space-x-4 items-center px-3">
                    <AiOutlineSearch onClick={() => navigation("/status")} />
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              {/* message section */}
              <div className="px-10 h-[85vh] overflow-y-scroll w-[100%] bg-blue-200">
                <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                  {data.map((item, i) => (
                    <MessageCard
                      key={i}
                      content={item}
                      isReqUserMessage={i % 2 === 0}
                    />
                  ))}
                </div>
              </div>
              {/* footer of the chat App */}
              <div className="footer py-3 bg-[#f0f2f5] absolute bottom-0 w-[70%]  text-2xl flex justify-between">
                <div className="flex justify-between w-[7%]">
                  <BsEmojiLaughing />
                  <ImAttachment />
                </div>
                <input
                  className="outline-none bg-white pl-4 rounded-md w-[85%]"
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type message"
                  value={content}
                  onChangeKeys={(e) => {
                    if (e.key == "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
