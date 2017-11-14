import{ Component } from '@angular/core';

import{ User} from '../user/user';
import { Course } from '../course/course';
import { Schedule } from '../schedule/schedule';
import { Department } from '../department/department';

@Component({
  selector: 'Student',
  templateUrl:'student.html'
})

export class Student extends User{
	

	courses: Course[];
    schedule: Schedule;

	
	constructor(
        id: number , 
        fullname: string, 
        email: string, 
        password: string, 
        department: Department,
        accessType: string,
        courses: Course[],
        schedule: Schedule,){
            
        super(id,fullname,email,password,department,accessType);
        this.id= id;
        this.fullname= fullname; 
        this.email= email;
        this.password= password;
        this.department= Department;
        this.accessType= accessType;
        this.courses= courses;
        this.schedule= schedule;
	}
}

export interface Student extends User{
	courses: Course[];
	schedule: Schedule;

}

export function createStudent(
                    number: number , 
                    fullname: string, 
                    email: string, 
                    password: string, 
                    department: Department,
                    accessType: string,	
                    courses: Course[],
                    schedule: Schedule){
    //super(number,fullname,email,password,accessType);	
    this.number= number;
    this.fullname= fullname; 
    this.email= email;
    this.password= password;
    this.department= Department;
    this.accessType= accessType;
    this.courses= courses;
    this.schedule= schedule;
}