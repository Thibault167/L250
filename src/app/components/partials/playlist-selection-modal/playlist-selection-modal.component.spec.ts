import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSelectionModalComponent } from './playlist-selection-modal.component';

describe('PlaylistSelectionModalComponent', () => {
  let component: PlaylistSelectionModalComponent;
  let fixture: ComponentFixture<PlaylistSelectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSelectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
