import { ActiveYn } from "src/enums/activeYn";

export class UserDTO {

    username: string;
    fullname: string;
    role: string;
    projects: string[];
    activeYn: ActiveYn;

}