import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'register-component', component: RegisterFormComponent},
  // {path: '**', component: AppComponent},
];
