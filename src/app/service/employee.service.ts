import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  addEmps(emp: Employee) {
    this.employees$.next([...this.employees$.getValue(), emp]);
    return true;
  }
  private firestore: Firestore = inject(Firestore);
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<
    readonly Employee[]
  >([]);

  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  clearLocalEmps() {
    this.employees$ = new BehaviorSubject<readonly Employee[]>([]);
  }

  getEmployees(): Observable<Employee[]> {
    const employees = collection(this.firestore, 'emps', 'user', 'employees');
    return collectionData(employees, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

  addEmployee(employee: Employee) {
    console.log(this.$);
    this.employees$.next([...this.employees$.getValue(), employee]);
    console.log(this.$);
    const employees = collection(this.firestore, 'emps', 'user', 'employees');
    delete employee.id;
    // @ts-ignore
    console.log(employee.toObject());
    console.log(employees);
    console.log(this.$);
    return addDoc(employees, employee.toObject());
  }
}
