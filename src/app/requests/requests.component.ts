import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@app/card/card.component';
import { CommonModule } from '@angular/common';
import { NewPipePipe } from 'src/app/new-pipe.pipe';
import { PagerComponent } from '@app/pager/pager.component';
@Component({
  selector: 'requestsPage',
  standalone: true,
  imports: [CardComponent, FormsModule, NewPipePipe, CommonModule,PagerComponent],
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RequestsComponent implements OnInit, AfterViewInit {
  sellected = false;
  totalCards: number = 28;
  cardsPerPage: number = 12;
  currentPage: number = 1;
  visibleCards: any[] = [];
  pagesArray: number[] = []; 
  allCards: any[] = []; 
  totalPages: number = Math.ceil(this.totalCards / this.cardsPerPage);

  ngOnInit(): void {
    let home = document.getElementById('home');
    (home as HTMLElement).style.fontWeight = 'bold';
    this.allCards = Array.from({ length: this.totalCards }, (_, i) => ({
      name: `Ahmad Attar`,
      date: '1/3/2024',
      durationStart:'1/4/2023',
      durationEnd: '14/4/2023',
      duration: '2 Weeks',
      salary: '2500 AED',
    }));

    this.resetToCurrentPage(); 
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', () => this.reapplyStyles());
  }
  CurrentPage:number = 1;
  fun(num: any): void {
    this.CurrentPage = num;
    if (num === 0) {
      if (this.currentPage > 1) {
        this.currentPage -= 1;  
      }
    } else if (num === 1) {
      this.currentPage = 1;
    } else if (num === 2) {
      this.currentPage = 2;
    } else if (num === 3) {
      this.currentPage = 3;
    } else if (num === 4) {
      if (this.currentPage < 3) {
        this.currentPage += 1;  
      }
    }

    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let leftArrow = document.getElementById('leftArrow');
    let rightArrow = document.getElementById('rightArrow');

    switch (this.currentPage) {
      case 1: {
        rightArrow!.style.color = 'rgb(0, 121, 58,1)';  
        leftArrow!.style.color = 'grey';  
        button1!.style.fontWeight = 'bold'; 
        button2!.style.fontWeight = ''; 
        button3!.style.fontWeight = ''; 
        this.resetToCurrentPage();
        
        
        
        break;
      }
      case 2: {
        rightArrow!.style.color = 'rgb(0, 121, 58,1)';  
        leftArrow!.style.color = 'rgb(0, 121, 58,1)'; 
        button1!.style.fontWeight = ''; 
        button2!.style.fontWeight = 'bold'; 
        button3!.style.fontWeight = ''; 
        this.resetToCurrentPage();
        
        
       
        break;
      }
      case 3: {
        rightArrow!.style.color = 'grey';  
        leftArrow!.style.color = 'rgb(0, 121, 58,1)'; 
        button1!.style.fontWeight = ''; 
        button2!.style.fontWeight = ''; 
        button3!.style.fontWeight = 'bold'; 
        this.resetToCurrentPage();
        
       
       
        break;
      }
    }
  }
  resetToCurrentPage(): void {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    this.visibleCards = this.allCards.slice(startIndex, startIndex + this.cardsPerPage);
    this.reapplyStyles();
  }

  

  searchText: string = '';  

  
  UpdateField(event: any): void {
    this.searchText = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (this.searchText) {
      this.visibleCards = this.allCards.filter(card =>
        card.name.toLowerCase().includes(this.searchText) ||
        card.duration.toLowerCase().includes(this.searchText) ||
        card.salary.toLowerCase().includes(this.searchText)
      );
    } else {
      this.resetToCurrentPage();
    }

    this.reapplyStyles(); 
  }

  sellectAll(){
    this.sellected = !this.sellected;
  }
  reapplyStyles(): void {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      
      if (window.innerWidth <= 768) {
        (card as HTMLElement).classList.add('mobile-style');
        (card as HTMLElement).classList.remove('desktop-style');
      } else {
        (card as HTMLElement).classList.add('desktop-style');
        (card as HTMLElement).classList.remove('mobile-style');
      }
    });
  }
  ngOnDestroy(){
    let home = document.getElementById('home');
    (home as HTMLElement).style.fontWeight = '';
  }
  searchTerm: string = '';
  
  updateField(event: any): void {
    this.searchTerm = event.target.value;  
    
  }
}
