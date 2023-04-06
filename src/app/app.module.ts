import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongCardComponent } from './song-card/song-card.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { AlbumCardComponent } from './album-card/album-card.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'song_card', component: SongCardComponent },
  { path: 'artist_card', component: ArtistCardComponent },
  { path: 'album_card', component: AlbumCardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LibraryComponent,
    CreateComponent,
    EditComponent,
    ArtistComponent,
    AlbumComponent,
    NavbarComponent,
    SongCardComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
