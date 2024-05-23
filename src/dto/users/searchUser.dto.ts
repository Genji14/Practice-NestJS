import { ActiveYn } from "src/enums/activeYn";

export interface SearchUserDTO {

    username?: string;
    fullname?: string;
    role?: string;
    projects?: string[] | string;
    activeYn?: ActiveYn;

}