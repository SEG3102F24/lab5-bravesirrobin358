import { Timestamp } from '@angular/fire/firestore';
import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(
      new Employee('andrew', new Timestamp(0, 0), 'London', 1000)
    ).toBeTruthy();
  });
});
