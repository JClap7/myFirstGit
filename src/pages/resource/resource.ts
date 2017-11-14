import{ Component } from '@angular/core';

import{ User } from '../user/user';
import { Comment} from '../comment/comment';


@Component({
  selector: 'Resource',
  templateUrl:'resource.html'
})

export class Resource{
    key:string;
    title:string;
    name:string;
    description:string;
    filetype:string;
    comments: Comment[];
    constructor(
        key:string,
        title:string,
        name:string,
        description:string,
        filetype:string,
        comments: Comment[]){
            this.key= key;
            this.title= title;
            this.name= name;
            this.description= description;
            this.filetype= filetype;
            this.comments=comments;
    }
}

export interface Resource{
    key:string;
    title:string;
    name:string;
    description:string;
    filetype:string;
    comments: Comment[];

}

export function createResource(
    key:string,
    title:string,
    name:string,
    description:string,
    filetype:string,
    comments: Comment[]){
        this.key= key;
        this.title= title;
        this.name= name;
        this.description= description;
        this.filetype= filetype;
        this.comments=comments;
}
