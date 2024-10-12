import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

interface employeeInfo {
  imageURL: string;
  name: string;
  position: string;
  reportingToName: string;
  corporateLevel: string;
}

@Component({
  selector: 'app-employee-details-home',
  standalone: true,
  imports: [],
  templateUrl: './employee-details-home.component.html',
  styleUrls: ['./employee-details-home.component.css'] 
})
export class EmployeeDetailsHomeComponent implements OnInit { 
  employee: employeeInfo | undefined; 

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeInfo().subscribe((data) => {
      this.employee = data;
    });
  }
}
