import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import isPasswordValid from '../../validator/isPasswordValid';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.localstorageService.setUserNametoLocalStorage(this.validateForm.value.userName);
      this.localstorageService.setTokenToLokalStorage();
      this.localstorageService.updateUsers(this.validateForm.value.userName);
      this.router.navigate(['']);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private localstorageService: LocalstorageService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), isPasswordValid]),
      remember: new FormControl(true),
    });
  }

  get password() { return this.validateForm.get('password'); }
}
