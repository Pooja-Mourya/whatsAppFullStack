import { CHAT_USERS, CREATE_CHAT, CREATE_CHAT_GROUP } from "./ActionType";

const initialValue = {
  chats: [],
  createdGroup: null,
  createdChat: null,
};

export const chatReducer = (store = initialValue, { type, payload }) => {
  if (type === CREATE_CHAT) {
    return { ...store, createdChat: payload };
  } else if (type === CREATE_CHAT_GROUP) {
    return { ...store, createdGroup: payload };
  } else if (type === CHAT_USERS) {
    return { ...store, chats:payload };
  }
  return store;
};
