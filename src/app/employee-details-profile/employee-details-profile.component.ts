import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
interface employeeInfo{
  imageURL:string;
  name:string;
  department:string;
  position:string;
  reportingToName:string;
  corporateLevel:string;
  Lifetime:string;
  vacationDaysLeft:string;
  sickDaysLeft:string;
}
@Component({
  selector: 'app-employee-details-profile',
  standalone: true,
  imports: [],
  templateUrl: './employee-details-profile.component.html',
  styleUrl: './employee-details-profile.component.css'
})
export class EmployeeDetailsProfileComponent {
  employee: employeeInfo | undefined; 

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeInfo().subscribe((data) => {
      this.employee = data;
    });
  }
}
