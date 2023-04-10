import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./components/pages/home/home.component";
import {SearchComponent} from './components/pages/search/search.component';
import {PlaylistComponent} from './components/pages/playlist/playlist.component';
import {CreateComponent} from './components/pages/create/create.component';
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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'create', component: CreateComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'album', component: AlbumComponent},
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
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
    RouterModule.forRoot(routes),
  ],
  providers: [
    ArtistService,
    SongService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
