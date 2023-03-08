import { Component } from '@angular/core';
import {AlbumsService} from "../albums.service";
import {Photos} from "../photos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos:Photos[] = [];
  load:boolean;
  constructor(private albumservice:AlbumsService,private route:ActivatedRoute) {
    this.load = true;
  }
  ngOnInit(){
    this.getId();
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.load = false;
      this.albumservice.getPhotos(id).subscribe((photos)=>{this.photos = photos; this.load = true;});
    })
  }
}
