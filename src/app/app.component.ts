import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/Appareil.service';
import { Observable } from 'rxjs/Observable';
import { interval , Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy {

  secondes : number;
  counterSubscription : Subscription;
  
  constructor(){

  }

  ngOnInit()
  {
    const counter = interval(1000)
    this.counterSubscription = counter.subscribe((value) => {
      this.secondes =   value;
    })
  }

  ngOnDestroy()
  {
    this.counterSubscription.unsubscribe();
  }
}
