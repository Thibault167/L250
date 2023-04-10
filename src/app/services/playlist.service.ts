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
    window.localStorage.setItem('myPlaylists', JSON.stringify([]));
  }
  getMyPlaylists(): any {
    if (window.localStorage.getItem('myPlaylists') === null) {
      this.createMyPlaylists();
    }

    return JSON.parse(window.localStorage.getItem('myPlaylists') || '{}');
  }
  addPlaylistToMyPlaylists(playlistId: string, playlistName: string): void {
    const myPlaylists = this.getMyPlaylists();
    myPlaylists.push({id: playlistId,name: playlistName});
    window.localStorage.setItem('myPlaylists', JSON.stringify(myPlaylists));
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
        this.http.patch(this.apiUrl + '/' + playlistId, {songs: songs}).subscribe(
          (response: any) => {
            window.alert('Chanson ajoutée à la playlist avec succès !');
          }
        )
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
            window.alert('Chanson supprimée à la playlist avec succès !');
            window.location.reload();
          }
        )
      });
  }

  getSearchedPlaylist(searchQuery: string): any {
   const playlists = window.localStorage.getItem('myPlaylists');
    if (playlists !== null) {
      const myPlaylists = JSON.parse(playlists);
      myPlaylists.forEach((playlist: any) => {
        if (!playlist.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          myPlaylists.pop(playlist);
        }
      });

      return myPlaylists;
    }
  }
}
