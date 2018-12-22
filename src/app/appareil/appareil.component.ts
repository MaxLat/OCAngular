import { Component, OnInit , Input } from '@angular/core';
import { AppareilService } from '../services/Appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent  {

 @Input() appareilName :string;
 @Input() appareilStatus: string;
 @Input() index: number;
 @Input() id: number;


  constructor(private appareilService : AppareilService) {

    

   }

  

  getStatus()
  {
    return "éteint"
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
