import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./components/pages/home/home.component";
import {SearchComponent} from './components/pages/search/search.component';
import {MyPlaylistsComponent} from './components/pages/my-playlists/my-playlists.component';
import {ArtistComponent} from './components/pages/artist/artist.component';
import {AlbumComponent} from './components/pages/album/album.component';
import {NavbarComponent} from './components/partials/navbar/navbar.component';
import {SongCardComponent} from './components/partials/song-card/song-card.component';
import {ArtistCardComponent} from './components/partials/artist-card/artist-card.component';
import {AlbumCardComponent} from './components/partials/album-card/album-card.component';
import {HttpClientModule} from "@angular/common/http";
import {ArtistService} from "./services/artist.service";
import {SongService} from "./services/song.service";
import {AlbumService} from "./services/album.service";
import { CreatePlaylistComponent } from './components/pages/create-playlist/create-playlist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PlaylistCardComponent } from './components/partials/playlist-card/playlist-card.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';
import { PlaylistSelectionModalComponent } from './components/partials/playlist-selection-modal/playlist-selection-modal.component';
import { SongComponent } from './components/pages/song/song.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'my-playlists', component: MyPlaylistsComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'my-playlists/:id', component: PlaylistComponent},
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'song/:id', component: SongComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MyPlaylistsComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    SongCardComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    CreatePlaylistComponent,
    PlaylistCardComponent,
    PlaylistComponent,
    PlaylistSelectionModalComponent,
    SongComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    ArtistService,
    SongService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
