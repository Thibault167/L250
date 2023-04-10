import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums';
  constructor(private http: HttpClient) { }

  private formatUrl(id: string): string {
    return `https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists/${id}`;
  }
  getAlbums(search: string = '') {
    let url = this.apiUrl;
    if (search) {
      url += `?title=${search}`;
    }
    return this.http.get<any[]>(url).pipe(
      switchMap(albums => {
        const firstAlbums = albums.slice(0, 8);
        const requests = firstAlbums.map(album => {
          const artistRequest = this.http.get(this.formatUrl(album.artist.id));
          return forkJoin([artistRequest]).pipe(
            map((results: any[]) => {
              const [artist] = results;
              return { ...album, artist };
            }));
        });
        return forkJoin(requests);
      })
    );
  }

  getAlbum(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      switchMap(album => {
        const artistRequest = this.http.get(this.formatUrl(album.artist.id));
        return forkJoin([artistRequest]).pipe(
          map((results: any[]) => {
            const [artist] = results;
            return { ...album, artist };
          }
        ));
      })
    );
  }
}
