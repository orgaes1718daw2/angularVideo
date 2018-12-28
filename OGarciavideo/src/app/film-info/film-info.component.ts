import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../pelis';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  public peli: pelicula;
  public esFavorita: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router : Router
  ) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id: number = params['id'];

      this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
        respuesta.forEach(peli => {
          if (id == peli.id) {
            this.peli = peli;
            this.esFavorita = localStorage.getItem('peli_' + this.peli.id);
          }
        });
      });
    });
  }

  /**
 * cambiarEstado
 */
  public cambiarEstado() {
    if (this.esFavorita != undefined) {
      if (this.esFavorita == '1')
        this.esFavorita = '0';
      else
        this.esFavorita = '1';
      localStorage.setItem('peli_' + this.peli.id, this.esFavorita);
    } else {
      this.esFavorita = '1';
      localStorage.setItem('peli_' + this.peli.id, '1');
    }

  }

  /**
   * play
   */
  public play(id: string) {
    this.router.navigate(['/film',{id: id}]);
  }
}
