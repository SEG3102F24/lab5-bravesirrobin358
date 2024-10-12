import { Timestamp } from '@angular/fire/firestore';

export class Employee {
  constructor(
    public name: string,
    public dateOfBirth: Timestamp,
    public city: string,
    public salary: number,
    public gender?: string | null,
    public email?: string | null,
    public id?: string | null
  ) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.salary = salary;
    this.gender = gender;
    this.email = email;
    this.id = id;
  }
  toObject() {
    return {
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      city: this.city,
      salary: this.salary,
      gender: this.gender || null,
      email: this.email || null,
      id: this.id || null,
    };
  }
}
