import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@app/card/card.component'; 
import { CommonModule } from '@angular/common'; 
import { NewPipePipe } from 'src/app/new-pipe.pipe';
import { RequestsInfoComponent } from 'src/app/requests-info/requests-info.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { EmployeeDetailsHomeComponent } from 'src/app/employee-details-home/employee-details-home.component';
import { PagerComponent } from "../pager/pager.component";
@Component({
  selector: 'homePage',
  standalone: true,
  imports: [CardComponent, FormsModule, NewPipePipe, CommonModule, RequestsInfoComponent, CarouselComponent, EmployeeDetailsHomeComponent, PagerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  Name:string = 'Hazim';
  searchTerm: string = '';  

  
  updateField(event: any): void {
    this.searchTerm = event.target.value;  
  }
  constructor(){
  }
  
}
