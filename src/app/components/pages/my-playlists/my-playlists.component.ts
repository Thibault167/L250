import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.css']
})
export class MyPlaylistsComponent implements OnInit {
  myPlaylists: any = [];
  constructor(private playlistService:PlaylistService) { }

  ngOnInit(): void {
    this.fetchPlaylists();
  }

  fetchPlaylists() {
    const playlists = JSON.parse(localStorage.getItem('myPlaylists') || '[]');
    playlists.forEach((playlist: any) => {
      this.playlistService.getPlaylistById(playlist.id).subscribe(
        (playlist) => {
          this.myPlaylists.push(playlist);
        }
      );
    });
  }

}
