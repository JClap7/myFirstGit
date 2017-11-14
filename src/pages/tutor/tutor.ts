import{ Component } from '@angular/core';

import{ Admin} from '../admin/admin';
import { Course } from '../course/course';
import { Schedule } from '../schedule/schedule';
import { Department } from '../department/department';

@Component({
  selector: 'Tutor',
  templateUrl:'tutor.html'
})

export class Tutor extends Admin{
	
	officeLocation: string;
	officeHours: string;
	contact: string;
	courses: Course[];
    schedule: Schedule;
    about: string;
	
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
        schedule: Schedule,
        about: string){
            
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
        this.about= about;
	}
}

export interface tutor extends Admin{
    officeLocation: string;
	officeHours: string;
	contact: string;
	courses: Course[];
    schedule: Schedule;
    about: string;

}

export function createTutor(
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
                    schedule: Schedule,
                    about: string){
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
    this.about= about;
}