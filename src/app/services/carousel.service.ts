import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
interface NewsItem {
  imageUrl: string;
  title: string;
  description: string;
}
@Injectable()
export class CarouselService {
  private news:NewsItem[]=[
    {
      imageUrl: 'assets/news.jpg',
      title: 'Best Spots For a Summer Vacation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, non? Lorem ipsum dolor, veniam, harum architecto modi odit omnis!'
    },
    {
      imageUrl: 'assets/news.jpg',
      title: 'Top Destinations to Explore This Year',
      description: 'Discover the top destinations you should explore this year. From beautiful beaches to cultural hotspots, there’s something for everyone.'
    },
    {
      imageUrl: 'assets/news.jpg',
      title: 'How to Travel on a Budget',
      description: 'Want to see the world without breaking the bank? Check out these tips for traveling on a budget without compromising on experiences.'
    },
  ]
  constructor() { }
  getNewsItems():Observable<NewsItem[]>{
    return of(this.news);
  }
}
