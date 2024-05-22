import { ActiveYn } from "src/enums/activeYn";

export class SearchUserDTO {

    username : string;
    fullname: string;
    role: string;
    projects: string[];
    activeYn: ActiveYn;

}