import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
    getUsers(){
        return "Hello";
    }
    @Post()
    insertUser(
        @Body('name') name:string,
        @Body('age') age:number,
        @Body('surname') surname:string,
        @Body('email') email:string,
    ){
      const userId =  this.userService.insertUser(name,age,surname,email)
      return {
        id:userId,
      }
    }
    @Get()
    getAllUsers(){
        return this.userService.getUsers();
    }
    @Get(':userId')
    getUser( @Param('userId') userId: string){
        return this.userService.getUsers(userId);
    }
    @Put(':userId')
    updateUser()
    
}
