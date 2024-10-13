import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { Employee } from '../model/employee';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';
import {
  Firestore,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        Firestore,
      ],
      providers: [EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the employees', () => {
    service.getEmployees().subscribe((data) => {
      const stored_employees = data.map((e) => {
        return {
          id: e.id,
          ...e,
        } as Employee;
      });
      expect(stored_employees.length).toBeGreaterThan(0);
    });
  });
});
