import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) 
    { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    
  }

  public infopeli(id: number) {
    this.router.navigate(['/filminfo', { id: id }]);
  }

}
