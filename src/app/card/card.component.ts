import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CommonModule  } from '@angular/common';
import { NewPipePipe } from '@app/new-pipe.pipe';

interface Data {
  id: number;
  name: string;
  date: string;
  duration: string;
  durationStart: string;
  durationEnd: string;
  salary: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe, NewPipePipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Output() selectedChange = new EventEmitter<{ id: number, selected: boolean }>(); 
@Input() data!: Data;
@Input() searchText: string = '';
public _selected: boolean = false;

get selected(): boolean {
  return this._selected;
}

toggleSellection() {
  this._selected = !this._selected;
  this.selectedChange.emit({ id: this.data.id, selected: this._selected }); 
}
}
