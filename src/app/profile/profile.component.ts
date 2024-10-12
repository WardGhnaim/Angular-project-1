
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@app/card/card.component'; 
import { CommonModule } from '@angular/common'; 
import { NewPipePipe } from 'src/app/new-pipe.pipe';
import { EmployeeDetailsProfileComponent } from 'src/app/employee-details-profile/employee-details-profile.component';
import { PagerComponent } from '@app/pager/pager.component';
import { PendingReqService } from '@app/services/pending-req.service';
interface cardInformation{
  id: number,
  name: string,
  date: string,
  duration: string,
  durationStart: string,
  durationEnd: string,
  salary: string,
}
@Component({
  selector: 'profilePage',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CardComponent,FormsModule,NewPipePipe,CommonModule,EmployeeDetailsProfileComponent,PagerComponent],
  providers:[PendingReqService],
  encapsulation: ViewEncapsulation.None,

})
export class ProfileComponent {
  
  isTrue:boolean = false;
  searchTerm: string = '';  
  name = 'Ahmad Azmi';
  userInput:number = 8;
  constructor(private pendingReq:PendingReqService){} 
  cardsPerPage: number = 3; 
  visibleCards: cardInformation[] = []; 
  allCards: cardInformation[] = [];
  filteredCards: cardInformation[] = []; 
  totalPages: number = 1; 
  ngOnInit(): void {
    this.pendingReq.getAllCards().subscribe((data) => {
      this.allCards = data;
      this.filteredCards = this.allCards;
    });
  }
  
}
