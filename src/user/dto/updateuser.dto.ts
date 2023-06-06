import { IsString, MinLength } from "class-validator";
import { UserMessageHelper } from "../helpers/message.helper";



export class UpadateUserDto{
    
    @MinLength(2, { message: UserMessageHelper.REGISTER_NAME_NOT_VALID})
    name: string;

    @IsString()
    avatar: string;
}