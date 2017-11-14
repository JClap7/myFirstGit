import{ Component } from '@angular/core';

import{ User} from '../user/user';

@Component({
  selector: 'Admin',
  templateUrl:'admin.html'
})

export class Admin extends User{
    accessType: any;
    
}

export interface Admin extends User{
    accessType: any;
}

export enum AccessType{
    None,
    Read,
    Write,
    ReadWrite,
}

