
import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component'; 
import { CommonModule } from '@angular/common'; 
import { NewPipePipe } from './new-pipe.pipe';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './requests/requests.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, CommonModule, CardComponent], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CardComponent,FormsModule,NewPipePipe,CommonModule,ProfileComponent,HomeComponent,RequestsComponent,RouterModule,ErrorComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
  
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
