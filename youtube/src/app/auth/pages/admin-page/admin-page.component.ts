import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import isDateValid from '../../validator/isDateValid';
import isUrlValid from '../../validator/isUrlValid';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  successMessage = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      this.successMessage = true;
      setTimeout(() => { this.successMessage = false; }, 3000);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, isUrlValid]),
      link: new FormControl('', [Validators.required, isUrlValid]),
      date: new FormControl('', [Validators.required, isDateValid]),
    });
  }

  get title() {
    return this.validateForm.get('title');
  }

  get description() {
    return this.validateForm.get('description');
  }

  get img() {
    return this.validateForm.get('img');
  }

  get link() {
    return this.validateForm.get('link');
  }

  get date() {
    return this.validateForm.get('date');
  }
}
