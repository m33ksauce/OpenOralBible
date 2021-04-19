import { Component, OnInit } from '@angular/core';
import { MediaListItem } from 'src/app/models/MediaListItem';
import { MetadataService } from 'src/app/services/Metadata/metadata.service';

@Component({
  selector: 'verse-selector',
  templateUrl: './verse-selector.component.html',
  styleUrls: ['./verse-selector.component.scss'],
})
export class VerseSelectorComponent implements OnInit {
  catalog: MediaListItem[];

  verses: Array<Object>;
  constructor(
    public metadataService: MetadataService
  ) { 
    metadataService.getAvailableMedia().subscribe(media => this.catalog = media);
    this.verses = [
      {title: "Luke 1:1"},
      {title: "Luke 1:2"},
    ];
  }

  ngOnInit() {
    
  }

}