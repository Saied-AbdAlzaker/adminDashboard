import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IRegister } from 'src/app/Models/auth';
import { Gender, Role } from 'src/app/Models/role.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide = true;
  message: string = '"Welcome In Admin Project"';
  role: Role[] = [Role.admin, Role.user];
  gender: Gender[] = [Gender.male, Gender.female];


  registerForm = new FormGroup({
    fullName: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')
    ]),
    gender: new FormControl(null, [
      Validators.required,
    ]),
    role: new FormControl(null, [
      Validators.required,
    ]),
  }
  );

  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    // public dialog: MatDialog,
    private _Router: Router
  ) { }

  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myData = new FormData();
    myData.append('fullName', data.value.fullName);
    myData.append('email', data.value.email);
    myData.append('password', data.value.password);
    myData.append('gender', data.value.gender);
    myData.append('role', data.value.role);

    this._authService.onRegister(myData).subscribe({
      next: (res: IRegister) => {
        console.log(res);
        // this.verifyEmail = localStorage.setItem('email', res.email);

      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success(this.message, 'Succeded');
        this._Router.navigate(['auth'])
      },
    });
  }

}


