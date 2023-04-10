import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  song: any;
  songURL: SafeResourceUrl;

  constructor(
    private songService: SongService,
    private sanitizer: DomSanitizer
  ) {
    this.songURL = '';
  }

  ngOnInit(): void {
    const id = parseInt(window.location.pathname.split('/')[2]);
    this.songService.getSongById(id).subscribe(song => {
      this.song = song;
      this.songURL = this.sanitizer.bypassSecurityTrustResourceUrl(song.youtube);
    });
  }
}
