import{ Component } from '@angular/core';

import{ Admin} from '../admin/admin';
import { Course } from '../course/course';
import { Schedule } from '../schedule/schedule';
import { Department } from '../department/department';

@Component({
  selector: 'Instructor',
  templateUrl:'instructor.html'
})

export class Instructor extends Admin{
	
	officeLocation: string;
	officeHours: string;
	contact: string;
	courses: Course[];
	schedule: Schedule;
	
	constructor(
        id: number , 
        fullname: string, 
        email: string, 
        password: string, 
        department: Department,
        accessType: string,
        officeLocation: string,
        officeHours: string,
        contact: string,
        courses: Course[],
        schedule: Schedule){

        super(id,fullname,email,password,department,accessType);
        this.id= id;
        this.fullname= fullname; 
        this.email= email;
        this.password= password;
        this.department= department;
        this.accessType= accessType;
        this.officeLocation= officeLocation;
        this.officeHours= officeHours;
        this.contact= contact;
        this.courses= courses;
        this.schedule= schedule;
	}
}

export interface Instructor extends Admin{
    officeLocation: string;
	officeHours: string;
	contact: string;
	courses: Course[];
	schedule: Schedule;

}

export function createInstructor(
                    id: number , 
                    fullname: string, 
                    email: string, 
                    password: string, 
                    department: Department,
                    accessType: string,	
                    officeLocation: string,
                    officeHours: string,
                    contact: string,
                    courses: Course[],
                    schedule: Schedule){
    //super(number,fullname,email,password,accessType);	
    this.id= id;
    this.fullname= fullname; 
    this.email= email;
    this.password= password;
    this.department= department;
    this.accessType= accessType;
    this.officeLocation= officeLocation;
    this.officeHours= officeHours;
    this.contact= contact;
    this.courses= courses;
    this.schedule= schedule;
}