import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from './search/search.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {CreateComponent} from './create/create.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SongCardComponent} from './song-card/song-card.component';
import {ArtistCardComponent} from './artist-card/artist-card.component';
import {AlbumCardComponent} from './album-card/album-card.component';
import {HttpClientModule} from "@angular/common/http";
import {ArtistService} from "./services/artist.service";
import {SongService} from "./services/song.service";
import {AlbumService} from "./services/album.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'create', component: CreateComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'song_card', component: SongCardComponent},
  {path: 'artist_card', component: ArtistCardComponent},
  {path: 'album_card', component: AlbumCardComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PlaylistComponent,
    CreateComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    SongCardComponent,
    ArtistCardComponent,
    AlbumCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ArtistService,
    SongService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
