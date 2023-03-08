import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AboutComponent} from "./about/about.component";
import {DetailComponent} from "./detail/detail.component";
import {PhotosComponent} from "./photos/photos.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'about',component:AboutComponent},
  {path:'albums/:id',component:DetailComponent},
  {path:'albums/:id/photos',component:PhotosComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
