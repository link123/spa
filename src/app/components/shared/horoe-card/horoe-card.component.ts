import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';




@Component({
  selector: 'app-horoe-card',
  templateUrl: './horoe-card.component.html',

})
export class HoroeCardComponent implements OnInit { 
  @Input() heroe: Heroe = null;
  @Input() heroes: Heroe[] = [];
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(  private heroesService: HeroesService,
                private router: Router  
    ) {
          this.heroes = heroesService.getHeroes();
          this.heroeSeleccionado = new EventEmitter();
      }

  ngOnInit(): void {
  }
  verHeroe(){
     console.log(this.index);
     this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
