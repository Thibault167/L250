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
    const id = parseInt(window.location.pathname.split('/')[2])
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
    });
  }

}
