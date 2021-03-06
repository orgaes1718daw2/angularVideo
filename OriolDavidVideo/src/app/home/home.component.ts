import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../pelis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tag: string;
  public pelis: pelicula[] = [];
  public pelisFavoritas: number[] = [];


  constructor(
    private router: Router,
    private http: HttpClient) {
  };

  ngOnInit() {
    this.pelis = [];
    //this.http.get<pelicula[]>('http://localhost:8888/archivo?nombre=pelis.json',{headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}).subscribe(respuesta => {
    this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
      this.pelis = respuesta;
      respuesta.forEach(peli => {
        let esFavorita = localStorage.getItem('peli_' + peli.id);
        if (esFavorita != undefined) {
          if (esFavorita == '1')
            this.pelisFavoritas.push(peli.id);
        }
      });
    });
  }

  /**
   * infopeli
   */
  public infopeli(id: number) {
    this.router.navigate(['/filminfo', { id: id }]);
  }

  public esPeliFavorita(id: number): boolean {
  if( this.pelisFavoritas.find(peliFavorita => peliFavorita == id) != undefined)
    return true;
  else 
    return false;
  }
}
