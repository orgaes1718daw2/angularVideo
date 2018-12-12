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
  

  constructor(
    private router : Router,
    private http: HttpClient)
     {
  };

  ngOnInit() {
    this.pelis = [];
    this.http.get<pelicula[]>('assets/pelis.json').subscribe(respuesta => {
      this.pelis = respuesta;
    });

  }

  /**
   * infopeli
   */
  public infopeli(id: number) {
    this.router.navigate(['/filminfo',{id: id}]);
  }
}
