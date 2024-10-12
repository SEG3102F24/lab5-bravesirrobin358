import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: EmployeesComponent },
];
