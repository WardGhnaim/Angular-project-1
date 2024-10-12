import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
interface employeeInfo{
  imageURL: string;
  name: string;
  department: string;
  position: string;
  reportingToName: string;
  corporateLevel: string;
  Lifetime: string;
  vacationDaysLeft: string;
  sickDaysLeft: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   

  private employee: employeeInfo = 
    {imageURL: './assets/img.jpg',
      name: 'Ahmad Azmi',
      department: 'Marketing Department',
      position: 'Junior Accounting Officer',
      reportingToName: 'Salwa Assem',
      corporateLevel: '10',
      Lifetime: '2.5',
      vacationDaysLeft: '10',
      sickDaysLeft: '14',
};
  getEmployeeInfo(): Observable<employeeInfo> {
    
    return of(this.employee); // Return the found employee or undefined
  }
}
