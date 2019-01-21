import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { FilmComponent } from './film/film.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'favorites', component: FavoritesComponent },
  {path: 'search', component: SearchComponent },
  {path: 'film', component: FilmComponent},
  {path: 'filminfo', component: FilmInfoComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
