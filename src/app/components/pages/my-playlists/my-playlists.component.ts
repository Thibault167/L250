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
    const playlistIds = JSON.parse(localStorage.getItem('myPlaylistIds') || '[]');
    playlistIds.forEach((id: number) => {
      this.playlistService.getPlaylistById(id).subscribe(
        (playlist) => {
          this.myPlaylists.push(playlist);
        }
      );
    });
  }

}
