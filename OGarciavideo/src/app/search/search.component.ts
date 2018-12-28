import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../pelis';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public tag: string;
  public pelis: pelicula[] = [];//array, [] para mas de 1
  public pelisFavoritas: number[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router : Router
    )
     {
   
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.tag = params['tag'];
      this.pelis = [];
      this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
        respuesta.forEach(peli =>{
          
          if (peli.nombre.toLowerCase().includes(this.tag.toLowerCase()) || 
          peli.director.toLowerCase().includes(this.tag.toLowerCase()) || 
          peli.genero.toLowerCase().includes(this.tag.toLowerCase())) {
            this.pelis.push(peli);
          }
        });
        this.pelis.forEach(peli => {
          let esFavorita = localStorage.getItem('peli_' + peli.id);
          if (esFavorita != undefined) {
            if (esFavorita == '1')
              this.pelisFavoritas.push(peli.id);
          }
        });
      });
    });

  }
  /**
   * infopeli
   */
  public infopeli(id: number) {
    this.router.navigate(['/filminfo',{id: id}]);
  }

  public esPeliFavorita(id: number): boolean {
    if( this.pelisFavoritas.find(peliFavorita => peliFavorita == id) != undefined)
      return true;
    else 
      return false;
    }

}
