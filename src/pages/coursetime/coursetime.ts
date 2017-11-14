import{ Component } from '@angular/core';





@Component({
  selector: 'CourseTime',
  templateUrl:'coursetime.html'
})

export class CourseTime{
    item: any;
    allocatedTime:string;
    constructor(
        item:any, 
        allocatedTime: string){
            this.item= item;
            this.allocatedTime= allocatedTime;
    }
}

export interface CourseTime{
    item: any;
    allocatedTime:string;

}

export function createCourseTime(
        item:any, 
        allocatedTime: string){
            this.item= item;
            this.allocatedTime= allocatedTime;
    }
}