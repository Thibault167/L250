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
    const id = parseInt(window.location.pathname.split('/')[2])
    this.artistService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      console.log(this.artist);
    });
  }

}
