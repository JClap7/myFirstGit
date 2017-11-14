import{ Component } from '@angular/core';

import{ User } from '../user/user';


@Component({
  selector: 'Comment',
  templateUrl:'comment.html'
})

export class Comment{
    key:string;
    timestamp:string;
    message:string;
    user: User;
    constructor(
        key:string,
        timestamp:string,
        message:string,
        user: User,){
            this.key= key;
            this.timestamp= timestamp;
            this.message= message;
            this.user= user;
    }
}

export interface Comment{
    key:string;
    timestamp:string;
    message:string;
    user: User;

}

export function createComment(
    key:string,
    timestamp:string,
    message:string,
    user: User){
        this.key= key;
        this.timestamp= timestamp;
        this.message= message;
        this.user= user;
}
