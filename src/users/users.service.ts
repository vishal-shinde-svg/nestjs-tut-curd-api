import { Injectable } from '@nestjs/common';
import { user } from './user.module';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UsersService {
    private users: user[] = [];

    insertUser(name:string,age:number,surname:string,email:string)
    {
        const id = uuidv4();
        const newUser= new user (id,name,age,surname,email);
        this.users.push(newUser)
        return id;
    }

    getUsers(){
        return [... this.users]
    }

    getUser(id:string){
        return this.getUserById(id)[0];
    }
    updateUser(userId:string,name:string,age:number,surname:string,email:string){
        const [targetUser,index ] = this.getUserById(id);

    }
    private getUserById(id:string){
        const index = this.users.findIndex(u => u.id ===id);
        return [this.users[index],index];  
    }
}


    

