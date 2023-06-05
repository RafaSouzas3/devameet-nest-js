import { BadRequestException, Controller, Get , Request} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserMessageHelper } from "./helpers/message.helper";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}
    @Get()
    async getUser (@Request() req){
        const {userId} = req?.user;
        const user = await this.userService.getUserById(userId);

        if(!user){
            throw new BadRequestException(UserMessageHelper.GET_USER_NOT_FOUND)
        }
        return { 
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            id: user._id
        }
    }
}