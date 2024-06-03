import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/users/createUser.dto';
import { SearchUserDTO } from 'src/dto/users/searchUser.dto';
import { UpdateUserDTO } from 'src/dto/users/updateUser.dto';
import { UserService } from './users.service';
import { ResponseDTO } from 'src/dto/responses/users.responses.dto';


@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get("/search")
  searchUser(@Query() searchUserDTO: SearchUserDTO): ResponseDTO {
    return { statusCode: HttpStatus.OK, data: this.userService.search(searchUserDTO) };
  }

  @Post("/insert")
  create(@Body() createUserDTO: CreateUserDTO): ResponseDTO {
    if (!this.userService.create(createUserDTO)) {
      throw new HttpException('User is existed', HttpStatus.CONFLICT);
    }
    return { statusCode: HttpStatus.CREATED, message: "Create user sucessfully !!" };
  }

  @Patch("/:username")
  updateUser(@Param("username") username: string, @Body() updateUserDTO: UpdateUserDTO): ResponseDTO {
    if (!this.userService.update(username, updateUserDTO)) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.NO_CONTENT, message: 'Update user successfully !!' }
  }

  @Delete("/:username")
  deleteUser(@Param("username") username: string): ResponseDTO {
    if (!this.userService.delete(username)) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.NO_CONTENT, message: 'Delete user successfully !!' }
  }
}
