import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/datafakes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    //photoCover:string="https://w7.pngwing.com/pngs/202/997/png-transparent-tony-stark-avengers-comic-iron-man-ironman-robert-john-downey-jr.png"
    //contentTitle:string="Minha Noticia"
    //contentDescription:string="Ola Mundo !!"
    photoCover:string=""
    contentTitle:string=""
    contentDescription:string=""

    private id:string|null ="0"

    
    constructor(
      private route:ActivatedRoute
    ){}

    ngOnInit(){
      this.route.paramMap.subscribe(value =>
        this.id = value.get("id")
      )
      this.setValuesToComponent(this.id)
    
    }

    setValuesToComponent(id:string |null){
      const result            = dataFake.filter(article => article.id == id)[0]        
      this.contentTitle       = result.title
      this.contentDescription = result.description
      this.photoCover         = result.photoCover      
    }
  }