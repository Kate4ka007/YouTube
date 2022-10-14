import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      // console.log('submit', this.validateForm.value);
      this.localstorageService.setUserNametoLocalStorage(this.validateForm.value.userName);
      this.localstorageService.setToketolokalStorage();
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
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
