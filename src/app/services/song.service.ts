import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs';

  constructor(private http: HttpClient) { }
  private formatUrl(url: string): string {
    return `https://mmi.unilim.fr${url}`;
  }
  getSongs() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      switchMap(songs => {
        const firstSongs = songs.slice(0, 8);
        const requests = firstSongs.map(song => {
          const artistRequest = this.http.get(this.formatUrl(song.artist));
          const albumRequest = this.http.get(this.formatUrl(song.album));
          return forkJoin([artistRequest, albumRequest]).pipe(
            map((results: any[]) => {
              const [artist, album] = results;
              return { ...song, artist, album };
            }));
        });

        return forkJoin(requests);
      })
    );
  }
}
