import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    const id = this.extractId(window.location.pathname)
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
    });
  }

  extractId(url: string): number {
    let urlParts = url.split('/');

    let id = urlParts[urlParts.length - 1];

    return parseInt(id,10);
  }

}
