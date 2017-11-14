import{ Component } from '@angular/core';

import{ User } from '../user/user';
import { Comment} from '../comment/comment';


@Component({
  selector: 'Discussion',
  templateUrl:'discussion.html'
})

export class Discussion{
    key:string;
    title:string;
    message:string;
    startedBy: User;
    comments: Comment[];
    constructor(
        key:string,
        title:string,
        message:string,
        startedBy: User,
        comments: Comment[]){
            this.key= key,
            this.title= title,
            this.message= message,
            this.startedBy= startedBy,
            this.comments= comments
    }
}

export interface Discussion{
    key:string;
    title:string;
    message:string;
    startedBy: User;
    comments: Comment[];

}

export function createDiscussion(
    key:string,
    title:string,
    message:string,
    startedBy: User,
    comments: Comment[]){
        this.key= key,
        this.title= title,
        this.message= message,
        this.startedBy= startedBy,
        this.comments= comments
}
