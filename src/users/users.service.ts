import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/createUser.dto';
import { SearchUserDTO } from 'src/dto/searchUser.dto';
import { UpdateUserDTO } from 'src/dto/updateUser.dto';

@Injectable()
export class UserService {
    search(searchUserDTO: SearchUserDTO): SearchUserDTO {
      return searchUserDTO;
    }
  
    create(addUserDTO: CreateUserDTO) : string{
      return 'Create user' + JSON.stringify(addUserDTO);
    }
  
    update( username: string, updateUserDTO: UpdateUserDTO): string {
      return 'Update user ' + username;
    }
  
    delete(username: string): string {
      return 'Delete User' + username;
    }
}
