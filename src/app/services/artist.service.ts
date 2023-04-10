import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists';

  constructor(private http: HttpClient) { }
  private formatUrl(url: string): string {
    return `https://mmi.unilim.fr${url}`;
  }
  getArtists() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      switchMap(artists => {
        const firstArtists = artists.slice(0, 8);
        const requests = firstArtists.map(artist => {
          const albumRequests = artist.albums.slice(0, 2).map((albumUrl: string) => this.http.get(this.formatUrl(albumUrl)));
          return forkJoin([...albumRequests]).pipe(
            map((results: any[]) => {
              const albums = results.slice(0, albumRequests.length);
              return { ...artist, albums };
            })
          );
        });

        return forkJoin(requests);
      })
    );
  }

}

