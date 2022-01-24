import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  
  heroe: Heroe = null;
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
    ) {

      this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });

   }

  ngOnInit(): void {
  }

  verHeroes(){
    this.router.navigate(['/heroes']);
  }


}
