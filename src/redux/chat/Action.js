import axios from "axios";
import { CHAT_USERS, CREATE_CHAT, CREATE_CHAT_GROUP } from "./ActionType";

export const createChat = (chatData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/chats/single", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${chatData.jwt}`,
      },
      body: JSON.stringify(chatData.jwt),
    });

    const data = await res.json();
    console.log("create chat ", data);
    dispatch({ type: CREATE_CHAT, payload: data });
  } catch (error) {}
};

export const createGroup = (chatData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/chats/group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${chatData.jwt}`,
      },
      body: JSON.stringify(chatData.jwt),
    });

    const data = await res.json();
    console.log("create chat ", data);
    dispatch({ type: CREATE_CHAT_GROUP, payload: data });
  } catch (error) {}
};

export const createUserChat = (chatData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/chats/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${chatData.jwt}`,
      },
    });
    const data = await res.json();
    console.log("create chat ", data);
    dispatch({ type: CHAT_USERS, payload: data });
  } catch (error) {
    console.log("error : ", error);
  }
};
