import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: any;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    const id = parseInt(window.location.pathname.split('/')[2])
    this.playlistService.getPlaylistById(id).subscribe(playlist => {
      this.playlist = playlist;
    });
  }

}
