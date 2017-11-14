import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


//my imports start
import { User } from '../pages/user/user';
import { Admin } from '../pages/admin/admin';
import { Instructor} from '../pages/instructor/instructor';
import { Tutor } from '../pages/tutor/tutor';
import { Student } from '../pages/student/student';
import { Department } from '../pages/department/department';
import { Course } from '../pages/course/course';
import { Schedule } from '../pages/schedule/schedule';
import { CourseTime} from '../pages/coursetime/coursetime';
import { Comment} from '../pages/comment/comment';
import { Discussion} from '../pages/discussion/discussion';
import { Resource} from '../pages/resource/resource';
//my imports end


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    User,
    Admin,
    Instructor,
    Tutor,
    Student,
    Department,
    Course,
    Schedule,
    CourseTime,
    Comment,
    Discussion,
    Resource

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
