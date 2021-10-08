import { UserAuth } from "./models/UserAuth";

export const LoginMock: UserAuth[] = [
    {
        userName: "Admin",
        bearerToken: "abi393kdkd9393ikd",
        isAuthenticated: true,
        isAdmin: true
    },
    {
        userName: "User",
        bearerToken: "sd9f923k3kdmcjkhd",
        isAuthenticated: true,
        isAdmin: false
    }
]