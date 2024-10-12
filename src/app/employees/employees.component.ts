import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe],
})
export class EmployeesComponent implements OnInit {
  protected employees: EmployeeService = inject(EmployeeService);
  ngOnInit(): void {
    this.employees.getEmployees().subscribe((data) => {
      const stored_employees = data.map((e) => {
        return {
          id: e.id,
          ...e,
        } as Employee;
      });
      this.employees.clearLocalEmps();
      for (var emp of stored_employees) {
        this.employees.addEmps(emp);
        console.log(emp);
      }
    });
  }
}
