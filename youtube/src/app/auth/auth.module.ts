import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ZorroAntdModule } from './ng-zorro-antd.module';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import {
  AuthGuardService as AuthGuard,
} from './services/auth-guard.service';

registerLocaleData(en);

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    LoginFormComponent,
    SpinnerComponent,
    AdminPageComponent,
    SuccessMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ZorroAntdModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    HttpClientJsonpModule,
  ],
  exports: [LoginFormComponent, SpinnerComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AuthModule {}
