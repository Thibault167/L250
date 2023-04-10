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

  addSongToPlaylist(playlistId: number, songId: number): void {
    this.getPlaylistById(playlistId).subscribe(
      (playlist) => {
        const songs: string[] = [];
        for (let i = 0; i < playlist.songs.length; i++) {
          songs.push('/~morap01/L250/public/index.php/api/songs/' + playlist.songs[i].id);
        }
        songs.push('/~morap01/L250/public/index.php/api/songs/' + songId);
        this.http.patch(this.apiUrl + '/' + playlistId, {songs: songs})
      });
  }

  removeSongFromPlaylist(playlistId: number, songId: number): void {
    this.getPlaylistById(playlistId).subscribe(
      (playlist) => {
        const songs: string[] = [];
        for (let i = 0; i < playlist.songs.length; i++) {
          if (playlist.songs[i].id !== songId) {
            songs.push('/~morap01/L250/public/index.php/api/songs/' + playlist.songs[i].id);
          }
        }
        this.http.patch(this.apiUrl + '/' + playlistId, {songs: songs}).subscribe(
          () => {
            window.location.reload();
          }
        )
      });
  }
}
