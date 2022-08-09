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
        const [targetUser,index ] = this.getUserById(userId);
        const nup = {...targetUser,name,age,surname,email};
        const newUser = new user(userId,nup.name,nup.age,nup.surname,nup.email);
        this.users[index]= newUser;
        return newUser;


    }
    deleteUser(id:string){
        const [target, index] = this.getUserById(id);
        this.users.splice(index,1)
    } 


    private getUserById(userId:string):[user,number]{
        const index = this.users.findIndex(u => u.id ===userId);
        return [this.users[index],index];  
    }
}


    

