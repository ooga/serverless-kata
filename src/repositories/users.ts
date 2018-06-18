export type User = { id: number; firstName: string; lastName: string };

export const getAllUsers = async (users: User[]) => users;
