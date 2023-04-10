import {Component, Input, OnInit} from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song: any;
  @Input() showDescription: boolean = true;
  @Input() showAddIcon: boolean = true;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  removeFromPlaylist(): void {
    if (window.location.pathname.includes('my-playlist')) {
      this.playlistService.removeSongFromPlaylist(parseInt(window.location.pathname.split('/')[2]), this.song.id);
    }
  }

}
