import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/users/createUser.dto';
import { SearchUserDTO } from 'src/dto/users/searchUser.dto';
import { UpdateUserDTO } from 'src/dto/users/updateUser.dto';
import { UserDTO } from 'src/dto/users/user.dto';
import { ActiveYn } from 'src/enums/activeYn';

@Injectable()
export class UserService {

  private users: UserDTO[];
  constructor() {
    this.users = [
      {
        username: "anle",
        fullname: "Lê Đặng Hoàng Ân",
        role: "Developer",
        projects: ["OPUS", "D&D"],
        activeYn: ActiveYn.Y
      }
    ];
  }

  search(searchUserDto: SearchUserDTO): UserDTO[] {
    if (typeof searchUserDto.projects === 'string') {
      searchUserDto.projects = [searchUserDto.projects];
    }
    return this.users.filter((user) => {
      const { projects, ...searchWithNoProject } = searchUserDto;
      for (const property in searchWithNoProject) {
        if (searchWithNoProject[property] !== user[property]) {
          return false;
        }
      }
      if (
        Array.isArray(projects) &&
        projects.every((item) => typeof item === 'string')
      ) {
        if (!projects.every((item) => user.projects.includes(item))) {
          return false;
        }
      }
      return true;
    });
  }

  create(createUserDTO: CreateUserDTO): boolean {
    const user = this.users.find(user => user.username === createUserDTO.username.trim());
    if (user)
      return false;
    this.users.push(createUserDTO);
    return true;
  }

  update(username: string, updateUserDTO: UpdateUserDTO): boolean {
    const user = this.users.find(user => user.username === username);
    if (!user)
      return false;

    for (const key in updateUserDTO) {
      if (updateUserDTO.hasOwnProperty(key)) {
        user[key] = updateUserDTO[key];
      }
    }

    return true;
  }

  delete(username: string): boolean {
    const index = this.users.findIndex(user => user.username === username);
    if (index === -1)
      return false;
    this.users.splice(index, 1);
    return true;
  }
}
