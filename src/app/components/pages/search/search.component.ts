import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../../services/artist.service";
import {SongService} from "../../../services/song.service";
import {AlbumService} from "../../../services/album.service";
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];
  playlists: any[] = [];

  constructor(
    private artistService: ArtistService,
    private songService: SongService,
    private albumService: AlbumService,
    private playlistService: PlaylistService
  ) { }

  onSearchChange() {
    this.artists = [];
    this.songs = [];
    this.albums = [];
    this.playlists = [];
    if (this.searchQuery.length > 1) {
      this.artistService.getArtists(this.searchQuery).subscribe((artists: any[]) => {
        this.artists = artists;
      });
      this.songService.getSongs(this.searchQuery).subscribe((songs: any[]) => {
        this.songs = songs;
      });
      this.albumService.getAlbums(this.searchQuery).subscribe((albums: any[]) => {
        this.albums = albums;
      });
      this.fetchPlaylists(this.playlistService.getSearchedPlaylist(this.searchQuery))
    }
  }

  ngOnInit(): void {
  }

  fetchPlaylists(playlists: any) {
    playlists.forEach((playlist: any) => {
      this.playlistService.getPlaylistById(playlist.id).subscribe(
        (playlist) => {
          this.playlists.push(playlist);
        }
      );
    });
  }

}
