
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './new-component/card.component'; 
import { CommonModule } from '@angular/common'; 
import { NewPipePipe } from './new-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, CommonModule, CardComponent], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CardComponent,FormsModule,NewPipePipe,CommonModule],
})
export class AppComponent {
  
  isTrue:boolean = false;
  cardsButton:string = 'Show Cards';
  toggleVariable() {
    this.isTrue = !this.isTrue;
  }
  classandstyle:string = 'card-grid'
  name = 'Ahmad Azmi';
  title = 'first-angular-project';
  userInput:number = 10;
  
  showComponent = true;

  // Toggle the visibility of the child component
  toggleComponent() {
    this.showComponent = !this.showComponent;
    
    if(this.isTrue == true){
      this.cardsButton = 'Hide Cards';
    }
    else{this.cardsButton = 'Show Cards';}
  }
  
  
}
