import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '@app/services/carousel.service';
interface NewsItem {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'], 
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit {
  newsItems: NewsItem[] = [];
  constructor(private carouselService:CarouselService) {}
  
  ngOnInit(): void {
    this.carouselService.getNewsItems().subscribe((data)=>{this.newsItems = data});
  }
}
