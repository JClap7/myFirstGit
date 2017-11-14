import { Component } from '@angular/core';

import { Department } from '../department/department';

@Component({
  selector: 'User',
  templateUrl: 'user.html'
})

export class User{
	id: number;
	fullname: string;
	email: string;
	password: string;
	department: Department;
	accessType: any;
	
	constructor(id: number , fullname: string, email: string,  password: string,department: Department, accessType: string){
		this.id=id;
		this.fullname= fullname;
		this.email= email;
		this.password= password;
		this.department= department;
		this.accessType= accessType;
	}			
}


export interface User{
	id: number;
	fullname: string;
	email: string;
	password: string;
	accessType: any;
	
		
}

export function createUser(id: number , fullname: string, email: string, password: string,department: Department, accessType: string){
    this.id= id;
    this.fullname= fullname;
    this.email= email;
	this.password= password;
	this.department= department;
    this.accessType= accessType;
}	
