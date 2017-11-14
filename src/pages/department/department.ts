import{ Component } from '@angular/core';


import { Course } from '../course/course';
import { Schedule } from '../schedule/schedule';
import { Instructor } from '../instructor/instructor';
import { Tutor } from '../tutor/tutor';
import { Student } from '../student/student';


@Component({
  selector: 'Department',
  templateUrl:'department.html'
})

export class Department{
    id:number;
    name: string;
    courses: Course[];
    instructors: Instructor[];
    tutors: Tutor[];
    students: Student[];
    schedule: Schedule;

    constructor(
        id:number,
        name: string,
        courses: Course[],
        instructors: Instructor[],
        tutors: Tutor[],
        students: Student[],
        schedule: Schedule){
            this.id=id;
            this.name=name;
            this.courses= courses;
            this.instructors= instructors;
            this.tutors= tutors;
            this.students= students;
            this.schedule= schedule;
        }
}

export interface Department{
    id:number;
    name: string;
    courses: Course[];
    instructors: Instructor[];
    tutors: Tutor[];
    students: Student[];
    schedule: Schedule;
}

export function createDepartment(
    id:number,
    name: string,
    courses: Course[],
    instructors: Instructor[],
    tutors: Tutor[],
    students: Student[],
    schedule: Schedule){
        this.id=id;
        this.name=name;
        this.courses= courses;
        this.instructors= instructors;
        this.tutors= tutors;
        this.students= students;
        this.schedule= schedule;       
}