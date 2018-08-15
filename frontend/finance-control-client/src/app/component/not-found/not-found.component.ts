import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {timer} from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  public count1: number;
  public count2: number;
  public count3: number;


  randomNum(): number {
    return Math.floor(Math.random() * 9) + 1;
  }

  ngOnInit() {
    let i = 0;

    timer(0, 10).pipe(
      take(40)).subscribe(x => {
      if (i > 40) {
        this.count3 = 4;
      } else {
        this.count3 = this.randomNum();
        i++;
      }
    });


    timer(0, 10).pipe(
      take(80)).subscribe(x => {
      if (i > 80) {
        this.count2 = 0;
      } else {
        this.count2 = this.randomNum();
        i++;
      }
    });


    timer(0, 10).pipe(
      take(100)).subscribe(x => {
      if (i > 100) {
        this.count1 = 4;
      } else {
        this.count1 = this.randomNum();
        i++;
      }
    });
  }

}
