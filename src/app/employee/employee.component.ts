import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../model/employee';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
})
export class EmployeeComponent {
  private builder: FormBuilder = inject(FormBuilder);
  private employeeService: EmployeeService = inject(EmployeeService);
  private router: Router = inject(Router);
  employeeForm = this.builder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: ['', Validators.required],
    salary: [0, Validators.required],
    gender: ['', Validators.pattern('^[MFX]$')],
    email: ['', Validators.email],
  });
  msgStyle: any;

  get name(): AbstractControl<string> {
    return <AbstractControl<string>>this.employeeForm.get('name');
  }
  get dateOfBirth(): AbstractControl<string> {
    return <AbstractControl<string>>this.employeeForm.get('dateOfBirth');
  }
  get city(): AbstractControl<string> {
    return <AbstractControl>this.employeeForm.get('city');
  }
  get salary(): AbstractControl<number> {
    return <AbstractControl<number>>this.employeeForm.get('salary');
  }
  get gender(): AbstractControl<string> {
    return <AbstractControl<string>>this.employeeForm.get('gender');
  }
  get email(): AbstractControl<string> {
    return <AbstractControl<string>>this.employeeForm.get('email');
  }

  onSubmit() {
    const employee: Employee = new Employee(
      this.name.value,
      new Timestamp(new Date(this.dateOfBirth.value).getTime() / 1000, 0),
      this.city.value,
      this.salary.value,
      this.gender.value,
      this.email.value
    );
    this.employeeForm.reset();
    console.log(this.employeeService.$);
    this.employeeService.addEmployee(employee);

    this.router.navigate(['/employees']).then(() => {});
  }
}
