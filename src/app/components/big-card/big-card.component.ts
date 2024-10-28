import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent implements OnInit {

  @Input()  //para permitir que os  valores sejam passados do pages/home.component.html
  photoCover:string="";
  
  @Input()
  cardTitle:string = "";
  
  @Input()
  cardDescription:string="";

  @Input()
  id:string="0"

  
  constructor(){}

  ngOnInit(): void {
    
  }

}
