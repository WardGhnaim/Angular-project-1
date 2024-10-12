import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
interface cardInformation{
  id: number,
  name: string,
  date: string,
  duration: string,
  durationStart: string,
  durationEnd: string,
  salary: string,
}
@Injectable()
export class PendingReqService {
  private cards:cardInformation[]=[
    {
      id: 0,
      name: `Ahmad Attar`,
      date: '1/3/2024',
      duration: '2 Weeks',
      durationStart:'1/4/2023',
      durationEnd: '14/4/2023',
      salary: '2500 AED',
    },
    {
      id: 1,
      name: `Ahdmad Attar`,
      date: '1/3/2024',
      duration: '2 Weeks',
      durationStart:'1/4/2023',
      durationEnd: '14/4/2023',
      salary: '1100 AED',
    },
    {
      id: 2,
      name: `Ahmad Attar`,
      date: '1/3/2024',
      duration: '2 Weeks',
      durationStart:'1/4/2023',
      durationEnd: '14/4/2023',
      salary: '2500 AED',
    },]
  constructor() { }
  getAllCards():Observable<cardInformation[]>{
    return of(this.cards);
  }
}
