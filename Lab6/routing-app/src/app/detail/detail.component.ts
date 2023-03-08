import { Component } from '@angular/core';
import {AlbumsService} from "../albums.service";
import {Albums} from "../albums";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  album:Albums;
  newAlbum:Albums;
  load:boolean
  constructor(private albumservice:AlbumsService,private route:ActivatedRoute) {
    this.album = {} as Albums;
    this.newAlbum = {} as Albums;
    this.load = true;
  }
  ngOnInit(){
    this.getId()
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      let id = Number(params.get('id'));
      this.load = false;
      this.albumservice.getAlbum(id).subscribe((album) => {this.album = album;this.load = true})
    })
  }
  updateAlbum() {
    this.newAlbum.id = this.album.id;
    this.albumservice.updateAlbum(this.newAlbum).subscribe((album) => {
      this.album = album
    });
    this.newAlbum = {} as Albums;
  }
}
