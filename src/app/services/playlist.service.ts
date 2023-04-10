import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists';
  constructor(private http: HttpClient) { }
  createPlaylist(name: string): Observable<any> {
    const body = { name: name };
    return this.http.post(this.apiUrl, body);
  }
  createMyPlaylists():void {
    window.localStorage.setItem('myPlaylistIds', JSON.stringify([]));
  }
  getMyPlaylists(): any {
    if (window.localStorage.getItem('myPlaylistIds') === null) {
      this.createMyPlaylists();
    }

    return JSON.parse(window.localStorage.getItem('myPlaylistIds') || '{}');
  }
  addPlaylistToMyPlaylists(playlistId: string): void {
    const myPlaylists = this.getMyPlaylists();
    myPlaylists.push(playlistId);
    window.localStorage.setItem('myPlaylistIds', JSON.stringify(myPlaylists));
  }

  getPlaylistById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }

}
