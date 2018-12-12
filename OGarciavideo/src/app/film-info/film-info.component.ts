import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../pelis';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  public peli: pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let id:number = params['id'];

      this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
        respuesta.forEach(peli => {
          if (id == peli.id) {
            this.peli = peli;
          }
        });
     });
    });


  }
}
