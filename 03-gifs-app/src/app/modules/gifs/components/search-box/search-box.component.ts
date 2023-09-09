import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>
  public limit: string = '10';

  constructor(
    private _gifsService: GifsService
  ) { }

  get getTag(): string {
    return this._gifsService.getTag
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this._gifsService.setLimit = this.limit;
    this._gifsService.searchTag(newTag);
  }
}
