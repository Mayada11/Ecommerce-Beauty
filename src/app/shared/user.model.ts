import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ NgForm, FormControl, FormGroup, Validators }from '@angular/forms'


export class User {
    name:string;
    email:string;
    password:string;
    gender:string;
    userImage:string;
    userType:number;
}
