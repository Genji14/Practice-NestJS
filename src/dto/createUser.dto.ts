import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ActiveYn } from "src/enums/activeYn";

export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    username : string;

    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayMaxSize(6)
    @IsString({each: true})
    projects: string[];

    @IsEnum(ActiveYn)
    activeYn: ActiveYn;
}