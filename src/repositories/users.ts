import userDatas from "../datas/users";

export type User = { id: number; firstName: string; lastName: string };

export const getAllUsers = async () => userDatas;
