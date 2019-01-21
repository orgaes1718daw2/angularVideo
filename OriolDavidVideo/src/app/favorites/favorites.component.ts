import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../pelis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public pelis: pelicula[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.pelis = [];
    //this.http.get<pelicula[]>('http://localhost:8888/archivo?nombre=pelis.json',{headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}).subscribe(respuesta => {
    this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
      respuesta.forEach(peli => {
        let esFavorita = localStorage.getItem('peli_' + peli.id);
        if (esFavorita != undefined) {
          if (esFavorita == '1')
            this.pelis.push(peli);
        }
      });
    });
  }
  public infopeli(id: number) {
    this.router.navigate(['/filminfo', { id: id }]);
  }
}