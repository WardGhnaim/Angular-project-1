import { Component } from '@angular/core';

@Component({
  selector: 'app-requests-info',
  standalone: true,
  templateUrl: './requests-info.component.html',
  styleUrl: './requests-info.component.css'
})
export class RequestsInfoComponent {
  leaveRequsets:number = 10;
  vacationRequsets:number = 10;
}
