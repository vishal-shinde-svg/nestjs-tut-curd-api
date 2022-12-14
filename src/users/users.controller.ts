import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get()
    getUsers() {
        return "Hello";
    }

    // @Put(@Param) {
        
    //  }
    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ) {
        const userId = this.userService.insertUser(name, age, surname, email)
        return {
            id: userId,
        }
    }
    @Get()
    getAllUsers() {
        return this.userService.getUsers();
    }
    @Get(':userId')
    getUser(@Param('userId') userId: string) {
        return this.userService.getUsers();
    }

    @Put(':userId')
    updateUser(
    @Param('userId') userId:string,

    @Body('name') name:string,
    @Body('age') age:number,
    @Body('surname') surname:string,
    @Body('email') email:string,
    ){
        return this.userService.updateUser(userId,name,age, surname,email)
    }
    @Delete(':userId')
    deleteUser(@Param('userId')userId:string){
        this.userService.deleteUser(userId);
        }

    }


   

