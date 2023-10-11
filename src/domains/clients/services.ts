import { Client } from "./types";

export const getUserInfo = () => {
    const userInfo: string | null = localStorage.getItem("clientInfo");
    if (userInfo) {
        const parsedUserInfo: Client = JSON.parse(userInfo);
        return parsedUserInfo;
    }
};