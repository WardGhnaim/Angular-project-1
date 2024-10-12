import { Component, OnInit, Input, OnChanges, SimpleChanges, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@app/card/card.component';
import { NewPipePipe } from '@app/new-pipe.pipe';
import { CommonModule } from '@angular/common';
import { CardsService } from '@app/services/cards.service';

interface cardInformation {
  id: number;
  name: string;
  date: string;
  duration: string;
  durationStart: string;
  durationEnd: string;
  salary: string;
}

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CardComponent, NewPipePipe, FormsModule, CommonModule],
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  providers: [CardsService]
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() displayType: string = '';
  @Input() searchTerm: string = '';  
  @Input() currentPage: number = 1; 
  @Input() sellected:boolean=false;
  totalCards: number = 26; 
  cardsPerPage: number = 12; 
  visibleCards: cardInformation[] = []; 
  allCards: cardInformation[] = [];
  filteredCards: cardInformation[] = []; 
  totalPages: number = 1; 
  selectedCardIds: number[] = [];
  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.cardService.getALlCards().subscribe((data) => {
      this.allCards = data;
      this.filteredCards = this.allCards;
      this.calculateTotalPages();
      this.resetToCurrentPage();
    });
    
    this.reapplyStyles(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['searchTerm']) {
      this.processSearchTerm(this.searchTerm);
    }
    
    if (changes['currentPage']) {
      this.resetToCurrentPage();
    }
    if (changes['sellected']){
      this.sellectAll();
    }
  }
  sellectAll(): void {
    const box = document.getElementById('box');
    if (this.sellected) {
      const icon = document.createElement('i');
      icon.classList.add('bi', 'bi-check');
      box!.appendChild(icon);
      this.effection();
    } else {
      this.UnSelected();
    }
  }

  UnSelected(){
    const box = document.getElementById('box');
    box!.innerHTML = '';
      
      let Sbox = document.querySelectorAll('.SBox');
      Sbox.forEach((Sbox)=>{
        (Sbox as HTMLElement).style.display = '';
    });
      let card = document.querySelectorAll('.c');
      card.forEach((card)=>{
        (card as HTMLElement).style.backgroundColor = '';
       
    });
  }
  
  effection(): void {
    
    let box = document.querySelectorAll('.SBox');
    box.forEach((box)=>{
      (box as HTMLElement).style.display = 'inline-flex';
    });
    let card = document.querySelectorAll('.c');
      card.forEach((card)=>{
        (card as HTMLElement).style.backgroundColor = 'rgb(207, 207, 207 , 0.5)';
        
        
    });
  }
  handleSelectionChange(selection: { id: number, selected: boolean }) {
    
    const { id, selected } = selection;
  
    if (selected) {
      if (!this.selectedCardIds.includes(id)) {
        this.selectedCardIds.push(id);
      }
    } else {
      this.selectedCardIds = this.selectedCardIds.filter(cardId => cardId !== id);
    }
    console.log(this.selectedCardIds);
  }
  
  
  processSearchTerm(term: string): void {
    term = term.trim().toLowerCase();

    if (term) {
      this.filteredCards = this.allCards.filter(card =>
        card.name.toLowerCase().includes(term) ||
        card.duration.toLowerCase().includes(term) ||
        card.salary.toLowerCase().includes(term)
      );
    } else {
      this.filteredCards = this.allCards;
    }

    this.currentPage = 1;
    this.calculateTotalPages();
    this.resetToCurrentPage();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredCards.length / this.cardsPerPage);
  }

  resetToCurrentPage(): void {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;

    console.log('Filtered Cards before slicing:', this.filteredCards);
    if (this.displayType.toLowerCase() === 'home') {
      this.cardsPerPage = 4; 
    } else {
      this.cardsPerPage = 12; 
    }
    this.visibleCards = this.filteredCards.slice(startIndex, endIndex);
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

  ngOnDestroy(): void {
    const home = document.getElementById('home');
    if (home) {
      home.style.fontWeight = '';
    }
  }
}
