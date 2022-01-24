import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';



@Component({
  selector: 'app-heroes-encontrados',
  templateUrl: './heroes-encontrados.component.html',
})
export class HeroesEncontradosComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  
  constructor(    private heroeService: HeroesService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router
  )  {
  
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this.heroeService.findHeroesbyName(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
      }) 
  }

  verHeroe( index: number){
    this.router.navigate(['/heroe', index]);
}

}
