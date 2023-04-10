import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song: any;
  @Input() showDescription: boolean = true;
  showPlayer = false;
  constructor() { }

  ngOnInit(): void {
  }

  togglePlayer() {
    this.showPlayer = !this.showPlayer;
  }

}
