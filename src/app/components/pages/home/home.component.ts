import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../../services/artist.service";
import {SongService} from "../../../services/song.service";
import {AlbumService} from "../../../services/album.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];

  constructor(
    private artistService: ArtistService,
    private songService: SongService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe((artists: any[]) => {
      this.artists = artists;
    });
    this.songService.getSongs().subscribe((songs: any[]) => {
      this.songs = songs;
    });
    this.albumService.getAlbums().subscribe((albums: any[]) => {
      this.albums = albums;
    });
  }

}
