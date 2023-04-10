import {Component, Input, OnInit} from '@angular/core';
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-playlist-selection-modal',
  templateUrl: './playlist-selection-modal.component.html',
  styleUrls: ['./playlist-selection-modal.component.css']
})
export class PlaylistSelectionModalComponent implements OnInit {
  @Input() songId: any;
  playlists: any = [];
  showModal = false;
  selectedPlaylist: number | undefined;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.fetchPlaylists();
  }

  fetchPlaylists() {
    const playlistIds = JSON.parse(localStorage.getItem('myPlaylistIds') || '[]');
    playlistIds.forEach((id: number) => {
      this.playlistService.getPlaylistById(id).subscribe(
        (playlist) => {
          this.playlists.push(playlist);
        }
      );
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addSongToPlaylist(): void {
    if (this.selectedPlaylist) {
      this.playlistService.addSongToPlaylist(this.selectedPlaylist, this.songId)
    }
    this.closeModal();
  }
}
