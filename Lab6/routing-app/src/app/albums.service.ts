import { Injectable } from '@angular/core';
import {Photos} from "./photos";
import {Albums} from "./albums";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  base:string = 'https://jsonplaceholder.typicode.com/albums/'
  constructor(private client:HttpClient) {

  }
  getAlbums():Observable<Albums[]>{
    return this.client.get<Albums[]>(`${this.base}`)
  }
  getPhotos(id:number):Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.base}${(id)}/photos`)
  }
  getAlbum(id:number):Observable<Albums>{
    return this.client.get<Albums>(`${this.base}${id}`)
  }

  addAlbum(album: Albums):Observable<Albums>{
    return this.client.put<Albums>(`${this.base}`,album)
  }
  deleteAlbum(id:number):Observable<unknown>{
    return this.client.delete<Albums>(`${this.base}${id}`)
  }
  updateAlbum(album:Albums):Observable<Albums>{
    return this.client.put<Albums>(`${this.base}${album.id}`,album)
  }
}
