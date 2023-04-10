import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../../services/artist.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    // get the id from the url
    const id = this.extractId(window.location.pathname)
    this.artistService.getArtist(id).subscribe(artist => {
      this.artist = artist;
    });
  }

  extractId(url: string): number {
    let urlParts = url.split('/');

    let id = urlParts[urlParts.length - 1];

    return parseInt(id,10);
  }

}
