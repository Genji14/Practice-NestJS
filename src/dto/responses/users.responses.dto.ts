import { UserDTO } from "../users/user.dto";

export class ResponseDTO {
    statusCode: number;
    message?: string;
    data?: UserDTO[]
}