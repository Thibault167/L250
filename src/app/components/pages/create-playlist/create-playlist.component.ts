import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaylistService} from "../../../services/playlist.service";

@Component({
  selector: 'app-create-my-playlists',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  playlistForm: FormGroup

  constructor(private formBuilder: FormBuilder, private playlistService: PlaylistService) {
    this.playlistForm = this.formBuilder.group({
      playlistName: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.playlistService.createPlaylist(this.playlistForm.value.playlistName).subscribe(
      (data) => {
        this.playlistService.addPlaylistToMyPlaylists(data.id);
        window.location.reload();
      }
    )
  }
}
