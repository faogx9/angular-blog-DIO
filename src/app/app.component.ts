import { Component,OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnChanges{
  
  constructor() {
   console.log(` Construtor - APP `)
  }
 
     //este é o primeiro metodo que o anguar invoca quando o componete é construido
   ngOnInit(): void {
       console.log(` OnInit - APP` )  
   }
 
   ngOnChanges(): void {
     console.log(` OnChanges - APP`);
   }
}
