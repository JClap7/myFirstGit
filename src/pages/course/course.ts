import{ Component } from '@angular/core';

import{ Admin} from '../admin/admin';
import { Department } from '../department/department';
import { Schedule } from '../schedule/schedule';
//import { Instructor } from '../instructor/instructor';
//import { Tutor } from '../tutor/tutor';
//import { Student } from '../student/student';
import { Discussion} from '../discussion/discussion';
import { Resource } from '../resource/resource';


@Component({
  selector: 'Course',
  templateUrl:'course.html'
})

export class Course{
    id:number;
    name: string;
    description: string;
    level: number;
    prerequisite: Course;
    status: string;
    credit: number;
    discussions: Discussion[];
    resources: Resource[];
    schedule: Schedule;

    constructor(
        id:number,
        name: string,
        description: string,
        level: number,
        prerequisite: Course,
        status: string,
        credit: number,
        discussions: Discussion[],
        resources: Resource[],
        schedule: Schedule,){
            this.id= id;
            this.name= name;
            this.description= description;
            this.level= level;
            this.prerequisite= prerequisite;
            this.status= status;
            this.credit= credit;
            this.discussions= discussions;
            this.resources= resources;
            this.schedule= schedule;
        }
}

export interface Course{
    id:number;
    name: string;
    description: string;
    level: number;
    prerequisite: Course;
    status: string;
    credit: number;
    discussions: Discussion[];
    resources: Resource[];
    schedule: Schedule;
}

export function createCourse(
    id:number,
    name: string,
    description: string,
    level: number,
    prerequisite: Course,
    status: string,
    credit: number,
    discussions: Discussion[],
    resources: Resource[],
    schedule: Schedule,){
        this.id= id;
        this.name= name;
        this.description= description;
        this.level= level;
        this.prerequisite= prerequisite;
        this.status= status;
        this.credit= credit;
        this.discussions= discussions;
        this.resources= resources;
        this.schedule= schedule;
}

export enum status{
    active,
    inactive
};