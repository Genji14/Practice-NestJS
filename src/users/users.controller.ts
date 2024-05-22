import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/createUser.dto';
import { SearchUserDTO } from 'src/dto/searchUser.dto';
import { UpdateUserDTO } from 'src/dto/updateUser.dto';
import { UserService } from './users.service';


@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get("/search")
  searchUser(@Query() searchUserDTO: SearchUserDTO): SearchUserDTO {
    return this.userService.search(searchUserDTO);
  }

  @Post("/insert")
  create(@Body() createUserDTO: CreateUserDTO): string {
    return this.userService.create(createUserDTO);
  }

  @Patch("/:username")
  updateUser(@Param("username") username: string, @Body() updateUserDTO: UpdateUserDTO): string {
    return this.userService.update(username, updateUserDTO);
  }

  @Delete("/:username")
  deleteUser(@Param("username") username: string): string {
    return this.userService.delete(username);
  }
}
