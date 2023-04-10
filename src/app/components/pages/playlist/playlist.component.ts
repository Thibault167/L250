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
    const id = this.extractId(window.location.pathname)
    this.playlistService.getPlaylistById(id).subscribe(playlist => {
      this.playlist = playlist;
    });
  }

  extractId(url: string): number {
    let urlParts = url.split('/');

    let id = urlParts[urlParts.length - 1];

    return parseInt(id,10);
  }

}
