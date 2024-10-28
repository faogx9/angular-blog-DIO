import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {

  @Input()  //para permitir que os  valores sejam passados do pages/home.component.html
  photoCover:string="";
  
  @Input()
  cardTitle:string = "";
  
  @Input()
  id:string = "0";

}
